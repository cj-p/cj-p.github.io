(this["webpackJsonpinstant-video-call"]=this["webpackJsonpinstant-video-call"]||[]).push([[0],{35:function(e,t,n){},48:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},80:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c,r,o=n(0),a=n(1),s=n.n(a),i=n(36),u=n.n(i),l=(n(48),n(3)),d=function(){},j=function(e){throw e},b=function(e,t){var n=Object(a.useState)(localStorage.getItem(e)||t()),c=Object(l.a)(n,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){null===r?localStorage.removeItem(e):localStorage.setItem(e,r)}),[e,r]),[r,o]},f=n(37),O=Object(a.createContext)({roomCode:null,connectionId:null,clientId:"",setRoomCode:d,setConnectionId:d,setClientId:d}),h=function(e){var t=e.children,n=Object(a.useState)(null),c=Object(l.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(null),u=Object(l.a)(i,2),d=u[0],j=u[1],h=b("clientId",f.v4),p=Object(l.a)(h,2),m=p[0],v=p[1];return Object(o.jsx)(O.Provider,{value:{roomCode:r,setRoomCode:s,connectionId:d,setConnectionId:j,clientId:m,setClientId:v},children:t})},p=(n(51),n(5)),m=(n(52),{TOP:Symbol("top"),RIGHT:Symbol("right"),BOTTOM:Symbol("bottom"),LEFT:Symbol("left")}),v=function(e){var t=e.on,n=e.off,c=Object(a.useRef)(t),r=Object(a.useRef)(n);return Object(a.useEffect)((function(){c.current=t}),[t]),Object(a.useEffect)((function(){r.current=n}),[n]),Object(a.useEffect)((function(){return c.current(),r.current}),[]),null},x=function(e){var t=e.path,n=e.exact,c=e.from,r=e.disableOnFirst,s=void 0!==r&&r,i=e.transition,u=void 0===i?".3s":i,d=e.children,j=Object(a.useState)(s),b=Object(l.a)(j,2),f=b[0],O=b[1],h=Object(a.useRef)(null),m=Object(a.useRef)(!1),x=Object(a.useState)(s),g=Object(l.a)(x,2),w=g[0],C=g[1],I=Object(a.useRef)(f);return Object(a.useEffect)((function(){I.current=f}),[f]),Object(a.useEffect)((function(){if(null!=h.current){var e=function(){I.current||C(!1)},t=h.current;return t.addEventListener("transitionend",e),function(){return t.removeEventListener("transitionend",e)}}}),[h.current]),Object(a.useEffect)((function(){if(w&&null!=h.current&&m.current){h.current.offsetWidth;O(!0),m.current=!1}}),[w,h.current]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(p.b,{path:t,exact:n,children:Object(o.jsx)(v,{on:function(){C(!0),m.current=!0},off:function(){return O(!1)}})}),w&&Object(o.jsx)("div",{ref:h,className:"transition popup ".concat(f?"on":c.description),style:{transition:u},children:d})]})},g=n(10),w=(n(58),["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude06","\ud83d\ude05","\ud83d\ude02","\ud83e\udd23","\u263a\ufe0f","\ud83d\ude0a","\ud83d\ude07","\ud83d\ude42","\ud83d\ude43","\ud83d\ude09","\ud83d\ude0c","\ud83d\ude0d","\ud83d\ude18","\ud83d\ude17","\ud83d\ude19","\ud83d\ude1a","\ud83d\ude0b","\ud83d\ude1c","\ud83d\ude1d","\ud83d\ude1b","\ud83e\udd11","\ud83e\udd17","\ud83e\udd13","\ud83d\ude0e","\ud83e\udd21","\ud83e\udd20","\ud83d\ude0f","\ud83d\ude12","\ud83d\ude1e","\ud83d\ude14","\ud83d\ude1f","\ud83d\ude15","\ud83d\ude41","\ud83d\ude23","\ud83d\ude16","\ud83d\ude2b","\ud83d\ude29","\ud83d\ude24","\ud83d\ude20","\ud83d\ude21","\ud83d\ude36","\ud83d\ude10","\ud83d\ude11","\ud83d\ude2f","\ud83d\ude26","\ud83d\ude27","\ud83d\ude2e","\ud83d\ude32","\ud83d\ude35","\ud83d\ude33","\ud83d\ude31","\ud83d\ude28","\ud83d\ude30","\ud83d\ude22","\ud83d\ude25","\ud83e\udd24","\ud83d\ude2d","\ud83d\ude13","\ud83d\ude2a","\ud83d\ude34","\ud83d\ude44","\ud83e\udd14","\ud83e\udd25","\ud83d\ude2c","\ud83e\udd10","\ud83e\udd22","\ud83e\udd27","\ud83d\ude37","\ud83e\udd12","\ud83e\udd15","\ud83d\ude08","\ud83d\udc7f","\ud83d\udc79","\ud83d\udc7a","\ud83d\udca9","\ud83d\udc7b","\ud83d\udc80","\u2620\ufe0f","\ud83d\udc7d","\ud83d\udc7e","\ud83e\udd16","\ud83c\udf83","\ud83d\ude3a","\ud83d\ude38","\ud83d\ude39","\ud83d\ude3b","\ud83d\ude3c","\ud83d\ude3d","\ud83d\ude40","\ud83d\ude3f","\ud83d\ude3e"]),C=function(){return w[Math.floor(Math.random()*w.length)]},I=function(e){var t=e.interval,n=void 0===t?500:t,c=Object(a.useState)(C()),r=Object(l.a)(c,2),s=r[0],i=r[1];return Object(a.useEffect)((function(){var e=setInterval((function(){return i(C())}),n);return function(){return clearInterval(e)}})),Object(o.jsx)(o.Fragment,{children:s})},y=function(){return Object(o.jsx)("section",{className:"frontpage",children:Object(o.jsxs)("main",{children:[Object(o.jsxs)("div",{className:"banner",children:[Object(o.jsx)(I,{interval:800}),"\xa0\ud83d\udcbb\xa0\u21c6\ud83d\udcf1\xa0",Object(o.jsx)(I,{interval:900})]}),Object(o.jsxs)(g.b,{to:"./join",className:"button big join",children:[Object(o.jsx)("span",{className:"icon",children:"\ud83d\udd11"}),"\ucc38\uc5ec\ud558\uae30"]}),Object(o.jsx)("br",{}),Object(o.jsxs)(g.b,{to:"./create",className:"button big create",children:[Object(o.jsx)("span",{className:"icon",children:"\ud83d\udd28"}),"\ub9cc\ub4e4\uae30"]})]})})},S=(n(59),function(){var e=Object(p.g)(),t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),i=Object(l.a)(s,2),u=i[0],d=i[1],j=Object(a.useRef)(null);return Object(a.useEffect)((function(){c.length>=6&&e.push("/".concat(c))}),[c,e]),Object(o.jsx)("section",{className:"join",children:Object(o.jsx)("main",{children:Object(o.jsxs)("label",{className:"inputs ".concat(u?"focus":""),children:[Object(o.jsx)("input",{ref:j,type:"number",inputMode:"numeric",value:c,style:{opacity:0,zIndex:-1,position:"absolute"},onFocus:function(){return d(!0)},onBlur:function(){return d(!1)},onKeyDown:function(e){8===e.keyCode||48<=e.keyCode&&e.keyCode<=57||e.preventDefault()},onChange:function(e){var t;(r("".concat(e.target.value).slice(0,6)),e.target.value.length>=6)&&(null===j||void 0===j||null===(t=j.current)||void 0===t||t.blur())}}),new Array(6).fill(null).map((function(e,t){return Object(o.jsx)("span",{className:"individual-number ".concat(c.length===t?"last":""),onClick:function(){var e;return null===j||void 0===j||null===(e=j.current)||void 0===e?void 0:e.focus()},children:c[t]||" "},t)}))]})})})}),N=n(2),k=n.n(N),E=n(4),P=(n(61),n(22)),L=(n(62),function(e){var t=e.tag,n=void 0===t?"div":t,c=e.isLoading,r=e.bound,a=void 0!==r&&r,s=e.className,i=void 0===s?"":s,u=e.style,l=e.children;return Object(o.jsxs)(n,{className:"loading-container ".concat(i),style:Object(P.a)(Object(P.a)({},u),a?{position:"relative"}:{}),children:[l,c&&Object(o.jsx)("div",{className:"spinner"})]})}),R=n(21),T=n.n(R),D="https://".concat("9l5iwnfzf8",".execute-api.").concat("ap-northeast-2",".amazonaws.com/").concat("Prod"),F={fetchRoom:function(){var e=Object(E.a)(k.a.mark((function e(t){var n,c,r,o,a,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.roomCode,c=t.clientId,r=t.password,o=t.connectionId,e.next=3,T.a.post("".concat(D,"/room/").concat(n),{password:r,clientId:c,connectionId:o});case 3:return a=e.sent,s=a.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),createRoom:function(e){return Object(E.a)(k.a.mark((function t(){var n,c,r,o,a,s;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.roomPassword,c=e.roomType,r=e.connectionId,o=e.clientId,t.next=3,T.a.post("".concat(D,"/room"),{roomPassword:n,roomType:c,connectionId:r,clientId:o});case 3:return a=t.sent,s=a.data,t.abrupt("return",{roomCode:s});case 6:case"end":return t.stop()}}),t)})))()}},M=(n(80),function(){return Object(o.jsx)("div",{className:"advertisement",children:"\uad11\uace0\uc601\uc5ed"})});!function(e){e.VIDEO="VIDEO",e.AUDIO="AUDIO"}(c||(c={})),function(e){e.ROOM_IS_FULL="ROOM_IS_FULL"}(r||(r={}));var U=function(){var e=Object(a.useContext)(O),t=e.connectionId,n=e.clientId,r=Object(p.g)(),s=Object(a.useState)(""),i=Object(l.a)(s,2),u=i[0],d=i[1],j=Object(a.useState)(!1),b=Object(l.a)(j,2),f=b[0],h=b[1],m=function(){var e=Object(E.a)(k.a.mark((function e(c){var o,a,s,i,u;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),h(!0),e.prev=2,o=Object.fromEntries(new FormData(c.target).entries()),a=o.roomPassword,s=o.roomType,null!=t){e.next=6;break}throw new Error("no connection id.");case 6:return e.next=8,F.createRoom({clientId:n,connectionId:t,roomPassword:a.toString(),roomType:s});case 8:i=e.sent,u=i.roomCode,r.push("/".concat(u));case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[2,,11,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"create",children:[Object(o.jsx)(L,{tag:"main",isLoading:f,children:Object(o.jsxs)("form",{className:"controls",onSubmit:m,children:[Object(o.jsx)("label",{children:"\ud1b5\ud654 \ud0c0\uc785"}),Object(o.jsxs)("div",{className:"control-group",children:[Object(o.jsxs)("div",{className:"flex-1",children:[Object(o.jsx)("input",{id:"room-type-audio",className:"control",type:"radio",name:"roomType",value:c.VIDEO,defaultChecked:!0}),Object(o.jsx)("label",{htmlFor:"room-type-audio",children:"\uc601\uc0c1"})]}),Object(o.jsxs)("div",{className:"flex-1",children:[Object(o.jsx)("input",{id:"room-type-video",className:"control",type:"radio",name:"roomType",value:c.AUDIO,disabled:!0}),Object(o.jsx)("label",{htmlFor:"room-type-video",children:"\uc74c\uc131"})]})]}),Object(o.jsx)("label",{htmlFor:"room-password",children:"\uc785\uc7a5 \ube44\ubc00\ubc88\ud638"}),Object(o.jsx)("input",{id:"room-password",type:"password",name:"roomPassword",className:"input big control password",placeholder:"\uc5c6\uc74c",value:u,onChange:function(e){return d(e.target.value)}}),Object(o.jsxs)("button",{type:"submit",className:"button big control enter",children:[Object(o.jsx)("span",{className:"icon",children:"\u2728"}),"\ub9cc\ub4e4\uae30"]})]})}),Object(o.jsx)("footer",{children:Object(o.jsx)(M,{})})]})})},A=n(39),_=n.n(A),J=(n(94),n(95),n(40)),z=n.n(J),G=n(13),H=n.n(G),B=function(e){var t=e.visible,n=e.onEnter,c=Object(a.useContext)(O).roomCode,r="".concat("".concat(window.location.protocol,"//").concat(window.location.hostname).concat(window.location.port?":":"").concat(window.location.port).concat("/signal/")).concat(c),s=function(){var e=Object(E.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z()(r);case 2:alert("\ud074\ub9bd\ubcf4\ub4dc\ub85c \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4.");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{id:"create-result",className:H()("controls",{visible:t}),children:[Object(o.jsx)("label",{htmlFor:"room-url",children:"\uc601\uc0c1\ud1b5\ud654\uac00 \ub9cc\ub4e4\uc5b4\uc84c\uc2b5\ub2c8\ub2e4."}),Object(o.jsx)("input",{id:"room-url",type:"url",readOnly:!0,className:"input big control",value:r}),Object(o.jsxs)("div",{className:"control-group",children:[Object(o.jsx)("div",{className:"flex-col flex-3",children:Object(o.jsx)("button",{className:"button big control enter",onClick:s,children:"\ubcf5\uc0ac"})}),Object(o.jsx)("div",{className:"flex-col flex-3",children:Object(o.jsx)("button",{className:"button big control enter",onClick:function(){return navigator.share&&navigator.share({title:document.title,url:r})},children:"\uacf5\uc720"})}),Object(o.jsx)("div",{className:"flex-col flex-5",children:Object(o.jsxs)("button",{className:"button big control enter",onClick:n,children:[Object(o.jsx)("span",{className:"icon",children:"\ud83d\udeaa"}),"\uc785\uc7a5"]})})]})]})},V=(n(35),function(e){var t=e.onLoad,n=void 0===t?d:t,c=e.muted,r=void 0!==c&&c,s=Object(a.useRef)(null),i=Object(a.useRef)(),u=Object(a.useRef)(n),j=Object(a.useState)(!1),b=Object(l.a)(j,2),f=b[0],O=b[1];Object(a.useEffect)((function(){u.current=n}),[n]);var h=Object(a.useCallback)(function(){var e=Object(E.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:return i.current=e.sent,t&&(t.srcObject=i.current),e.next=6,new Promise((function(e){return t.addEventListener("play",e,{once:!0})}));case 6:O(!0),u.current(i.current);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(a.useEffect)((function(){s.current&&h(null===s||void 0===s?void 0:s.current)}),[h]),Object(a.useEffect)((function(){return function(){var e,t;null===i||void 0===i||null===(e=i.current)||void 0===e||null===(t=e.getTracks())||void 0===t||t.forEach((function(e){return e.stop()}))}}),[i]),Object(o.jsx)("div",{className:"local-video ".concat(f?"":"unloaded"),children:Object(o.jsx)("video",{autoPlay:!0,muted:r,playsInline:!0,ref:s,style:{transform:"rotateY(180deg)"}})})}),W=(n(96),n(41)),Y=n.n(W),q=function(e){var t=e.visible,n=e.needPassword,c=e.passwordError,r=e.onEnter,s=Object(a.useState)(""),i=Object(l.a)(s,2),u=i[0],d=i[1],j=Object(a.useRef)(null);return t?Object(o.jsx)("form",{id:"join-room",className:H()({controls:!0,visible:t,"is-private-room":n}),onSubmit:Y()((function(){return r(u)})),children:n?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{htmlFor:"room-password",className:c?"error":"",children:c?"\uc62c\ubc14\ub978 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694":"\ube44\ubc00\ubc88\ud638"}),Object(o.jsxs)("div",{className:"control-group",children:[Object(o.jsx)("input",{id:"room-password",required:!0,type:"password",className:"input big control password",ref:j,value:u,onChange:function(e){return d(e.target.value)}}),Object(o.jsxs)("button",{type:"submit",className:"button big control enter",children:[Object(o.jsx)("span",{className:"icon",children:"\ud83d\udeaa"})," \uc785\uc7a5"]})]})]}):Object(o.jsxs)("button",{type:"submit",className:"button big control enter",children:[Object(o.jsx)("span",{className:"icon",children:"\ud83d\udeaa"})," \uc785\uc7a5"]})}):null},K=function(e){var t=e.mediaStream,n=e.loading,c=void 0!==n&&n,r=e.onLoad,s=void 0===r?d:r,i=e.muted,u=void 0!==i&&i,j=Object(a.useRef)(null),b=Object(a.useRef)(s),f=Object(a.useState)(!1),O=Object(l.a)(f,2),h=O[0],p=O[1];return Object(a.useEffect)((function(){j.current&&(j.current.srcObject=t),p(!0),b.current()}),[t]),Object(o.jsxs)("div",{className:"remote-video ".concat(h?"":"unloaded"),children:[Object(o.jsx)("video",{autoPlay:!0,muted:u,playsInline:!0,ref:j,style:{transform:"rotateY(180deg)",opacity:c?0:1}}),c&&Object(o.jsx)("div",{className:"loading",children:"\uc0c1\ub300\ubc29\uc758 \uc751\ub2f5\uc744 \uae30\ub2e4\ub9ac\ub294 \uc911\uc785\ub2c8\ub2e4."})]})},Q=n(15),X=n(42),Z="wss://".concat("j2wt0t4ra7",".execute-api.").concat("ap-northeast-2",".amazonaws.com/").concat("production","/"),$=new WebSocket(Z),ee=function e(){Object(Q.a)(this,e),this.message="connection id not set.",this.name="NoConnectionIdError"},te=new Promise((function(e){return $.addEventListener("open",e)})),ne=function(){var e=Object(E.a)(k.a.mark((function e(t,n,c){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t){e.next=2;break}throw new ee;case 2:return e.next=4,te;case 4:r=JSON.stringify({connectionId:t,message:{type:n,payload:c}}),$.send(r);case 6:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),ce=function(e,t){var n=function(n){var c=n.data,r=JSON.parse(c),o=r.message,a=r.from;null!=o&&o.type===e&&t(o.payload,a)};return $.addEventListener("message",n),function(){return $.removeEventListener("message",n)}},re=function(){var e=Object(E.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te;case 2:return $.send(""),e.abrupt("return",new Promise((function(e){$.addEventListener("message",(function(t){return e(JSON.parse(t.data).connectionId)}),{once:!0})})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){function e(t){var n=this,c=t.remoteConnectionId,r=void 0===c?null:c,o=t.iceServerUrls,a=void 0===o?[]:o,s=t.onConnect,i=void 0===s?d:s,u=t.onDisconnect,l=void 0===u?d:u,b=t.onFail,f=void 0===b?d:b,O=t.onError,h=void 0===O?j:O;Object(Q.a)(this,e),this.listeningCancelers=[],this.options=void 0,this.rtcPeerConnection=void 0,this.localMediaStream=void 0,this.remoteMediaStream=void 0,this.options={remoteConnectionId:r,iceServerUrls:a,onConnect:i,onDisconnect:l,onFail:f,onError:h},this.remoteMediaStream=new MediaStream,this.rtcPeerConnection=new RTCPeerConnection({iceServers:[{urls:a}]}),this.rtcPeerConnection.addEventListener("negotiationneeded",(function(){return n.sendOffer()})),this.rtcPeerConnection.addEventListener("track",function(){var e=Object(E.a)(k.a.mark((function e(t){var c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.track,e.next=3,n.waitStable();case 3:n.remoteMediaStream.addTrack(c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.rtcPeerConnection.addEventListener("icecandidate",(function(e){var t=e.candidate;if(null!=t)return n.sendIceCandidate(t)})),this.rtcPeerConnection.addEventListener("connectionstatechange",(function(){switch(n.rtcPeerConnection.connectionState){case"connected":i();break;case"disconnected":l();break;case"failed":f()}})),this.listeningCancelers.push(ce("ICE",function(){var e=Object(E.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.waitStable();case 4:return e.next=6,n.rtcPeerConnection.addIceCandidate(new RTCIceCandidate(t));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),this.listeningCancelers.push(ce("SDP",function(){var e=Object(E.a)(k.a.mark((function e(t,c){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.options.remoteConnectionId=c,r=new RTCSessionDescription(t),e.prev=2,e.next=5,n.rtcPeerConnection.setRemoteDescription(r);case 5:if("offer"!==t.type){e.next=8;break}return e.next=8,n.sendAnswer();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),n.options.onError(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}()))}return Object(X.a)(e,[{key:"waitStable",value:function(){var e=this;return new Promise((function(t){if("stable"===e.rtcPeerConnection.signalingState)return t();e.rtcPeerConnection.addEventListener("signalingstatechange",(function(){return t(e.waitStable())}),{once:!0})}))}},{key:"sendIceCandidate",value:function(){var e=Object(E.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne(this.options.remoteConnectionId,"ICE",t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.options.onError(e.t0);case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},{key:"sendAnswer",value:function(){var e=Object(E.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.rtcPeerConnection.createAnswer();case 3:return t=e.sent,e.next=6,this.rtcPeerConnection.setLocalDescription(t);case 6:return e.next=8,ne(this.options.remoteConnectionId,"SDP",t);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),this.options.onError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"sendOffer",value:function(){var e=Object(E.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.options.remoteConnectionId){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,this.rtcPeerConnection.createOffer({iceRestart:!0});case 5:return t=e.sent,e.next=8,this.rtcPeerConnection.setLocalDescription(t);case 8:return e.next=10,ne(this.options.remoteConnectionId,"SDP",t);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),this.options.onError(e.t0);case 15:case"end":return e.stop()}}),e,this,[[2,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"connect",value:function(e){this.options.remoteConnectionId=e}},{key:"addLocalMediaStream",value:function(e){var t=this;this.localMediaStream=e,"closed"!==this.rtcPeerConnection.signalingState&&e.getTracks().sort((function(e,t){return e.kind>t.kind?1:-1})).forEach((function(e){return t.rtcPeerConnection.addTrack(e)}))}},{key:"destroy",value:function(){for(;this.listeningCancelers.length>0;){var e=this.listeningCancelers.pop();e&&e()}this.rtcPeerConnection.close()}}]),e}(),ae=function(e){console.error(e),alert("\ud83d\ude40 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc600\uc2b5\ub2c8\ub2e4.")},se=function(e,t){return Object.entries(e.members).filter((function(e){return Object(l.a)(e,1)[0]!==t})).map((function(e){return Object(l.a)(e,2)[1]}))[0]},ie=function(){var e=Object(a.useContext)(O),t=e.roomCode,n=e.connectionId,c=e.clientId,s=Object(p.g)(),i=Object(p.h)(),u=Object(a.useState)(!1),d=Object(l.a)(u,2),j=d[0],b=d[1],f=Object(a.useState)(!1),h=Object(l.a)(f,2),m=h[0],v=h[1],x=Object(a.useState)(!1),g=Object(l.a)(x,2),w=g[0],C=g[1],I=Object(a.useState)(!1),y=Object(l.a)(I,2),S=y[0],N=y[1],P=Object(a.useState)(!1),R=Object(l.a)(P,2),T=R[0],D=R[1],U=Object(a.useState)(!1),A=Object(l.a)(U,2),J=A[0],z=A[1],G=Object(a.useState)(!1),W=Object(l.a)(G,2),Y=W[0],Q=W[1],X=Object(a.useState)(null),Z=Object(l.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useState)(null),ne=Object(l.a)(te,2),ce=ne[0],re=ne[1],ie=_()(i,s.replace),ue=Object(l.a)(ie,2),le=ue[0].isEntered,de=ue[1],je=function(e){return de({isEntered:e})},be=Object(a.useState)(),fe=Object(l.a)(be,2),Oe=fe[0],he=fe[1];Object(a.useEffect)((function(){var e=new oe({iceServerUrls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302","stun:stun3.l.google.com:19302","stun:stun4.l.google.com:19302"],onDisconnect:function(){return Q(!1)},onConnect:function(){return Q(!0)},onError:ae});return he(e),function(){return e.destroy()}}),[]),Object(a.useEffect)((function(){if(t&&n){var e=setInterval((function(){return F.fetchRoom({roomCode:t,clientId:c,connectionId:n})}),6e4);return function(){return clearInterval(e)}}}),[t,n,le,c]),Object(a.useEffect)((function(){Oe&&le&&ce&&Oe.addLocalMediaStream(ce)}),[le,ce,Oe]),Object(a.useEffect)((function(){Oe&&le&&$&&(null===Oe||void 0===Oe||Oe.connect($))}),[J,le,$,Oe]);var pe=Object(a.useCallback)(function(){var e=Object(E.a)(k.a.mark((function e(t){var n,c,r,o,a,s,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.roomCode,c=t.clientId,r=t.connectionId,o=t.password,a=void 0===o?"":o,Oe){e.next=3;break}return e.abrupt("return");case 3:return D(!0),e.prev=4,e.next=7,F.fetchRoom({roomCode:n,clientId:c,connectionId:r,password:a});case 7:s=e.sent,(i=se(s,c))?ee(i):z(!0);case 10:return e.prev=10,D(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[4,,10,13]])})));return function(t){return e.apply(this,arguments)}}(),[Oe]);return Object(a.useEffect)((function(){null!=t&&null!=Oe&&null!=n&&pe({roomCode:t,clientId:c,connectionId:n}).catch((function(e){var t,n,c;switch(console.log(null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data,r.ROOM_IS_FULL),null===e||void 0===e||null===(n=e.response)||void 0===n?void 0:n.status){case 403:return(null===e||void 0===e||null===(c=e.response)||void 0===c?void 0:c.data)===r.ROOM_IS_FULL?void setTimeout((function(){alert("\uc774\ubbf8 \ub2e4\ub978 \uc0ac\ub78c\uc774 \uc811\uc18d\ud55c \ubc29\uc785\ub2c8\ub2e4."),s.push("/join")}),400):void v(!0);case 404:return void setTimeout((function(){alert("\uc5c6\ub294 \ubc29\uc785\ub2c8\ub2e4."),s.push("/join")}),400);default:return ae(e)}}))}),[c,n,pe,s,t,Oe]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:H()("room",{entered:le}),children:[Object(o.jsxs)(L,{tag:"main",isLoading:T,children:[Object(o.jsx)(L,{isLoading:!w,className:"local-video-container",children:Object(o.jsx)(V,{onLoad:function(e){C(!0),re(e)},muted:!0})}),le&&Oe&&Object(o.jsx)(L,{isLoading:!S,className:"remote-video-container",children:Object(o.jsx)(K,{loading:!Y,mediaStream:Oe.remoteMediaStream,onLoad:function(){return N(!0)}})})||!T&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(B,{visible:J,onEnter:Object(E.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=3;break}return alert("\ube44\ub514\uc624\ubc0f \uc624\ub514\uc624 \uc811\uadfc\uc744 \ud5c8\uc6a9\ud574\uc8fc\uc138\uc694."),e.abrupt("return");case 3:je(!0);case 4:case"end":return e.stop()}}),e)})))}),Object(o.jsx)(q,{visible:!J,needPassword:m,passwordError:j,onEnter:function(){var e=Object(E.a)(k.a.mark((function e(r){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(!1),null==t||null==Oe||null==n){e.next=11;break}return e.prev=2,e.next=5,pe({connectionId:n,clientId:c,roomCode:t,password:r});case 5:je(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),b(!0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()})]})]}),Object(o.jsx)("footer",{children:Object(o.jsx)(M,{})})]})})},ue=function(e){var t=e.transparent,n=void 0===t||t,c=e.back,r=Object(p.i)().code;return Object(o.jsx)("header",{className:"screen-header center ".concat(n?"transparent":""),children:Object(o.jsxs)("div",{className:"inner",children:[c&&Object(o.jsx)(g.b,{className:"back-navigation",to:c,children:"\u3008"}),Object(o.jsxs)("h1",{children:["CODE : ",r]},"header-title")]})})},le=function(){return Object(o.jsxs)(p.d,{children:[Object(o.jsx)(p.b,{path:"/",exact:!0,children:Object(o.jsx)("header",{className:"screen-header center big",children:Object(o.jsx)("div",{className:"inner",children:Object(o.jsx)("h1",{className:"app-title",children:"Signal"},"header-title")})})}),Object(o.jsx)(p.b,{path:"/join",children:Object(o.jsx)("header",{className:"screen-header center",children:Object(o.jsxs)("div",{className:"inner",children:[Object(o.jsx)(g.b,{className:"back-navigation",to:"/",children:"\u3008"}),Object(o.jsx)("h1",{children:"CODE \uc785\ub825"},"header-title")]})})}),Object(o.jsx)(p.b,{path:"/:code(\\d+)",children:Object(o.jsx)(ue,{back:"/",transparent:!0})}),Object(o.jsx)(p.b,{exact:!0,path:"/create",children:Object(o.jsx)("header",{className:"screen-header center",children:Object(o.jsxs)("div",{className:"inner",children:[Object(o.jsx)(g.b,{className:"back-navigation",to:"/",children:"\u3008"}),Object(o.jsx)("h1",{children:"\ubc29 \ub9cc\ub4e4\uae30"},"header-title")]})})}),Object(o.jsx)(p.a,{to:"/"})]})},de=function(){var e=Object(a.useContext)(O).setRoomCode,t=Object(p.i)().code;return Object(a.useEffect)((function(){return t&&e(t),function(){return e(null)}}),[t,e]),null},je=function(){var e=Object(a.useContext)(O),t=e.setConnectionId,n=e.connectionId;return Object(a.useEffect)((function(){re().then(t)}),[t]),Object(o.jsx)(L,{isLoading:!n,children:n&&Object(o.jsx)(g.a,{basename:"/signal/",children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(le,{}),Object(o.jsx)(x,{path:"/",exact:!0,disableOnFirst:!0,from:m.LEFT,children:Object(o.jsx)(y,{})}),Object(o.jsx)(x,{path:"/join",from:m.RIGHT,children:Object(o.jsx)(S,{})}),Object(o.jsx)(x,{path:"/create",from:m.RIGHT,children:Object(o.jsx)(U,{})}),Object(o.jsx)(p.b,{path:"/:code(\\d+)",component:de}),Object(o.jsx)(x,{path:"/:code(\\d+)",from:m.RIGHT,children:Object(o.jsx)(ie,{})})]})})})},be=function(){return Object(o.jsx)(h,{children:Object(o.jsx)(je,{})})};u.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(be,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.1ee740ec.chunk.js.map