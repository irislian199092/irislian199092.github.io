(window.webpackJsonp=window.webpackJsonp||[]).push([[20,34,35,36],{202:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(209),a=n.n(r);const s=/(%|)\{([0-9a-zA-Z_]+)\}/g;var i=n(210),c=n.n(i),u=n(211),l=n.n(u),p={methods:{t(...e){return T.apply(this,e)}}};n.d(t,"En",(function(){return d})),n.d(t,"Zh",(function(){return h})),n.d(t,"Mixins",(function(){return m})),n.d(t,"t",(function(){return T})),n.d(t,"use",(function(){return k})),n.d(t,"i18n",(function(){return w}));const d=c.a,h=l.a,m=p,f=(o.default,function(e,...t){return 1===t.length&&"object"==typeof t[0]&&(t=t[0]),t&&t.hasOwnProperty||(t={}),e.replace(s,(n,o,r,a)=>{let s;return"{"===e[a-1]&&"}"===e[a+n.length]?r:(s=Object.prototype.hasOwnProperty.call(t,r)?t[r]:null,null==s?"":s)})});let v=c.a,g=!1,y=function(){const e=Object.getPrototypeOf(this||o.default).$t;if("function"==typeof e&&o.default.locale)return g||(g=!0,o.default.locale(o.default.config.lang,a()(v,o.default.locale(o.default.config.lang)||{},{clone:!0}))),e.apply(this,arguments)};const T=function(e,t){let n=y.apply(this,arguments);if(null!=n)return n;const o=e.split(".");let r=v;for(let e=0,a=o.length;e<a;e++){if(n=r[o[e]],e===a-1)return f(n,t);if(!n)return console.warn(`没有多语言"${arguments[0]}"的值，请确认是否设置了该多语言对应的值！`),arguments[0];r=n}return""},k=function(e){v=e||v},w=function(e){y=e||y};t.default={use:k,t:T,i18n:w,en:c.a,zh:l.a,mixins:p}},209:function(e,t,n){"use strict";var o=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function a(e,t){var n;return t&&!0===t.clone&&o(e)?i((n=e,Array.isArray(n)?[]:{}),e,t):e}function s(e,t,n){var r=e.slice();return t.forEach((function(t,s){void 0===r[s]?r[s]=a(t,n):o(t)?r[s]=i(e[s],t,n):-1===e.indexOf(t)&&r.push(a(t,n))})),r}function i(e,t,n){var r=Array.isArray(t);return r===Array.isArray(e)?r?((n||{arrayMerge:s}).arrayMerge||s)(e,t,n):function(e,t,n){var r={};return o(e)&&Object.keys(e).forEach((function(t){r[t]=a(e[t],n)})),Object.keys(t).forEach((function(s){o(t[s])&&e[s]?r[s]=i(e[s],t[s],n):r[s]=a(t[s],n)})),r}(e,t,n):a(t,n)}i.all=function(e,t){if(!Array.isArray(e)||e.length<2)throw new Error("first argument should be an array with at least two elements");return e.reduce((function(e,n){return i(e,n,t)}))};var c=i;e.exports=c},210:function(e,t){e.exports={ui:{tokenError:"TOKEN error, please log in again",networkError:"Network error",serverError:"Server error",tips:"Notice",yes:"Yes",cancel:"Cancel",scheduleTime:"Class hasn't started yet. Please schedule your time.",className:"Class Name",classTime:"Class Time",tryAgain:"Try  Again",exitRoom:"exit room",answersing:"Answer Countdown",praiseStudent:"Everyone in this class will receive a thumbs up as a small reward.",sendSuccessfully:"Published Successful!",enterRoom:{haveLogin:"Your account is in use on another device.",fail:"Your attempt to enter the classroom failed. Please try again."},finishClassclock:{finishClass:"Finish Class",willStart:"Class will start",classTime:"Elapsed class time",early:"Too Early",exitTips:"Are you sure you want to finish class and exit the classroom? "},setting:{settings:"Settings",microphone:"Microphone",selectMicrophone:"Select your microphone",detected:["Audio cannot be detected","Audio has been detected"],microphoneTips1:"If you can’t turn on your microphone",microphoneTips2:"check if it works properly on other apps.",camera:"Camera",selectCamera:"Select your camera",cameraTips1:"If you can’t open your camera",cameraTips2:"check if your camera is in use on other apps. If so, please switch to another camera or close the other apps and try again. ",speaker:"Speaker",selectSpeaker:"Select your speaker",playTxt:["Play","Stop"],playTips:'Click "play" to configure',speakerTips1:"If you cannot hear the sound:",speakerTips2:"1. Check if your speaker and headset wires are properly plugged in",speakerTips3:"2. Turn the volume up and make sure you’re not muted",speakerTips4:"3. Restart your computer",speakerTips5:"If you cannot hear any sound after clicking “play”:",speakerTips6:"1. Check if your speaker and headset wires are properly plugged in",speakerTips7:"2. Check if your headset is plugged into the correct hole",speakerTips8:"3. Check if you’ve turned on your speaker and turned up the volume",speakerTips9:"4. Restart your computer"},refresh:{refresh:"Refresh",tips:"The connection is lost. Please refresh the page.",sureRefresh:"Are you sure you want to refresh this page?",notRefreshTips:"Students are having class activities at the moment. Please do not refresh the page."},operat:{stage:["Start Meet-up","End Meet-up"],microphone:["Quiz Contest","End Quiz Contest"],discussion:["Group Discussion","End Discussion"],thumbs:"Thumbs Up",openAllStudentMicrophone:"Turn the microphone on for everyone so they can discuss within their groups."},active:{speaking:"Students within the same group will speak in turn.",speakEnd:"Ending now",ready:"Get ready for a quiz contest!",isSpeaking:"Students will compete for a chance to speak and answer a question on behalf of a group.",end:"End",countdown:"countdown"},video:{openCameraTip:"The camera is open. Students can see you now.",closeCameraTip:"The camera is closed. Students cannot see you.",openMicrophoneTip:"Your microphone is on. Students can hear you now.",closeMicrophoneTip:"Your microphone is off. Students cannot hear you.",notAllowSwitchTip:"Group activities are in progress. Switching the video/slides window is not allowed."},groupVideo:{no:"No. {num}",norank:"No ranking",average:"Average Points",manual:"Manual Switch",auto:"Auto Switch",switch:"Switch Group",camera:"Camera",encourage:"Encourage",tips:"Your internet connection is unstable. Please close the video streaming window and check your connection.",thumbsGroup:"All students in this group get a thumbs up!",defaultName:"Group"},rank:{online:"Online Student {num}",ranking:"Ranking",group:"Group",average:"Average Points",thumbs10Group:"Top 10 groups get a thumbs up!"},announcementsTips:{tips:"Teacher Tips",noTips:"no Teacher Tips",announcements:"Announcements",noAnnouncements:"No announcements available",info1:"Announcements are your class rules, updates, or any special activities that you want to inform your students about. ",info2:"When you publish an announcement, it will be sent to all of your students. ",compose:"Compose",publish:"Publish",cancel:"Cancel",edit:"Edit",time:"Update Time"},network:{incorrectAccount:"Your account username or password is incorrect. Please try again.",noAuth:"Please log into your account before you can access this page.",operationCancelled:"Operation Cancelled.",errorQuest:"Wrong Request.",accessDenied:"Access Denied.",wrongRequest1:"Wrong Request.",wrongRequest2:"Wrong Request.",requestTimeout:"Request Timeout.",serverError:"Server Error.",networkError1:"Network Error.",networkError2:"Network Error.",serviceUnavailable:"Service Unavailable.",networkTimeout:"Network Timeout.",httpNoSupport:"The current http version does not support this request.",connectionError:"Connection Error. ",connectionServeError:"Your attempt to connect to the server failed."},voiceAnswer:{playAudioFailed:"Failed to play audio!",openBarrage:"Open Barrage",closeBarrage:"Close Barrage",notFinishedQuestions:"Not finished the questions. Please wait a moment.",waitAnswering:"Wait for student's answering…",allMicrophoneing:"All Students' Mics Are On"}}}},211:function(e,t){e.exports={ui:{tokenError:"账号TOKEN异常，请重新登录",networkError:"网络异常",serverError:"服务器异常",tips:"提示",yes:"确认",cancel:"取消",scheduleTime:"课程还未开始，请安排好您的时间",className:"课程名称",classTime:"课程时间",tryAgain:"重试一次",exitRoom:"退出教室",answersing:"答题倒计时",praiseStudent:"表扬全体学生",sendSuccessfully:"发送成功",enterRoom:{haveLogin:"您的账号在其它设备登录",fail:"进教室失败了，请重试"},finishClassclock:{finishClass:"下课",willStart:"课程即将开始",classTime:"上课时长",early:"距离上课尚早",exitTips:"确认下课并退出教室吗？ "},setting:{settings:"设置",microphone:"麦克风",selectMicrophone:"选择你的麦克风",detected:["系统不可以检测到你的声音","系统可以检测到你的声音"],microphoneTips1:"如果你不能打开麦克风:",microphoneTips2:"检查麦克风是否可以在其他应用程序上正常使用",camera:"摄像头",selectCamera:"选择你的摄像头",cameraTips1:"如果你不能打开摄像头：",cameraTips2:"检查你的摄像头是否正被其他应用程序使用。如果是，请更改为其他可用设备或停止应用程序共享设备",speaker:"扬声器",selectSpeaker:"选择你的扬声器",playTxt:["播放","暂停"],playTips:'点击"播放"按钮，检测',speakerTips1:"如果你听不到:",speakerTips2:"1. 检查你的耳机或扬声器是否正确连接，声音输入插孔通常为绿色。",speakerTips3:"2. 检查音量，是否静音或音量过小",speakerTips4:"3. 声卡可能有问题，重新启动计算机",speakerTips5:"如果点击“播放”后听不到声音：",speakerTips6:"1. 检测你的扬声器或耳机是否插好",speakerTips7:"2. 你的耳机选择了错误插口",speakerTips8:"3. 扬声器未打开或音量调节太小",speakerTips9:"4. 声卡可能有问题，尝试重启电脑"},refresh:{refresh:"刷新教室",tips:"当前已离线，建议您刷新教室",sureRefresh:"确定要刷新当前页面吗？",notRefreshTips:"活动正在进行中，请不要刷新页面哦～"},operat:{stage:["全体上台","取消全体上台"],microphone:["抢麦","取消抢麦"],discussion:["全体开麦","取消全体开麦"],thumbs:"全体表扬",openAllStudentMicrophone:"打开全体学生的麦克风"},active:{speaking:"学生在组内轮流发言",speakEnd:"正在结束...",ready:"学生们准备抢麦",isSpeaking:"学生通过竞争赢得组内唯一的发言机会",end:"结束发言",countdown:"准备倒计时"},video:{openCameraTip:"摄像头已经打开，学生能看到你的视频",closeCameraTip:"摄像头已经关闭，学生看不到你的视频",openMicrophoneTip:"麦克风已经打开，学生能听到你的声音",closeMicrophoneTip:"麦克风已经关闭，学生听不到你的声音",notAllowSwitchTip:"小组活动中，暂不允许切换视频窗口哦～"},groupVideo:{no:"第{num}名",norank:"暂无排名",average:"平均积分",manual:"手动换组",auto:"自动换组",switch:"换一组",camera:"摄像头",encourage:"赞",tips:"当前网络差，建议您关闭学生视频并检查网络",thumbsGroup:"已表扬该组学生",defaultName:"小组名称"},rank:{online:"在线学生{num}人",ranking:"排名",group:"组名",average:"平均积分",thumbs10Group:"已表扬排名前十的小组"},announcementsTips:{tips:"Tips",noTips:"没有提示内容！",announcements:"公告",noAnnouncements:"暂无公告",info1:"公告适用于发布上课纪律、活动等信息",info2:"发布后将发送给所有学生",compose:"创建公告",publish:"发布",cancel:"取消",edit:"编辑",time:"更新时间"},network:{incorrectAccount:"请使用正确的老师账号进行登录！",noAuth:"未授权，请重新登录",operationCancelled:"操作取消",errorQuest:"错误请求",accessDenied:"拒绝访问",wrongRequest1:"请求错误，未找到该资源",wrongRequest2:"请求方法未允许",requestTimeout:"请求超时",serverError:"服务器端出错",networkError1:"网络未实现",networkError2:"网络错误",serviceUnavailable:"服务不可用",networkTimeout:"网络超时",httpNoSupport:"http版本不支持该请求",connectionError:"连接错误",connectionServeError:"连接到服务器失败"},voiceAnswer:{playAudioFailed:"播放音频失败！",openBarrage:"开启弹幕",closeBarrage:"关闭弹幕",notFinishedQuestions:"尚未结束答题，请稍等",waitAnswering:"等待学生答题结束…",allMicrophoneing:"全体开麦中"}}}},528:function(e,t,n){},801:function(e,t,n){"use strict";var o=n(528);n.n(o).a},838:function(e,t,n){"use strict";n.r(t);var o=n(202),r={mixins:[o.default.mixins],data:function(){return{baseCode:'<TSelect v-model="val1" kind="videoinput" :caption="caption1"></TSelect>\n<TSelect v-model="val2" kind="audioinput" :caption="caption2"></TSelect>\n<TSelect v-model="val3" kind="audiooutput" :caption="caption3"></TSelect>',caption1:this.t("ui.setting.selectCamera"),val1:"",caption2:this.t("ui.setting.selectMicrophone"),val2:"",caption3:this.t("ui.setting.selectSpeaker"),val3:"",list:[{id:1,name:"test1"},{id:2,name:"test2"},{id:3,name:"test3"}]}}},a=(n(801),n(1)),s=Object(a.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"tips"},[e._v("有label用label，没有用deviceId")]),e._v(" "),n("card",[n("div",{staticClass:"tips"},[e._v("camera deviceId: "+e._s(e.val1))]),e._v(" "),n("TSelect",{attrs:{kind:"videoinput",caption:e.caption1},model:{value:e.val1,callback:function(t){e.val1=t},expression:"val1"}}),e._v(" "),n("div",{staticClass:"tips"},[e._v("microphone deviceId: "+e._s(e.val2))]),e._v(" "),n("TSelect",{attrs:{kind:"audioinput",caption:e.caption2},model:{value:e.val2,callback:function(t){e.val2=t},expression:"val2"}}),e._v(" "),n("div",{staticClass:"tips"},[e._v("speaker deviceId: "+e._s(e.val3))]),e._v(" "),n("TSelect",{attrs:{kind:"audiooutput",caption:e.caption3},model:{value:e.val3,callback:function(t){e.val3=t},expression:"val3"}}),e._v(" "),n("template",{slot:"code"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[n("code",{staticClass:"vue"},[e._v(e._s(e.baseCode))])])])],2)],1)}),[],!1,null,"91490334",null);t.default=s.exports}}]);