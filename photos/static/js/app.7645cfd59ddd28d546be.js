webpackJsonp([7],{"3Ayx":function(t,n){},NHnr:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("7+uW"),s=i("HhJC"),a={name:"slider-view",data:function(){return{pages:[{html:'<li>\n                    \t<a href="plus/list.php@tid=63" title="客照">\n                    \t\t<img src="/static/uploads/allimg/131206/1-1312061A3330-L.jpg" alt="客照" title="客照" border="0" />\n                        </a>\n                    </li>\n                    ',style:{}},{html:'<li>\n                    \t<a href="plus/list.php@tid=60" title="内景">\n                    \t\t<img src="/static/uploads/allimg/131206/1-1312061A3150-L.jpg" alt="内景" title="内景" border="0" />\n                        </a>\n                    </li>',style:{}},{html:'<li>\n                    \t<a href="plus/list.php@tid=61" title="外景">\n                    \t\t<img src="/static/uploads/allimg/131206/1-1312061A2550-L.jpg" alt="外景" title="外景" border="0" />\n                        </a>\n                    </li>',style:{}},{html:'<li>\n                    \t<a href="plus/view.php@aid=444" title="品牌">\n                    \t\t<img src="/static/uploads/allimg/131206/1-1312061A1270-L.jpg" alt="品牌" title="品牌" border="0" />\n                        </a>\n                    </li>',style:{}}],sliderinit:{currentPage:0,thresholdDistance:100,thresholdTime:500,autoplay:3e3,loop:!0,infinite:1,slidesToScroll:1,timingFunction:"ease",duration:300}}},components:{slider:i.n(s).a},methods:{slide:function(t){},onTap:function(t){},onInit:function(t){}}},l={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"flexslider-bgslider",attrs:{id:"IndexBGSlider"}},[n("ul",{staticClass:"slides"},[n("slider",{ref:"slider",attrs:{pages:this.pages,sliderinit:this.sliderinit},on:{slide:this.slide,tap:this.onTap,init:this.onInit}})],1)])},staticRenderFns:[]};var o=i("VU/8")(a,l,!1,function(t){i("UJwJ")},null,null).exports,r={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),i("div",{class:{isshow:t.isShow},attrs:{id:"MainNavHome"}},[i("div",{staticClass:"flexslider-nav"},[i("ul",{staticClass:"slides"},[i("li",[i("router-link",{attrs:{to:{path:"/zuopin"}}},[i("p",[t._v("作品")]),t._v(" "),i("p",{staticClass:"NavItemInfo"},[t._v("PHOTOS")])]),t._v(" "),i("router-link",{attrs:{to:{path:"/changjing"}}},[i("p",[t._v("场景")]),t._v(" "),i("p",{staticClass:"NavItemInfo"},[t._v("SCENSE")])]),t._v(" "),i("router-link",{attrs:{to:{path:"./yuyue"}}},[i("p",[t._v("预约")]),t._v(" "),i("p",{staticClass:"NavItemInfo"},[t._v("SERVICE")])]),t._v(" "),i("router-link",{attrs:{to:{path:"./huodong"}}},[i("p",[t._v("活动")]),t._v(" "),i("p",{staticClass:"NavItemInfo"},[t._v("EVENTS")])]),t._v(" "),i("router-link",{attrs:{to:{path:"./pinpai"}}},[i("p",[t._v("品牌")]),t._v(" "),i("p",{staticClass:"NavItemInfo"},[t._v("BRAND")])])],1)])])]),t._v(" "),i("ul",{attrs:{id:"ShowingRibbons"}},[i("li",{attrs:{id:"RBNShowMenu"},on:{click:function(n){t.myToggle()}}},[i("img",{attrs:{src:"/static/templets/m2013/img/RED/dropdown_show.png",alt:"Show Menu"}})]),t._v(" "),i("li",[i("router-link",{attrs:{to:{path:"/"}},nativeOn:{click:function(n){t.recover()}}},[i("img",{attrs:{src:"/static/templets/m2013/img/RED/dropdown_index.png",alt:"Back to homepage"}})])],1)]),t._v(" "),i("router-view"),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"BigHeadline"}},[n("h1",[n("img",{attrs:{src:"/static/templets/m2013/img/logo1.png"}})])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"IndexFooter",attrs:{id:"footer"}},[n("span",[n("a",{attrs:{href:"../chat.looyu.com/chat/chat/p.do@c=49420&f=106259&g=66029",target:"_blank"}},[n("img",{attrs:{src:"/static/templets/m2013/img/socialIcons/zixun.png",alt:"咨询"}})]),this._v(" "),n("a",{attrs:{href:"tel_3A4000571520"}},[n("img",{attrs:{src:"/static/templets/m2013/img/socialIcons/tel.png",alt:"拨打电话"}})]),this._v(" "),n("a",{attrs:{href:"plus/view.php@aid=478"}},[n("img",{attrs:{src:"/static/templets/m2013/img/socialIcons/down.png",alt:"咨询"}})])])])}]};var c=i("VU/8")({name:"App",components:{},data:function(){return{isShow:!1}},methods:{myToggle:function(){this.isShow=!this.isShow},recover:function(){this.isShow=!1}}},r,!1,function(t){i("3Ayx")},null,null).exports,p=i("/ocq");e.a.config.productionTip=!1,e.a.use(p.a);var u=new p.a({mode:"history",routes:[{path:"/",component:o},{path:"/changjing",component:function(t){return i.e(5).then(function(){var n=[i("h4z3")];t.apply(null,n)}.bind(this)).catch(i.oe)}},{path:"/huodong",component:function(t){return i.e(4).then(function(){var n=[i("k076")];t.apply(null,n)}.bind(this)).catch(i.oe)}},{path:"/pinpai",component:function(t){return i.e(3).then(function(){var n=[i("Lp/g")];t.apply(null,n)}.bind(this)).catch(i.oe)}},{path:"/yuyue",component:function(t){return i.e(2).then(function(){var n=[i("2o4M")];t.apply(null,n)}.bind(this)).catch(i.oe)}},{path:"/zuopin",component:function(t){return i.e(0).then(function(){var n=[i("Pccq")];t.apply(null,n)}.bind(this)).catch(i.oe)}},{path:"/zuopin/zhengwen",component:function(t){return i.e(1).then(function(){var n=[i("8FBl")];t.apply(null,n)}.bind(this)).catch(i.oe)}}]});new e.a({el:"#app",router:u,components:{App:c},template:"<App/>"})},UJwJ:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.7645cfd59ddd28d546be.js.map