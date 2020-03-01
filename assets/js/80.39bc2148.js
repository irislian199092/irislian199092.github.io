(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{839:function(e,a,t){"use strict";t.r(a);var s={data:function(){return{baseCode:'<Settings :configOptions="options" @change="handleChange"></Settings>\n<Settings use="mediaSDK" :configOptions="options" @change="handleChange" @playStream="handlePlayStream"></Settings>',jsCode:"export default {\n  data() {\n    return {\n      microphoneId: '',\n      cameraId: '',\n      speakerId: '',\n      volume: 50\n    }\n  },\n  computed: {\n    options() {\n      const { microphoneId, cameraId, speakerId, volume } = this;\n      return {\n        microphone: {\n          id: microphoneId,\n          volume: volume\n        },\n        camera: {\n          id: cameraId\n        },\n        speaker: {\n          id: speakerId\n        }\n      }\n    }\n  },\n  methods: {\n    handlePlayStream({video, devicesId}) {\n      console.log(video, devicesId);\n      // to do ......\n      // 调用 mediaSdk 渲染视频 ......\n      // this.mediaSDK.selectPreviewCamera({\n      //   target: video,\n      //   device: devicesId\n      // })\n    },\n    handleChange(data = {}) {\n      const { microphone: { id: microphoneId, volume }, camera: { id: cameraId }, speaker: { id: speakerId } } = data;\n      this.microphoneId = microphoneId;\n      this.cameraId = cameraId;\n      this.speakerId = speakerId;\n      this.volume = volume;\n      // to do ......\n      // 调用 mediaSdk ......\n      // this.mediaSDK.selectCamera(this.cameraId);\n      // this.mediaSDK.selectMic(this.microphoneId);\n    }\n  }\n}",microphoneId:"",cameraId:"",speakerId:"",volume:50,cameraStatus:!1}},computed:{options:function(){var e=this.microphoneId,a=this.cameraId,t=this.speakerId;return{microphone:{id:e,volume:this.volume},camera:{id:a,status:this.cameraStatus},speaker:{id:t}}}},methods:{handlePlayStream:function(e){var a=e.video,t=e.devicesId;console.log(a,t)},handleToggleCameraStatus:function(){this.cameraStatus=!this.cameraStatus},handleChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.microphone,t=a.id,s=a.volume,i=e.camera.id,n=e.speaker.id;this.microphoneId=t,this.cameraId=i,this.speakerId=n,this.volume=s}}},i=t(1),n=Object(i.a)(s,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h3",[e._v("设置参数：")]),e._v(" "),t("div",{staticClass:"demo-box"},[t("div",{staticClass:"demo-row"},[t("div",{staticClass:"demo-lf"},[e._v("麦克风-microphone deviceId:  "),t("div",{staticClass:"demo-tips"},[e._v(e._s(e.microphoneId))])]),e._v(" "),t("TSelect",{staticClass:"flex1",attrs:{kind:"audioinput",caption:"select microphone id"},model:{value:e.microphoneId,callback:function(a){e.microphoneId=a},expression:"microphoneId"}})],1),e._v(" "),t("div",{staticClass:"demo-row"},[t("div",{staticClass:"demo-lf"},[e._v("摄像头-camera deviceId: "),t("div",{staticClass:"demo-tips"},[e._v(e._s(e.cameraId))])]),e._v(" "),t("TSelect",{staticClass:"flex1",attrs:{kind:"videoinput",caption:"select camera id"},model:{value:e.cameraId,callback:function(a){e.cameraId=a},expression:"cameraId"}})],1),e._v(" "),t("div",{staticClass:"demo-row"},[t("div",{staticClass:"demo-lf"},[e._v("扬声器 speaker deviceId: "),t("div",{staticClass:"demo-tips"},[e._v(e._s(e.speakerId))])]),e._v(" "),t("TSelect",{staticClass:"flex1",attrs:{kind:"audiooutput",caption:"select speaker id"},model:{value:e.speakerId,callback:function(a){e.speakerId=a},expression:"speakerId"}})],1),e._v(" "),t("div",{staticClass:"demo-row"},[t("div",{staticClass:"demo-lf"},[e._v("音量大小值-Volume: "),t("div",{staticClass:"demo-tips"},[e._v(e._s(e.volume))])]),e._v(" "),t("Range",{staticClass:"flex1",model:{value:e.volume,callback:function(a){e.volume=a},expression:"volume"}})],1),e._v(" "),t("div",{staticClass:"demo-row"},[t("div",{staticClass:"demo-lf"},[e._v("摄像头开头的状态："),t("div",{staticClass:"demo-tips"},[e._v(e._s(e.cameraStatus))])]),e._v(" "),t("TButton",{attrs:{icon:"camera",status:e.cameraStatus},on:{click:e.handleToggleCameraStatus}},[e._v("Camera")])],1)]),e._v(" "),t("h3",[e._v("效果：")]),e._v(" "),t("card",[t("Settings",{attrs:{configOptions:e.options},on:{change:e.handleChange}}),e._v(" "),t("Settings",{attrs:{use:"mediaSDK",configOptions:e.options},on:{change:e.handleChange,playStream:e.handlePlayStream}}),e._v(" "),t("template",{slot:"code"},[t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t("code",{staticClass:"vue"},[e._v(e._s(e.baseCode))])]),e._v(" "),t("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[t("code",{staticClass:"javascript"},[e._v(e._s(e.jsCode))])])])],2)],1)}),[],!1,null,"677d1626",null);a.default=n.exports}}]);