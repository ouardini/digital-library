function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"3F3D":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=function(){function l(n,u){_classCallCheck(this,l),this.activatedRoute=n,this.router=u,this.user=this.activatedRoute.snapshot.paramMap.get("user")}return _createClass(l,[{key:"ngOnInit",value:function(){fireb_app(),fireb_data(),sweet_alert(),document.getElementById("username").value=this.user,set_data(this.user)}},{key:"save",value:function(){fireb_app(),fireb_data(),sweet_alert(),savy(this.user)}},{key:"cancel",value:function(){this.router.navigateByUrl("/item/"+this.user)}}]),l}(),o=function l(){_classCallCheck(this,l)},i=u("pMnS"),a=u("MKJQ"),r=u("sZkV"),b=u("s7LF"),s=u("iInd"),c=e.kb({encapsulation:0,styles:["#a[_ngcontent-%COMP%] {\n      font-size: 80%;\n      \n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n      color: #5F5F5F;\n    }",[""]],data:{}});function p(l){return e.Cb(0,[(l()(),e.mb(0,0,null,null,6,"ion-header",[],null,null,null,a.S,a.p)),e.lb(1,49152,null,0,r.z,[e.h,e.k,e.x],null,null),(l()(),e.mb(2,0,null,0,4,"ion-toolbar",[],null,null,null,a.fb,a.C)),e.lb(3,49152,null,0,r.xb,[e.h,e.k,e.x],null,null),(l()(),e.mb(4,0,null,0,2,"ion-title",[["style","text-align:center;"]],null,null,null,a.eb,a.B)),e.lb(5,49152,null,0,r.vb,[e.h,e.k,e.x],null,null),(l()(),e.Bb(-1,0,["settings"])),(l()(),e.mb(7,0,null,null,80,"ion-content",[],null,null,null,a.M,a.j)),e.lb(8,49152,null,0,r.s,[e.h,e.k,e.x],null,null),(l()(),e.mb(9,0,null,0,78,"ion-card",[["color","white"]],null,null,null,a.K,a.d)),e.lb(10,49152,null,0,r.k,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.mb(11,0,null,0,8,"ion-item",[],null,null,null,a.X,a.s)),e.lb(12,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.mb(13,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,a.Y,a.v)),e.lb(14,49152,null,0,r.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Bb(-1,0,["Username"])),(l()(),e.mb(16,0,null,0,3,"ion-input",[["id","username"],["readonly",""],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.xb(l,19)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.xb(l,19)._handleInputEvent(u.target)&&t),t}),a.U,a.r)),e.yb(5120,null,b.c,(function(l){return[l]}),[r.Hb]),e.lb(18,49152,null,0,r.E,[e.h,e.k,e.x],{readonly:[0,"readonly"],type:[1,"type"]},null),e.lb(19,16384,null,0,r.Hb,[e.k],null,null),(l()(),e.mb(20,0,null,0,8,"ion-item",[],null,null,null,a.X,a.s)),e.lb(21,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.mb(22,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,a.Y,a.v)),e.lb(23,49152,null,0,r.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Bb(-1,0,["Email address"])),(l()(),e.mb(25,0,null,0,3,"ion-input",[["id","email"],["type","email"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.xb(l,28)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.xb(l,28)._handleInputEvent(u.target)&&t),t}),a.U,a.r)),e.yb(5120,null,b.c,(function(l){return[l]}),[r.Hb]),e.lb(27,49152,null,0,r.E,[e.h,e.k,e.x],{type:[0,"type"]},null),e.lb(28,16384,null,0,r.Hb,[e.k],null,null),(l()(),e.mb(29,0,null,0,8,"ion-item",[],null,null,null,a.X,a.s)),e.lb(30,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.mb(31,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,a.Y,a.v)),e.lb(32,49152,null,0,r.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Bb(-1,0,["First name"])),(l()(),e.mb(34,0,null,0,3,"ion-input",[["id","fname"],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.xb(l,37)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.xb(l,37)._handleInputEvent(u.target)&&t),t}),a.U,a.r)),e.yb(5120,null,b.c,(function(l){return[l]}),[r.Hb]),e.lb(36,49152,null,0,r.E,[e.h,e.k,e.x],{type:[0,"type"]},null),e.lb(37,16384,null,0,r.Hb,[e.k],null,null),(l()(),e.mb(38,0,null,0,8,"ion-item",[],null,null,null,a.X,a.s)),e.lb(39,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.mb(40,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,a.Y,a.v)),e.lb(41,49152,null,0,r.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Bb(-1,0,["Last name"])),(l()(),e.mb(43,0,null,0,3,"ion-input",[["id","lname"],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.xb(l,46)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.xb(l,46)._handleInputEvent(u.target)&&t),t}),a.U,a.r)),e.yb(5120,null,b.c,(function(l){return[l]}),[r.Hb]),e.lb(45,49152,null,0,r.E,[e.h,e.k,e.x],{type:[0,"type"]},null),e.lb(46,16384,null,0,r.Hb,[e.k],null,null),(l()(),e.mb(47,0,null,0,8,"ion-item",[],null,null,null,a.X,a.s)),e.lb(48,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.mb(49,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,a.Y,a.v)),e.lb(50,49152,null,0,r.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Bb(-1,0,["New password"])),(l()(),e.mb(52,0,null,0,3,"ion-input",[["id","password"],["placeholder","tap your new password"],["type","password"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.xb(l,55)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.xb(l,55)._handleInputEvent(u.target)&&t),t}),a.U,a.r)),e.yb(5120,null,b.c,(function(l){return[l]}),[r.Hb]),e.lb(54,49152,null,0,r.E,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),e.lb(55,16384,null,0,r.Hb,[e.k],null,null),(l()(),e.mb(56,0,null,0,8,"ion-item",[],null,null,null,a.X,a.s)),e.lb(57,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.mb(58,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,a.Y,a.v)),e.lb(59,49152,null,0,r.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Bb(-1,0,["Confirm password"])),(l()(),e.mb(61,0,null,0,3,"ion-input",[["id","cpassword"],["placeholder","confirm new password"],["type","password"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.xb(l,64)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.xb(l,64)._handleInputEvent(u.target)&&t),t}),a.U,a.r)),e.yb(5120,null,b.c,(function(l){return[l]}),[r.Hb]),e.lb(63,49152,null,0,r.E,[e.h,e.k,e.x],{placeholder:[0,"placeholder"],type:[1,"type"]},null),e.lb(64,16384,null,0,r.Hb,[e.k],null,null),(l()(),e.mb(65,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.mb(66,0,null,0,15,"ion-grid",[],null,null,null,a.R,a.o)),e.lb(67,49152,null,0,r.y,[e.h,e.k,e.x],null,null),(l()(),e.mb(68,0,null,0,13,"ion-row",[],null,null,null,a.bb,a.y)),e.lb(69,49152,null,0,r.eb,[e.h,e.k,e.x],null,null),(l()(),e.mb(70,0,null,0,5,"ion-col",[["class","ion-float-left"]],null,null,null,a.L,a.i)),e.lb(71,49152,null,0,r.r,[e.h,e.k,e.x],null,null),(l()(),e.mb(72,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),e.mb(73,0,null,null,2,"ion-button",[["color","medium"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.cancel()&&e),e}),a.E,a.b)),e.lb(74,49152,null,0,r.i,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Bb(-1,0,["Cancel"])),(l()(),e.mb(76,0,null,0,5,"ion-col",[["class","ion-float-right"]],null,null,null,a.L,a.i)),e.lb(77,49152,null,0,r.r,[e.h,e.k,e.x],null,null),(l()(),e.mb(78,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),e.mb(79,0,null,null,2,"ion-button",[["color","success"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.save()&&e),e}),a.E,a.b)),e.lb(80,49152,null,0,r.i,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.Bb(-1,0,["Save"])),(l()(),e.mb(82,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.mb(83,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.mb(84,0,null,0,3,"ion-item",[],null,null,null,a.X,a.s)),e.lb(85,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.mb(86,0,null,0,1,"p",[["id","a"]],null,null,null,null,null)),(l()(),e.Bb(-1,null,["*if you want to change you username contact support"]))],(function(l,n){l(n,10,0,"white"),l(n,14,0,"stacked"),l(n,18,0,"","text"),l(n,23,0,"stacked"),l(n,27,0,"email"),l(n,32,0,"stacked"),l(n,36,0,"text"),l(n,41,0,"stacked"),l(n,45,0,"text"),l(n,50,0,"stacked"),l(n,54,0,"tap your new password","password"),l(n,59,0,"stacked"),l(n,63,0,"confirm new password","password"),l(n,74,0,"medium"),l(n,80,0,"success")}),null)}var h=e.ib("app-settings",t,(function(l){return e.Cb(0,[(l()(),e.mb(0,0,null,null,1,"app-settings",[],null,null,null,p,c)),e.lb(1,114688,null,0,t,[s.a,s.m],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),d=u("SVse");u.d(n,"SettingsPageModuleNgFactory",(function(){return m}));var m=e.jb(o,[],(function(l){return e.ub([e.vb(512,e.j,e.V,[[8,[i.a,h]],[3,e.j],e.v]),e.vb(4608,d.i,d.h,[e.s,[2,d.o]]),e.vb(4608,b.g,b.g,[]),e.vb(4608,r.b,r.b,[e.x,e.g]),e.vb(4608,r.Cb,r.Cb,[r.b,e.j,e.p]),e.vb(4608,r.Fb,r.Fb,[r.b,e.j,e.p]),e.vb(1073742336,d.b,d.b,[]),e.vb(1073742336,b.f,b.f,[]),e.vb(1073742336,b.b,b.b,[]),e.vb(1073742336,r.zb,r.zb,[]),e.vb(1073742336,s.n,s.n,[[2,s.s],[2,s.m]]),e.vb(1073742336,o,o,[]),e.vb(1024,s.k,(function(){return[[{path:"",component:t}]]}),[])])}))}}]);