import {getConnectionId, onMessage, sendMessage} from "./message.js";

let localConnectionId;
let remoteConnectionId = location.search.match(/[?&]connectionId=([^?&$]*)/)?.[1];
const inviteButton = document.getElementById('invite');
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const rtcPeerConnection = new RTCPeerConnection({
  iceServers: [{
    urls: [
      "stun:stun.l.google.com:19302",
      "stun:stun1.l.google.com:19302",
      "stun:stun2.l.google.com:19302",
      "stun:stun3.l.google.com:19302",
      "stun:stun4.l.google.com:19302",
    ]
  }]
});

if(remoteConnectionId){
  document.body.classList.remove("disconnected");
  document.body.classList.remove("local");
  document.body.classList.add("remote");
  inviteButton.remove();
}else{
  inviteButton.addEventListener('click', () => navigator.share({
    title: document.title,
    text: '화상통화를 하려면 들어오시오',
    url: `${location.href}?connectionId=${localConnectionId}`,
  }))
}

// 아래 세 메소드는 WebSocket을 통해서 통신하므로
// remoteConnectionId input에 상대방의 connectionID가 입력되어 있어야 한다.
const sendSdpOffer = async () => {
  const rtcSessionDescriptionInit = await rtcPeerConnection.createOffer();
  await rtcPeerConnection.setLocalDescription(rtcSessionDescriptionInit);
  sendMessage(remoteConnectionId, 'SDP', rtcSessionDescriptionInit)
};

const sendSdpAnswer = async () => {
  const rtcSessionDescriptionInit = await rtcPeerConnection.createAnswer();
  await rtcPeerConnection.setLocalDescription(rtcSessionDescriptionInit);
  sendMessage(remoteConnectionId, 'SDP', rtcSessionDescriptionInit);
};

const sendIceCandidate = candidate => {
  sendMessage(remoteConnectionId, 'ICE', candidate);
};

// 자신의 connectionId를 받아서 화면에 표시
getConnectionId().then(connectionId => localConnectionId = connectionId);

// 웹캠 화면 가져와 화면에 표시
navigator.mediaDevices
  .getUserMedia({video: true, audio: false})
  .then(mediaStream => {
    localVideo.srcObject = mediaStream;
    mediaStream.getTracks().forEach(track => rtcPeerConnection.addTrack(track));
  });

// SDP offer/answer 교환
if(remoteConnectionId) rtcPeerConnection.addEventListener('negotiationneeded', sendSdpOffer)

// inviteButton.addEventListener('click', sendSdpOffer)
onMessage('SDP', async (descriptionInit, from) => {
  const rtcSessionDescription = new RTCSessionDescription(descriptionInit);
  await rtcPeerConnection.setRemoteDescription(rtcSessionDescription);
  if (descriptionInit.type === 'offer') {
    remoteConnectionId = from;
    document.body.classList.remove("disconnected");
    document.body.classList.remove("local");
    document.body.classList.add("remote");
    inviteButton.remove();
    await sendSdpAnswer();
  }
})

let i =0;
// ICE 후보 교환
rtcPeerConnection.addEventListener('icecandidate', e => e.candidate == null || sendIceCandidate(e.candidate));
onMessage('ICE', candidateInit => {
  i++;
  console.log(i, candidateInit);
  try{
    return rtcPeerConnection.addIceCandidate(new RTCIceCandidate(candidateInit));
  }catch (e) {
    console.log(i)
    console.error(e)
  }
})

// 상대방 화면 표시
rtcPeerConnection.addEventListener('track', e => remoteVideo.srcObject = new MediaStream([e.track]));
