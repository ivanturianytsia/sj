webpackJsonp([1],{"+a6a":function(t,i,e){t.exports=e.p+"static/img/gui-gilet-vest.3c8f509.jpg"},"/jWT":function(t,i,e){t.exports=e.p+"static/img/sankuanz-rs-x-sneakers.4ead3ee.jpg"},"0cUi":function(t,i,e){t.exports=e.p+"static/img/in-lang-we-trust-hooded-sweatshirt.c84bd25.jpg"},"0owt":function(t,i,e){t.exports=e.p+"static/img/new-warriors-t-shirt.6638a7d.jpg"},"31jb":function(t,i){},"6qDv":function(t,i){},A6RK:function(t,i,e){t.exports=e.p+"static/img/cocktail-shirt.76ac01c.jpg"},CQT3:function(t,i,e){t.exports=e.p+"static/img/kaw-vs-slippers.c6c0234.jpg"},DX1M:function(t,i,e){t.exports=e.p+"static/img/jogger-sneakers.ede4198.jpg"},"EEx/":function(t,i,e){t.exports=e.p+"static/img/nite-jogger-grey-pack-sneakers.676bdcc.jpg"},G2gq:function(t,i,e){t.exports=e.p+"static/img/wmns-woven-swoosh-jacket.059dae3.jpg"},HUEZ:function(t,i,e){t.exports=e.p+"static/img/cn-knit.7418c6b.jpg"},JaAZ:function(t,i,e){t.exports=e.p+"static/img/kaiwa-sneakers.7e74efa.jpg"},Jzuw:function(t,i,e){t.exports=e.p+"static/img/uproar-hybrid-court-asg-fade-sneakers.2e421e8.jpg"},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("/5sW"),n=e("C/JF"),a=e("fhbW"),r=e("1e6/"),c={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var o=e("VU/8")({name:"App"},c,!1,function(t){e("bKRY")},null,null).exports,m=e("/ocq"),p=e("Dd8w"),u=e.n(p),g=e("Gu7T"),l=e.n(g),d={data:function(){return{maxPairs:9,maxTimer:90,items:[{imageSrc:e("nSSW")},{imageSrc:e("Ov22")},{imageSrc:e("0cUi")},{imageSrc:e("0owt")},{imageSrc:e("jgI4")},{imageSrc:e("zAS5")},{imageSrc:e("CQT3")},{imageSrc:e("+a6a")},{imageSrc:e("VB0o")},{imageSrc:e("aTrz")},{imageSrc:e("k8h1")},{imageSrc:e("RhiL")},{imageSrc:e("NQKN")},{imageSrc:e("A6RK")},{imageSrc:e("p6E/")},{imageSrc:e("jjjA")},{imageSrc:e("X4/n")},{imageSrc:e("kJGf")},{imageSrc:e("HUEZ")},{imageSrc:e("G2gq")},{imageSrc:e("jtUk")},{imageSrc:e("aRdC")}],cards:[],selected:null,preview:null,time:null}},computed:{selectedCard:function(){return this.selected&&this.cards[this.selected]||null},timeStr:function(){if(null===this.time)return null;var t=Math.floor(this.time/60),i=this.time%60;return 1===(""+i).length&&(i="0"+i),t+":"+i}},methods:{_generateCards:function(){var t=this;this.maxPairs>this.items.length&&(this.maxPairs=this.items.length);var i=Math.floor(Math.random()*this.items.length),e=[].concat(l()(this.items),l()(this.items)).slice(i,i+this.maxPairs);e=(e=[].concat(l()(e),l()(e))).map(function(t){return u()({},t,{active:!1})}),this.cards=this._shuffle(e),this._runTimer(),window.setTimeout(function(){t._reset()},1e3*this.maxTimer)},_shuffle:function(t){for(var i=t.length-1;i>0;i--){var e=Math.floor(Math.random()*(i+1)),s=t[e];t[e]=t[i],t[i]=s}return t},_reset:function(){this.start=null,this.selected=null,this.preview=null,this.cards=[]},onCardClick:function(t){var i=this;if(!this.preview&&t!==this.selected)if(this.selected){if(this.selectedCard&&this.cards[t]&&this.selectedCard.imageSrc===this.cards[t].imageSrc)return this.cards[this.selected].active=!0,this.cards[t].active=!0,void(this.selected=null);this.preview=t,window.setTimeout(function(){i.selected=null,i.preview=null},1e3)}else this.selected=t},onStartClick:function(){var t=this;this._reset(),window.setTimeout(function(){t._generateCards()})},_runTimer:function(){var t=this;this.time=this.maxTimer,function i(){t.time<=0||window.setTimeout(function(){t.time=t.time-1,i()},1e3)}()}}},f={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container"},[e("button",{staticClass:"btn btn--start",on:{click:function(i){return t.onStartClick()}}},[t.cards.length?e("span",[t._v(t._s(t.timeStr))]):e("span",[t._v("Start")])]),t._v(" "),e("div",{staticClass:"content"},t._l(t.cards,function(i,s){return e("div",{key:s,class:{card:!0,"card--active":i.active||t.selected===s||t.preview===s},on:{click:function(i){return t.onCardClick(s)}}},[t._m(0,!0),t._v(" "),e("div",{staticClass:"card__face card__face--back"},[e("img",{staticClass:"card__image",attrs:{src:i.imageSrc,alt:""}})])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"card__face card__face--front"},[i("span",{staticClass:"card__logo"},[this._v("SJ")])])}]};var h=e("VU/8")(d,f,!1,function(t){e("31jb")},"data-v-fa8ef260",null).exports,k={data:function(){return{lost:!1,won:!1,time:null,maxTimer:90,maxItems:18,displayItems:[],items:[{imageSrc:e("rMkH"),nike:!0},{imageSrc:e("URaI"),nike:!0},{imageSrc:e("qnGh"),nike:!0},{imageSrc:e("aht7"),nike:!1},{imageSrc:e("hrwc"),nike:!1},{imageSrc:e("hW50"),nike:!1},{imageSrc:e("eiHn"),nike:!1},{imageSrc:e("T6jG"),nike:!1},{imageSrc:e("EEx/"),nike:!1},{imageSrc:e("kWMB"),nike:!1},{imageSrc:e("/jWT"),nike:!1},{imageSrc:e("Jzuw"),nike:!1},{imageSrc:e("mJmE"),nike:!1},{imageSrc:e("TgzF"),nike:!1},{imageSrc:e("VF4l"),nike:!1},{imageSrc:e("JaAZ"),nike:!1},{imageSrc:e("YiEq"),nike:!1},{imageSrc:e("DX1M"),nike:!1}]}},computed:{timeStr:function(){if(null===this.time)return null;var t=Math.floor(this.time/60),i=this.time%60;return 1===(""+i).length&&(i="0"+i),t+":"+i}},methods:{_generateCards:function(){this.maxItems>this.items.length&&(this.maxItems=this.items.length);var t=Math.floor(Math.random()*this.items.length),i=[].concat(l()(this.items),l()(this.items)).slice(t,t+this.maxItems);i=i.map(function(t){return u()({},t,{active:!1})}),this.displayItems=this._shuffle(i),this._runTimer()},_shuffle:function(t){for(var i=t.length-1;i>0;i--){var e=Math.floor(Math.random()*(i+1)),s=t[e];t[e]=t[i],t[i]=s}return t},_reset:function(){this.displayItems=[],this.timer=null,this.lost=!1,this.won=!1},onCardClick:function(t){if(!this.lost&&!this.won){this.displayItems[t].nike,this.displayItems[t].active=!0;var i=0;this.displayItems.forEach(function(t){t.nike&&(i+=1,t.active&&(i-=1))}),0===i&&this._win()}},onStartClick:function(){var t=this;this._reset(),window.setTimeout(function(){t._generateCards()})},_runTimer:function(){var t=this;this.time=this.maxTimer,function i(){t.won||t.lost||(t.time<=0?t._loose():window.setTimeout(function(){t.time=t.time-1,i()},1e3))}()},_loose:function(){this.time=null,this.won=!1,this.lost=!0},_win:function(){this.time=null,this.lost=!1,this.won=!0}}},_={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container"},[e("button",{staticClass:"btn btn--start",on:{click:function(i){return t.onStartClick()}}},[t.displayItems.length?t._e():e("span",[t._v("Start")]),t._v(" "),t.time>0?e("span",[t._v(t._s(t.timeStr))]):t._e(),t._v(" "),t.lost?e("span",[t._v("Lost, restart?")]):t._e(),t._v(" "),t.won?e("span",[t._v("Won! Restart?")]):t._e()]),t._v(" "),e("div",{staticClass:"content"},t._l(t.displayItems,function(i,s){return e("div",{key:s,class:{card:!0,"card--active":i.active},on:{click:function(i){return t.onCardClick(s)}}},[e("div",{staticClass:"card__face card__face--front"},[e("img",{staticClass:"card__image",attrs:{src:i.imageSrc,alt:""}})]),t._v(" "),e("div",{staticClass:"card__face card__face--back"},[i.nike?e("font-awesome-icon",{staticClass:"card__icon card__icon--green",attrs:{icon:"check"}}):t._e(),t._v(" "),i.nike?t._e():e("font-awesome-icon",{staticClass:"card__icon card__icon--red",attrs:{icon:"times"}})],1)])}),0)])},staticRenderFns:[]};var v=e("VU/8")(k,_,!1,function(t){e("6qDv")},"data-v-7cf3e289",null).exports;s.a.use(m.a);var j=new m.a({routes:[{path:"/",name:"Home",component:h},{path:"/nike",name:"Nike",component:v}]});s.a.config.productionTip=!1,n.c.add(a.a),n.c.add(a.b),s.a.component("font-awesome-icon",r.a),new s.a({el:"#app",router:j,render:function(t){return t(o)}})},NQKN:function(t,i,e){t.exports=e.p+"static/img/western-shirt.f0b27bf.jpg"},Ov22:function(t,i,e){t.exports=e.p+"static/img/large-logo-printed-blanket.7928657.jpg"},RhiL:function(t,i,e){t.exports=e.p+"static/img/wmns-popper-pants.6d869de.jpg"},T6jG:function(t,i,e){t.exports=e.p+"static/img/modernica-style-36-lx-sneakers.8aff658.jpg"},TgzF:function(t,i,e){t.exports=e.p+"static/img/rains-sk8-hi-lite-sneakers.68ef98f.jpg"},URaI:function(t,i,e){t.exports=e.p+"static/img/air-zoom-alpha-sneakers.447ebc4.jpg"},VB0o:function(t,i,e){t.exports=e.p+"static/img/daisy-wordmark-hooded-sweatshirt.6ca41d9.jpg"},VF4l:function(t,i,e){t.exports=e.p+"static/img/anaheim-factory-sk8-hi-sneakers.02ec692.jpg"},"X4/n":function(t,i,e){t.exports=e.p+"static/img/hawaiian-shirt.15b1690.jpg"},YiEq:function(t,i,e){t.exports=e.p+"static/img/golf-le-fleur-ox-sneakers.9e5161a.jpg"},aRdC:function(t,i,e){t.exports=e.p+"static/img/drop1-sunglasses.b772892.jpg"},aTrz:function(t,i,e){t.exports=e.p+"static/img/crewneck-sweatshirt.adadb40.jpg"},aht7:function(t,i,e){t.exports=e.p+"static/img/cm997-90-s-style-of-life-sneakers.36e5ce9.jpg"},bKRY:function(t,i){},eiHn:function(t,i,e){t.exports=e.p+"static/img/kid-cudi-tennis-minimal-sneakers.0a7e074.jpg"},hW50:function(t,i,e){t.exports=e.p+"static/img/gel-saga-zebra-sneakers.51de39b.jpg"},hrwc:function(t,i,e){t.exports=e.p+"static/img/gel-quantum-360-knit-2-sneakers.dd7ee46.jpg"},jgI4:function(t,i,e){t.exports=e.p+"static/img/project-t-shirt.1c9106f.jpg"},jjjA:function(t,i,e){t.exports=e.p+"static/img/1000-keith-haring-2.aa01b39.jpg"},jtUk:function(t,i,e){t.exports=e.p+"static/img/lover-hooded-sweatshirt.fd07300.jpg"},k8h1:function(t,i,e){t.exports=e.p+"static/img/depa-ecs-sandals.de0dd3b.jpg"},kJGf:function(t,i,e){t.exports=e.p+"static/img/duck-new-era-cap.1d6688f.jpg"},kWMB:function(t,i,e){t.exports=e.p+"static/img/rom-sneakers.15508c7.jpg"},mJmE:function(t,i,e){t.exports=e.p+"static/img/yung-1-sneakers.b3251fa.jpg"},nSSW:function(t,i,e){t.exports=e.p+"static/img/drop1-sunglasses (1).e81fd68.jpg"},"p6E/":function(t,i,e){t.exports=e.p+"static/img/tie-dye-socks.cda56aa.jpg"},qnGh:function(t,i,e){t.exports=e.p+"static/img/blazer-mid-77-vintage-sneakers.dcdf2f1.jpg"},rMkH:function(t,i,e){t.exports=e.p+"static/img/air-wildwood-sneakers.02790cb.jpg"},zAS5:function(t,i,e){t.exports=e.p+"static/img/no-problemo-tie-dye-t-shirt (1).933de61.jpg"}},["NHnr"]);
//# sourceMappingURL=app.c1b3a4afac2d1bf7fb08.js.map