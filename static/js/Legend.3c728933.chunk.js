(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{177:function(e,n,t){e.exports=t.p+"static/media/scene.1.a8e4b44c.jpg"},178:function(e,n,t){e.exports=t.p+"static/media/scene.2.15c487f5.jpg"},179:function(e,n,t){e.exports=t.p+"static/media/scene.3.6d78eb2e.jpg"},180:function(e,n,t){e.exports=t.p+"static/media/scene.4.37ba57f8.jpg"},181:function(e,n,t){e.exports=t.p+"static/media/scene.5.ad4ac388.jpg"},182:function(e,n,t){e.exports=t.p+"static/media/scene.6.25128e2e.jpg"},183:function(e,n,t){e.exports=t.p+"static/media/15000.72fb0ef0.png"},283:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t(5),i=t(4),c=t(6),o=t(7),s=t(0),l=t.n(s),u=t(23),d=t(9),m=t(83),f=t(177),p=t.n(f),b=t(178),g=t.n(b),h=t(179),v=t.n(h),w=t(180),j=t.n(w),E=t(181),y=t.n(E),O=t(182),x=t.n(O),k=t(183),N=t.n(k),T=t(17),z=t(2);function M(){var e=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #fff;\n  padding: 6.4rem 2rem;\n  padding-bottom: 0;\n  height: 100vh;\n\n  .subTitle {\n    color: #666;\n    text-align: center;\n    line-height: 1.5;\n    font-weight: bold;\n    font-size: 0.8rem;\n    .line {\n      margin-top: 0.8rem;\n    }\n  }\n  .num {\n    width: 100%;\n    margin-bottom: 1rem;\n  }\n  .pics {\n    z-index: 1;\n    width: 16rem;\n    height: 11rem;\n    overflow: hidden;\n    border: 0.4rem solid #fdb037;\n    border-radius: 0.8rem;\n    transform: translate3d(0, 0, 0);\n    img {\n      width: 100%;\n    }\n  }\n"]);return M=function(){return e},e}var q=t(1).default.div(M());t.d(n,"default",function(){return D});var C=[p.a,g.a,v.a,j.a,y.a,x.a],D=function(e){function n(){var e;return Object(a.a)(this,n),(e=Object(i.a)(this,Object(c.a)(n).call(this))).wrapper=l.a.createRef(),e}return Object(o.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){new u.a(".pics .swiper-container",{effect:"fade",fadeEffect:{crossFade:!0},autoplay:{delay:2e3,disableOnInteraction:!1}});var e=this.wrapper.current.querySelector(".num");Object(d.a)({targets:e,opacity:[0,1],translateY:[400,0],delay:500})}},{key:"render",value:function(){return l.a.createElement(q,{ref:this.wrapper},l.a.createElement(m.a,{title:"\u58f9\u70b9\u58f9\u6ef4\u6b63\u5728\u521b\u9020\u5e7c\u6559\u754c\u4f20\u5947",fs:"1.1rem"}),l.a.createElement("div",{className:"subTitle"},l.a.createElement("p",null,"\u77ed\u77ed\u516b\u4e2a\u6708\u65f6\u95f4 "),l.a.createElement("p",null,"\u5168\u56fd\u5df2\u670915000+\u5e7c\u513f\u56ed\u9009\u62e9\u52a0\u5165\u58f9\u70b9\u58f9\u6ef4!"),l.a.createElement(T.a,{width:"100%",background:"#fdb749",className:"line"})),l.a.createElement("img",{src:N.a,alt:"\u6210\u4ea4\u6570\u914d\u56fe",className:"num"}),l.a.createElement("div",{className:"pics"},l.a.createElement("div",{className:"swiper-container"},l.a.createElement("div",{className:"swiper-wrapper"},C.map(function(e,n){return l.a.createElement("div",{className:"swiper-slide",key:n},l.a.createElement("img",{src:e,alt:"demo1".concat(n),className:"demo"}))})))))}}]),n}(s.Component)},83:function(e,n,t){"use strict";t.d(n,"a",function(){return b});var a=t(3),r=t(5),i=t(4),c=t(6),o=t(7),s=t(2),l=t(0),u=t.n(l),d=t(1),m=t(9);function f(){var e=Object(s.a)(["\n  padding-top: 0.1rem;\n  color: ",";\n  font-size: ",";\n  font-weight: 800;\n  display: inline-block;\n  /* padding-top: 0.2em; */\n  box-shadow: inset 0 -0.4em ",";\n  margin-bottom: ",";\n  overflow: hidden;\n  .letter {\n    display: inline-block;\n    line-height: 1em;\n  }\n"]);return f=function(){return e},e}var p=d.default.h1(f(),function(e){return e.fc},function(e){return e.fs},function(e){return e.bg},function(e){return e.mb}),b=function(e){function n(){var e;return Object(a.a)(this,n),(e=Object(i.a)(this,Object(c.a)(n).call(this))).titleEle=u.a.createRef(),e}return Object(o.a)(n,e),Object(r.a)(n,[{key:"componentDidMount",value:function(){console.log("letters");var e=this.titleEle.current,n=e.innerText.split("").map(function(e){return"<span class='letter'>".concat(e,"</span>")});e.innerHTML=n.join("");var t=e.querySelectorAll(".letter");Object(m.a)({targets:t,translateY:["1.1em",0],translateZ:0,delay:function(e,n){return 100*n}})}},{key:"render",value:function(){var e=this.props,n=e.title,t=e.mb,a=void 0===t?"2rem":t,r=e.fs,i=void 0===r?"1rem":r,c=e.bg,o=void 0===c?"#ccc":c,s=e.fc,l=void 0===s?"#ff6a1c":s;return u.a.createElement(p,{ref:this.titleEle,mb:a,fs:i,bg:o,fc:l},n)}}]),n}(l.PureComponent)}}]);
//# sourceMappingURL=Legend.3c728933.chunk.js.map