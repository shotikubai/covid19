(window.webpackJsonp=window.webpackJsonp||[]).push([[21,22,23,70,130],{448:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=new(n(0).default),r="TOGGLE_DETAILS"},453:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return l}));n(325),n(105);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function r(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(o(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},485:function(t,e,n){"use strict";var o=n(1);n(4),n(209),n(11),n(210);function r(t,e,n){var o,r=null==(o=t._observe)?void 0:o[n.context._uid];r&&(r.observer.unobserve(t),delete t._observe[n.context._uid])}var l={inserted:function(t,e,n){if("undefined"!=typeof window&&"IntersectionObserver"in window){var l=e.modifiers||{},c=e.value,d="object"===Object(o.a)(c)?c:{handler:c,options:{}},m=d.handler,f=d.options,v=new IntersectionObserver((function(){var o,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0,f=null==(o=t._observe)?void 0:o[n.context._uid];if(f){var v=c.some((function(t){return t.isIntersecting}));!m||l.quiet&&!f.init||l.once&&!v&&!f.init||m(c,d,v),v&&l.once?r(t,e,n):f.init=!0}}),f);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:v},v.observe(t)}},unbind:r};e.a=l},498:function(t,e,n){"use strict";n(105);var o=n(29),r=n(0);e.a=r.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(o.f)(this.height),n=Object(o.f)(this.minHeight),r=Object(o.f)(this.minWidth),l=Object(o.f)(this.maxHeight),c=Object(o.f)(this.maxWidth),d=Object(o.f)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),l&&(t.maxHeight=l),c&&(t.maxWidth=c),d&&(t.width=d),t}}})},499:function(t,e,n){"use strict";n(32),n(40),n(41),n(42),n(52),n(57);var o=n(14),r=(n(4),n(105),n(37),n(27),n(88),n(309),n(53),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(54),n(63),n(18),n(11),n(19),n(20),n(209),n(210),n(89),n(324),n(0)),l=n(212),c=n(29);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=f.reduce((function(t,e){return t["offset"+Object(c.C)(e)]={type:[String,Number],default:null},t}),{}),y=f.reduce((function(t,e){return t["order"+Object(c.C)(e)]={type:[String,Number],default:null},t}),{}),C={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(y)};function j(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var x=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:m(m(m(m({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var m=x.get(c);return m||function(){var t,e;for(e in m=[],C)C[e].forEach((function(t){var o=n[t],r=j(e,t,o);r&&m.push(r)}));var r=m.some((function(t){return t.startsWith("col-")}));m.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),x.set(c,m)}(),t(n.tag,Object(l.a)(data,{class:m}),r)}})},571:function(t,e,n){var content=n(601);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("45d64bcf",content,!0,{sourceMap:!1})},572:function(t,e,n){var content=n(603);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("d93b19ee",content,!0,{sourceMap:!1})},577:function(t){t.exports=JSON.parse('{"date":"2022/1/31 20:00","data":{"専門家3行コメント":[{"@ja":"新規陽性者数は過去最多となり、さらに感染が拡大すれば、社会機能の低下を余儀なくされる。 65歳以上の新規陽性者数の7日間平均も、前回と比べて約3倍に増加している。誰もが感染者や濃厚接触者になる可能性があることを意識し、自ら身を守る行動を徹底する必要がある。","@en":"With the number of new positive cases at a record high, further spread of the infection could force a decline in the functions of society. The 7-day average of new positive patients aged 65 and over has also increased about three fold since last week’s monitoring meeting. It is imperative that each of us understand that we are all at risk of getting infected and becoming a close contact and take firm actions to protect ourselves."},{"@ja":"高齢者の重症患者が増加しており、警戒する必要がある。急変時、症状が重い方や重症化リスクが高い方等が、速やかに適切な医療が受けられるよう、体制整備を進めるとともに、宿泊及び自宅療養体制の充実が必要である。","@en":"Serious patients are increasing among the elderly, and we must be on guard over the situation. Along with advancing the creation of systems to allow people with serious symptoms, those at high risk of developing serious illness, and others to promptly receive the appropriate medical care when their condition abruptly changes, it is also necessary to enhance systems for designated hotels for recovery and at-home recovery."}],"(1)新規陽性者数":15163.9,"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":155.4,"(3)新規陽性者における接触歴等不明者（人数）":9951,"(3)新規陽性者における接触歴等不明者（増加比）":180.1,"(4)PCR・抗原検査（陽性率）":35.5,"(4)PCR・抗原検査（検査人数）":25448.6,"(5)救急医療の東京ルールの適用件数":257,"(6)入院患者数":3519,"(6)入院患者確保病床数":6189,"(7)重症患者数":26,"(7)重症患者確保病床数":370,"総括コメント-感染状況":{"date":"2022-01-26","level":4,"display":{"@ja":"大規模な感染拡大が継続している","@en":"Extensive spread of the virus continues."}},"総括コメント-医療提供体制":{"date":"2022-01-26","level":3,"display":{"@ja":"通常の医療を制限し、体制強化が必要な状況である","@en":"Restrictions must be placed on non-COVID health care, and there is the need to build up the system."}}}}')},578:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));var o=n(453),r=function(t){var e={text:"人",translatable:!0},n={text:"件.reports",translatable:!0},r={text:"%",translatable:!1},l={text:"床",translatable:!0,except:["en"]},c=Object(o.a)(0),d=Object(o.a)(1);return{"(1)新規陽性者数":{value:d(t["(1)新規陽性者数"]),unit:e,bold:!0},"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":{value:d(t["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "]),unit:n,bold:!0},"(3)新規陽性者における接触歴等不明者（人数）":{value:d(t["(3)新規陽性者における接触歴等不明者（人数）"]),unit:e,bold:!0},"(3)新規陽性者における接触歴等不明者（増加比）":{value:d(t["(3)新規陽性者における接触歴等不明者（増加比）"]),unit:r,bold:!0},"(4)PCR・抗原検査（検査人数）":{value:d(t["(4)PCR・抗原検査（検査人数）"]),unit:e,bold:!0},"(4)PCR・抗原検査（陽性率）":{value:d(t["(4)PCR・抗原検査（陽性率）"]),unit:r,bold:!0},"(5)救急医療の東京ルールの適用件数":{value:d(t["(5)救急医療の東京ルールの適用件数"]),unit:n,bold:!0},"(6)入院患者数":{value:c(t["(6)入院患者数"]),unit:e,bold:!0},"(6)入院患者確保病床数":{value:c(t["(6)入院患者確保病床数"]),unit:l,bold:!1},"(7)重症患者数":{value:c(t["(7)重症患者数"]),unit:e,bold:!0},"(7)重症患者確保病床数":{value:c(t["(7)重症患者確保病床数"]),unit:l,bold:!1}}},l=function(t){return{"総括コメント-感染状況":{date:t["総括コメント-感染状況"].date,level:t["総括コメント-感染状況"].level,display:{"@ja":t["総括コメント-感染状況"].display["@ja"],"@en":t["総括コメント-感染状況"].display["@en"]}},"総括コメント-医療提供体制":{date:t["総括コメント-医療提供体制"].date,level:t["総括コメント-医療提供体制"].level,display:{"@ja":t["総括コメント-医療提供体制"].display["@ja"],"@en":t["総括コメント-医療提供体制"].display["@en"]}}}}},585:function(t,e,n){var content=n(687);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("76b3c5a9",content,!0,{sourceMap:!1})},600:function(t,e,n){"use strict";n(571)},601:function(t,e,n){var o=n(45)(!1);o.push([t.i,'.MonitoringCommentFrame[data-v-592c53a8]{border:1px solid;text-align:center;margin-bottom:10px}.MonitoringCommentFrame>p[data-v-592c53a8]{margin-top:auto;margin-bottom:auto;position:relative;font-style:normal;font-weight:600;color:#4d4d4d;padding:10px 0;font-size:1.3rem}.MonitoringCommentFrameAfter[data-v-592c53a8]{margin-top:-11px;content:"";padding:7px;border:1px solid}',""]),t.exports=o},602:function(t,e,n){"use strict";n(572)},603:function(t,e,n){var o=n(45)(!1);o.push([t.i,".RandomImageContainer[data-v-cc1b0b78]{display:flex;justify-content:center}",""]),t.exports=o},651:function(t,e,n){"use strict";n.r(e);n(105);var o=n(0).default.extend({props:{level:{type:Number,required:!0,default:0},comment:{type:String,required:!0,default:""}},data:function(){return{colors:["#96cd5f","#fffc4e","#fdbe40","#fa1629"]}}}),r=(n(600),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"MonitoringCommentFrame",style:{borderColor:""+t.colors[t.level]}},[n("p",[t._v(t._s(t.comment))])]),t._v(" "),n("div",{staticClass:"MonitoringCommentFrameAfter",style:{borderColor:""+t.colors[t.level],background:""+t.colors[t.level]}})])}),[],!1,null,"592c53a8",null);e.default=component.exports},652:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({computed:{currentImage:function(){var t=this.monitoringCommentImage.data.images.length,e=Math.floor(Math.random()*t);return this.monitoringCommentImage.data.images[e]},monitoringCommentImage:function(){return this.$store.state.monitoringCommentImage}}}),r=(n(602),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"RandomImageContainer"},[n("a",{attrs:{target:"_blank",href:t.currentImage.href}},[n("img",{attrs:{width:"320",height:"240",src:t.currentImage.src,alt:t.currentImage.alt}})])])}),[],!1,null,"cc1b0b78",null);e.default=component.exports},686:function(t,e,n){"use strict";n(585)},687:function(t,e,n){var o=n(45)(!1);o.push([t.i,".MonitoringComment-date[data-v-44ff3322]{text-align:right;font-size:1.4rem}.MonitoringComment-summary-item[data-v-44ff3322]{margin-bottom:8px;font-size:1.4rem}.MonitoringCommentFrame[data-v-44ff3322]{margin:20px 0}.MonitoringCommentFrame-title[data-v-44ff3322]{margin-bottom:1px;color:#707070;font-weight:400;font-size:1.4rem}.MonitoringCommentImage[data-v-44ff3322]{margin-top:50px}.MonitoringCommentLink[data-v-44ff3322]{display:flex;justify-content:center;align-items:center;margin-top:12px;font-size:1.4rem}",""]),t.exports=o},762:function(t,e,n){"use strict";n.r(e);n(63),n(30),n(34),n(35);var o=n(61),r=n(0),l=n(107),c=n(454),d=n(651),m=n(577),f=n(578),v=n(652),h=r.default.extend({components:{AppLink:l.default,DataView:c.default,Frame:d.default,RandomImage:v.default},data:function(){return{monitoringComment:Object(f.a)(m.data),date:m.date,mdiChevronRight:o.e}},computed:{translatedMonitoringSummarizedComments:function(){var t=m.data.専門家3行コメント;return["ja","ja-basic"].includes(this.$i18n.locale)?t.map((function(t){return t["@ja"]})):t.map((function(t){return t["@en"]}))}},methods:{commentMonitoring:function(t){return["ja","ja-basic"].includes(this.$root.$i18n.locale)?this.monitoringComment[t].display["@ja"]:this.monitoringComment[t].display["@en"]},formattedDate:function(t){return this.$d(new Date(t),"date")}}}),y=(n(686),n(16)),C=n(73),j=n.n(C),x=n(499),_=n(436),component=Object(y.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard MonitoringCommentCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("感染状況・医療提供体制の分析"),"title-id":"monitoring-comment",date:t.date,"is-set-title-row":""},scopedSlots:t._u([{key:"infoPanel",fn:function(){return[n("div",{staticClass:"MonitoringComment-date"},[t._v("\n          "+t._s(t.$t("{date}時点",{date:t.formattedDate(t.monitoringComment["総括コメント-感染状況"].date)}))+"\n        ")])]},proxy:!0}])},[t._v(" "),n("div",[n("ul",t._l(t.translatedMonitoringSummarizedComments,(function(e,i){return n("li",{key:i,staticClass:"MonitoringComment-summary-item"},[t._v("\n            "+t._s(e)+"\n          ")])})),0),t._v(" "),n("section",{staticClass:"MonitoringCommentFrame"},[n("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v(t._s(t.$t("感染状況")))]),t._v(" "),n("frame",{attrs:{level:t.monitoringComment["総括コメント-感染状況"].level-1,comment:t.commentMonitoring("総括コメント-感染状況")}})],1),t._v(" "),n("section",{staticClass:"MonitoringCommentFrame"},[n("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v("\n            "+t._s(t.$t("医療提供体制"))+"\n          ")]),t._v(" "),n("frame",{attrs:{level:t.monitoringComment["総括コメント-医療提供体制"].level-1,comment:t.commentMonitoring("総括コメント-医療提供体制")}})],1),t._v(" "),n("div",{staticClass:"MonitoringCommentImage"},[n("random-image"),t._v(" "),n("div",{staticClass:"MonitoringCommentLink"},[n("v-icon",{attrs:{color:"#D9D9D9"}},[t._v(t._s(t.mdiChevronRight))]),t._v(" "),n("app-link",{attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/info/monitoring.html"}},[t._v("\n              "+t._s(t.$t("専門家による分析・総括コメントの詳細はこちら"))+"\n            ")])],1)],1)])])],1)],1)}),[],!1,null,"44ff3322",null);e.default=component.exports;j()(component,{VCol:x.a,VIcon:_.a})}}]);