(window.webpackJsonp=window.webpackJsonp||[]).push([[24,63,76],{244:function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="1c25")}({"1c25":function(t,e,n){"use strict";var r;(n.r(e),"undefined"!=typeof window)&&(n("4141"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));var i=n("3458"),o=n.n(i),s=n("1d41"),a=n.n(s);var c=function(t,e,n,r,i,o,s,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}({name:"AnswerResult",props:{configData:Object},computed:{boxClientRect(){const{width:t="100%",height:e="100%",background:n="transparent"}=this.configData;return{width:t,height:e,background:n}},innerBoxClientRect(){const{innerWidth:t="60%",innerHeight:e="70%"}=this.configData;return{width:t,height:e}}},components:{TButton:o.a,SvgIcon:a.a},methods:{handleClose(){this.$emit("handleClose")}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"answer-result-container",style:t.boxClientRect},[n("div",{staticClass:"answer-result-box",style:t.innerBoxClientRect},[t._l(t.configData.result,(function(e,r){return n("div",{key:r,staticClass:"answer-bar-item"},[e.topTitle?n("div",{staticClass:"top-title"},[n("span",[t._v(t._s(e.topTitle))])]):t._e(),n("div",{staticClass:"answer-bar"},[n("div",{staticClass:"answer-bar-inner",style:"height: "+e.percentage+"%; background: "+(t.configData.barColor||"#F85415")})]),e.bottomTitle?n("div",{staticClass:"bottom-title"},[n("span",[t._v(t._s(e.bottomTitle))])]):t._e(),e.icon?n("SvgIcon",{attrs:{iconClass:e.icon,className:"expressive-icon"}}):t._e()],1)})),t.configData.showClose?n("TButton",{staticClass:"close-btn",attrs:{type:"text",icon:"close",flat:""},on:{click:t.handleClose}}):t._e()],2)])}),[],!1,null,null,null).exports;c.install=function(t){t.component(c.name,c)};var u=c;e.default=u},"1d41":function(t,e){t.exports=n(222)},3458:function(t,e){t.exports=n(205)},4141:function(t,e){!function(t){var e=t.getElementsByTagName("script");"currentScript"in t||Object.defineProperty(t,"currentScript",{get:function(){try{throw new Error}catch(r){var t,n=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in e)if(e[t].src==n||"interactive"==e[t].readyState)return e[t];return null}}})}(document)}})},283:function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="1c25")}({"1c25":function(t,e,n){"use strict";var r;(n.r(e),"undefined"!=typeof window)&&(n("4141"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));var i=n("7ff2"),o=n.n(i),s=n("3458"),a=n.n(s);var c=function(t,e,n,r,i,o,s,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}({name:"QuizContest",mixins:[o.a.mixins],props:{seconds:{type:Number,default:0}},data:()=>({timer:null,num:0,step:"",countdownSeconds:3,readySeconds:3,startSeconds:60}),components:{TButton:a.a},computed:{isStart(){return"start"===this.step},tips(){return this.step&&this.t(`ui.active.${{countdown:"countdown",ready:"ready",start:"isSpeaking",end:"speakEnd"}[this.step]}`)}},mounted(){this.seconds?this.start(this.startSeconds+this.countdownSeconds+this.readySeconds,this.seconds):this.countdown(this.countdownSeconds)},beforeDestroy(){this.timer&&cancelAnimationFrame(this.timer)},methods:{countdown(t){this.step="countdown",this.desc(t,()=>{this.ready(this.readySeconds)})},ready(t){this.step="ready",this.desc(t,()=>{this.start(this.startSeconds)})},start(t,e){const n=e?Math.max(Math.ceil(t-e),0):0;this.step="start",this.asc(n,t,this.end)},end(){this.step="end",setTimeout(()=>{this.$emit("end")},2e3)},asc(t,e,n){const r=(new Date).getTime(),i=()=>{const o=(new Date).getTime();this.num=Math.floor((o-r)/1e3)+t,this.num<e?this.timer=requestAnimationFrame(()=>i()):n()};this.timer=requestAnimationFrame(()=>i())},desc(t,e){const n=(new Date).getTime()+1e3*t,r=()=>{const t=(new Date).getTime();this.num=Math.ceil((n-t)/1e3),this.num>0?this.timer=requestAnimationFrame(()=>r()):e()};this.timer=requestAnimationFrame(()=>r())},handleEndSpeak(){this.$emit("end")}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quize-contest-container"},[n("div",{staticClass:"quize-contest-con"},[n("span",{staticClass:"num"},[t._v(t._s(t.num))]),n("div",{staticClass:"title"},[t._v(t._s(t.tips))]),t.isStart?n("TButton",{attrs:{type:"info"},on:{click:t.handleEndSpeak}},[t._v(t._s(t.t("ui.active.end")))]):t._e()],1)])}),[],!1,null,null,null).exports;c.install=function(t){t.component(c.name,c)};var u=c;e.default=u},3458:function(t,e){t.exports=n(205)},4141:function(t,e){!function(t){var e=t.getElementsByTagName("script");"currentScript"in t||Object.defineProperty(t,"currentScript",{get:function(){try{throw new Error}catch(r){var t,n=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in e)if(e[t].src==n||"interactive"==e[t].readyState)return e[t];return null}}})}(document)},"7ff2":function(t,e){t.exports=n(202)}})},284:function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="1c25")}({"1c25":function(t,e,n){"use strict";var r;(n.r(e),"undefined"!=typeof window)&&(n("4141"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));var i=n("99d0"),o=n.n(i);var s=function(t,e,n,r,i,o,s,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}({name:"ThumbsUp",data:()=>({lottieInstance:null}),mounted(){this.loadLikeLottie(),this.playLikeLottie()},methods:{loadLikeLottie(){const t=this.$refs.allLike;this.lottieInstance=o.a.loadAnimation({container:t,renderer:"svg",loop:!0,autoplay:!1,path:"https://openclass-cdn.vipkid.com.cn/private-class/animation/all-like2/data.json"}),this.lottieInstance.addEventListener("loopComplete",()=>{this.lottieInstance.stop(),this.$emit("end")}),this.lottieInstance.addEventListener("error",()=>{this.lottieInstance.destroy(),this.$emit("error")})},playLikeLottie(){this.$nextTick(this.lottieInstance.play.bind(this.lottieInstance))}},beforeDestroy(){this.lottieInstance&&this.lottieInstance.stop()}},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"thumbs-up-container"},[e("div",{ref:"allLike",staticClass:"thumbs-up-con"})])}),[],!1,null,null,null).exports;s.install=function(t){t.component(s.name,s)};var a=s;e.default=a},4141:function(t,e){!function(t){var e=t.getElementsByTagName("script");"currentScript"in t||Object.defineProperty(t,"currentScript",{get:function(){try{throw new Error}catch(r){var t,n=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in e)if(e[t].src==n||"interactive"==e[t].readyState)return e[t];return null}}})}(document)},"99d0":function(t,e){t.exports=n(302)}})},285:function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="1c25")}({"1c25":function(t,e,n){"use strict";var r;(n.r(e),"undefined"!=typeof window)&&(n("4141"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));var i=n("7ff2");var o=function(t,e,n,r,i,o,s,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}({name:"OpenMicrophoneAnimation",mixins:[n.n(i).a.mixins],data:()=>({}),mounted(){},beforeDestroy(){}},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"open-microphone-animation-container"},[this._m(0),e("div",{staticClass:"tips-text"},[this._v(this._s(this.t("ui.voiceAnswer.allMicrophoneing")))]),this._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cricle-point"},[e("div",{staticClass:"big-cricle"}),e("div",{staticClass:"sm-cricle"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ellipsis-box"},[e("div",{staticClass:"ellipsis-con"},[this._v("...")])])}],!1,null,null,null).exports;o.install=function(t){t.component(o.name,o)};var s=o;e.default=s},4141:function(t,e){!function(t){var e=t.getElementsByTagName("script");"currentScript"in t||Object.defineProperty(t,"currentScript",{get:function(){try{throw new Error}catch(r){var t,n=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in e)if(e[t].src==n||"interactive"==e[t].readyState)return e[t];return null}}})}(document)},"7ff2":function(t,e){t.exports=n(202)}})},450:function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="1c25")}({"0ff7":function(t,e){t.exports=n(471)},"1c25":function(t,e,n){"use strict";var r;(n.r(e),"undefined"!=typeof window)&&(n("4141"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));var i=n("0ff7"),o=n.n(i),s=n("49ba"),a=n.n(s),c=n("df32"),u=n.n(c),l=n("3055"),d=n.n(l),f=n("ccd7"),p=n.n(f);var h=function(t,e,n,r,i,o,s,a){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:u}}({name:"Feedback",props:{status:{type:String,default:""},seconds:{type:Number,default:0},questionResultData:{type:Object,default:()=>({})}},components:{StartMeetup:o.a,QuizContest:a.a,OpenMicrophoneAnimation:u.a,ThumbsUp:d.a,AnswerResult:p.a},data:()=>({matchQuestionVisible:!1}),computed:{isStartMeetuping(){return"startMeetuping"===this.status},isGuizContesting(){return"quizContesting"===this.status},isGroupDiscussioning(){return"groupDiscussioning"===this.status},isGroupThumbsUping(){return"thumbsUping"===this.status},isMatchQuestion(){return"matchQuestion"===this.status}},methods:{handleEnd(){this.$emit("end",this.status)}}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.status?n("div",{staticClass:"feedback-container"},[t.isStartMeetuping?n("StartMeetup",{attrs:{seconds:t.seconds},on:{end:t.handleEnd}}):t._e(),t.isGuizContesting?n("QuizContest",{attrs:{seconds:t.seconds},on:{end:t.handleEnd}}):t._e(),t.isGroupDiscussioning?n("OpenMicrophoneAnimation"):t._e(),t.isGroupThumbsUping?n("ThumbsUp",{on:{end:t.handleEnd}}):t._e(),t.isMatchQuestion?n("AnswerResult",{attrs:{configData:t.questionResultData},on:{handleClose:t.handleEnd}}):t._e()],1):t._e()}),[],!1,null,null,null).exports;h.install=function(t){t.component(h.name,h)};var m=h;e.default=m},3055:function(t,e){t.exports=n(284)},4141:function(t,e){!function(t){var e=t.getElementsByTagName("script");"currentScript"in t||Object.defineProperty(t,"currentScript",{get:function(){try{throw new Error}catch(r){var t,n=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in e)if(e[t].src==n||"interactive"==e[t].readyState)return e[t];return null}}})}(document)},"49ba":function(t,e){t.exports=n(283)},ccd7:function(t,e){t.exports=n(244)},df32:function(t,e){t.exports=n(285)}})}}]);