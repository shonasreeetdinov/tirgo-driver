"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9574,324],{9574:(P,f,n)=>{n.r(f),n.d(f,{ArchivePageModule:()=>O});var h=n(6814),e=n(6223),o=n(7331),d=n(6800),t=n(2029),m=n(2545),p=n(8720),A=n(2486),c=n(3911);function r(u,T){1&u&&(t.TgZ(0,"div",4),t._UZ(1,"ion-icon",5),t.TgZ(2,"p"),t._uU(3),t.ALo(4,"translate"),t.qZA()()),2&u&&(t.xp6(3),t.hij("",t.lcZ(4,1,"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u0443 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),"."))}function g(u,T){if(1&u&&(t.TgZ(0,"div",6)(1,"div",7)(2,"span"),t._uU(3),t.qZA()(),t.TgZ(4,"table",8)(5,"tbody")(6,"tr")(7,"td"),t._uU(8),t.ALo(9,"translate"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA()(),t.TgZ(12,"tr")(13,"td"),t._uU(14),t.ALo(15,"translate"),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA()()()(),t.TgZ(18,"table",9)(19,"tbody")(20,"tr")(21,"td"),t._uU(22),t.ALo(23,"translate"),t.qZA(),t.TgZ(24,"td"),t._uU(25),t.ALo(26,"date"),t.qZA()(),t.TgZ(27,"tr")(28,"td"),t._uU(29),t.ALo(30,"translate"),t.qZA(),t.TgZ(31,"td"),t._uU(32),t.qZA()(),t.TgZ(33,"tr")(34,"td"),t._uU(35),t.ALo(36,"translate"),t.qZA(),t.TgZ(37,"td"),t._uU(38),t.qZA()(),t.TgZ(39,"tr")(40,"td"),t._uU(41),t.ALo(42,"translate"),t.qZA(),t.TgZ(43,"td"),t._uU(44),t.ALo(45,"translate"),t.qZA()(),t.TgZ(46,"tr")(47,"td"),t._uU(48),t.ALo(49,"translate"),t.qZA(),t.TgZ(50,"td"),t._uU(51),t.qZA()()()(),t.TgZ(52,"button",10),t._uU(53),t.ALo(54,"translate"),t.qZA()()),2&u){const l=T.$implicit,s=t.oxw();t.xp6(3),t.hij(" \u2116",s.authService.addLeadingZeros(l.id),""),t.xp6(5),t.hij("",t.lcZ(9,17,"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0438\u0437"),":"),t.xp6(3),t.Oqu(l.route.from_city),t.xp6(3),t.hij("",t.lcZ(15,19,"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0432"),":"),t.xp6(3),t.Oqu(l.route.to_city),t.xp6(5),t.Oqu(t.lcZ(23,21,"\u0412\u0440\u0435\u043c\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438")),t.xp6(3),t.Oqu(t.xi3(26,23,l.date_send,"dd MMMM yyyy HH:mm")),t.xp6(4),t.Oqu(t.lcZ(30,26,"\u0422\u0438\u043f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430")),t.xp6(3),t.Oqu(s.returnNameTypeTransport(l.transport_type)),t.xp6(3),t.Oqu(t.lcZ(36,28,"\u0422\u0438\u043f \u0433\u0440\u0443\u0437\u0430")),t.xp6(3),t.Oqu(s.returnNameCargoType(l.type_cargo)),t.xp6(3),t.Oqu(t.lcZ(42,30,"\u0412\u0435\u0441 \u0433\u0440\u0443\u0437\u0430")),t.xp6(3),t.AsE("",l.weight," ",t.lcZ(45,32,"\u043a\u0433"),"."),t.xp6(4),t.Oqu(t.lcZ(49,34,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c")),t.xp6(3),t.Oqu(l.usernameorder),t.xp6(2),t.Oqu(t.lcZ(54,36,"\u0417\u0430\u043a\u0430\u0437 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d"))}}const a=[{path:"",component:(()=>{class u{constructor(l,s,v){this.authService=l,this.platform=s,this.router=v,this.items=[]}ngOnInit(){this.items=this.authService.myarchiveorders}returnNameTypeTransport(l){const s=this.authService.typetruck.findIndex(v=>+v.id==+l);return s>=0?this.authService.typetruck[s].name:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"}returnNameCargoType(l){const s=this.authService.typecargo.findIndex(v=>+v.id==+l);return s>=0?this.authService.typecargo[s].name:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"}static#t=this.\u0275fac=function(s){return new(s||u)(t.Y36(m.$),t.Y36(p.t4),t.Y36(d.F0))};static#e=this.\u0275cmp=t.Xpm({type:u,selectors:[["app-archive"]],decls:6,vars:2,consts:[["class","noItem",4,"ngIf"],[1,"wrapper-fluid"],[1,"body-wrap","form-block","main-body","body-have-bottom-menu"],["class","order-item",4,"ngFor","ngForOf"],[1,"noItem"],["src","assets/img/wrong.svg"],[1,"order-item"],[1,"order-item-articul"],[1,"table-info","table-img"],[1,"table-data"],[1,"get-order-btn"]],template:function(s,v){1&s&&(t._UZ(0,"app-header"),t.TgZ(1,"ion-content"),t.YNc(2,r,5,3,"div",0),t.TgZ(3,"div",1)(4,"div",2),t.YNc(5,g,55,38,"div",3),t.qZA()()()),2&s&&(t.xp6(2),t.Q6J("ngIf",v.items&&0===v.items.length),t.xp6(3),t.Q6J("ngForOf",v.items))},dependencies:[h.sg,h.O5,o.W2,o.gu,A.E,h.uU,c.X$]})}return u})()}];let Z=(()=>{class u{static#t=this.\u0275fac=function(s){return new(s||u)};static#e=this.\u0275mod=t.oAB({type:u});static#n=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(a),d.Bz]})}return u})();var _=n(324),y=n(2319);let O=(()=>{class u{static#t=this.\u0275fac=function(s){return new(s||u)};static#e=this.\u0275mod=t.oAB({type:u});static#n=this.\u0275inj=t.cJS({imports:[h.ez,e.u5,o.Pc,Z,_.HeaderPageModule,y.h,c.aw]})}return u})()},324:(P,f,n)=>{n.r(f),n.d(f,{HeaderPageModule:()=>c});var h=n(6814),e=n(6223),o=n(7331),d=n(6800),t=n(2486),m=n(2029);const p=[{path:"",component:t.E}];let A=(()=>{class r{static#t=this.\u0275fac=function(a){return new(a||r)};static#e=this.\u0275mod=m.oAB({type:r});static#n=this.\u0275inj=m.cJS({imports:[d.Bz.forChild(p),d.Bz]})}return r})(),c=(()=>{class r{static#t=this.\u0275fac=function(a){return new(a||r)};static#e=this.\u0275mod=m.oAB({type:r});static#n=this.\u0275inj=m.cJS({imports:[h.ez,e.u5,o.Pc,A]})}return r})()},2486:(P,f,n)=>{n.d(f,{E:()=>c});var h=n(5861),e=n(5053),o=n(2029),d=n(6800),t=n(3248),m=n(2545);let p=(()=>{class r{constructor(i,a){this.router=i,this.authService=a}init(){try{t.V.requestPermissions().then(i=>{"granted"===i.receive?(console.log("We have permission to send push notifications"),t.V.register()):console.log("We do not have permission to send push notifications")}),t.V.addListener("registration",i=>{console.log("saveDeviceToken",i.value),this.authService.saveDeviceToken(i.value).subscribe()}),t.V.addListener("registrationError",i=>{console.error("Error with Push plugin",i)}),t.V.addListener("pushNotificationReceived",i=>{console.log("Push received: ",i)}),t.V.addListener("pushNotificationActionPerformed",i=>{console.log("Push action performed: ",i)})}catch(i){console.log(i)}}static#t=this.\u0275fac=function(a){return new(a||r)(o.LFG(d.F0),o.LFG(m.$))};static#e=this.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var A=n(7331);let c=(()=>{class r{constructor(i,a,Z,_,y){this.router=i,this.pushService=a,this.menu=Z,this.authService=_,this.modalCtrl=y}ngOnInit(){}menuOpened(){var i=this;return(0,h.Z)(function*(){yield i.menu.toggle()})()}goToNotify(){var i=this;return(0,h.Z)(function*(){i.pushService.init(),yield i.router.navigate(["/notify"])})()}openTestPage(){var i=this;return(0,h.Z)(function*(){const a=yield i.modalCtrl.create({component:e.b,showBackdrop:!0,breakpoints:[0,.6],initialBreakpoint:.6,presentingElement:yield i.modalCtrl.getTop(),backdropDismiss:!0,cssClass:"modalCss",mode:"ios"});yield a.present(),yield a.onWillDismiss()})()}returnLogo(){return"ru"===this.authService.language?"/assets/logos/rus-oq.png":"tr"===this.authService.language?"/assets/logos/turk-oq.png.png":"en"===this.authService.language?"/assets/logos/english-oq.png":void 0}static#t=this.\u0275fac=function(a){return new(a||r)(o.Y36(d.F0),o.Y36(p),o.Y36(A._q),o.Y36(m.$),o.Y36(A.IN))};static#e=this.\u0275cmp=o.Xpm({type:r,selectors:[["app-header"]],decls:7,vars:0,consts:[[1,"header","ion-padding"],[1,"header__left",3,"click"],["src","assets/img/menu.svg","alt",""],["src","/assets/logos/tirgo-logo.png","alt","\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",1,"header__logo"],[1,"header__right",3,"click"],["src","assets/img/notification.svg","alt",""]],template:function(a,Z){1&a&&(o.TgZ(0,"ion-header")(1,"header",0)(2,"button",1),o.NdJ("click",function(){return Z.menuOpened()}),o._UZ(3,"img",2),o.qZA(),o._UZ(4,"img",3),o.TgZ(5,"button",4),o.NdJ("click",function(){return Z.goToNotify()}),o._UZ(6,"img",5),o.qZA()()())},dependencies:[A.Gu],styles:[".header[_ngcontent-%COMP%]{display:grid;align-items:center;grid-template-columns:1fr auto 1fr;color:#fff;padding-top:calc(.9375rem + env(safe-area-inset-top))!important}.header__left[_ngcontent-%COMP%]{padding:.3125rem;justify-self:start}.header__logo[_ngcontent-%COMP%]{width:11.25rem}.header__title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;justify-self:center}.header__right[_ngcontent-%COMP%]{padding:.3125rem;justify-self:right}.header__right[_ngcontent-%COMP%]   i.icm-notif[_ngcontent-%COMP%]{font-size:1.375rem}.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none!important}"]})}return r})()},5053:(P,f,n)=>{n.d(f,{b:()=>m});var h=n(5861),e=n(2029),o=n(2545),d=n(7331),t=n(6223);let m=(()=>{class p{constructor(c,r){this.authService=c,this.modalCtrl=r,this.star=5,this.comment=""}ngOnInit(){}setRaiting(){var c=this;return(0,h.Z)(function*(){(yield c.authService.setRaiting(c.orderid,c.star,c.comment,c.userid).toPromise()).status&&(yield c.authService.alert("\u041e\u0442\u043b\u0438\u0447\u043d\u043e","\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0447\u0442\u043e \u043e\u0446\u0435\u043d\u0438\u043b\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430."),yield c.modalCtrl.dismiss())})()}static#t=this.\u0275fac=function(r){return new(r||p)(e.Y36(o.$),e.Y36(d.IN))};static#e=this.\u0275cmp=e.Xpm({type:p,selectors:[["app-setraiting"]],inputs:{orderid:"orderid",userid:"userid"},decls:13,vars:6,consts:[[1,"raiting-page"],[1,"stars"],[3,"name","click"],["type","text","placeholder","\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",3,"ngModel","ngModelChange"],[3,"click"]],template:function(r,g){1&r&&(e.TgZ(0,"ion-content")(1,"div",0)(2,"h2"),e._uU(3,"\u041e\u0446\u0435\u043d\u0438\u0442\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430"),e.qZA(),e.TgZ(4,"div",1)(5,"ion-icon",2),e.NdJ("click",function(){return g.star=1}),e.qZA(),e.TgZ(6,"ion-icon",2),e.NdJ("click",function(){return g.star=2}),e.qZA(),e.TgZ(7,"ion-icon",2),e.NdJ("click",function(){return g.star=3}),e.qZA(),e.TgZ(8,"ion-icon",2),e.NdJ("click",function(){return g.star=4}),e.qZA(),e.TgZ(9,"ion-icon",2),e.NdJ("click",function(){return g.star=5}),e.qZA()(),e.TgZ(10,"input",3),e.NdJ("ngModelChange",function(a){return g.comment=a}),e.qZA(),e.TgZ(11,"button",4),e.NdJ("click",function(){return g.setRaiting()}),e._uU(12,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043e\u0446\u0435\u043d\u043a\u0443"),e.qZA()()()),2&r&&(e.xp6(5),e.Q6J("name",g.star>=1?"star":"star-outline"),e.xp6(1),e.Q6J("name",g.star>=2?"star":"star-outline"),e.xp6(1),e.Q6J("name",g.star>=3?"star":"star-outline"),e.xp6(1),e.Q6J("name",g.star>=4?"star":"star-outline"),e.xp6(1),e.Q6J("name",g.star>=5?"star":"star-outline"),e.xp6(1),e.Q6J("ngModel",g.comment))},dependencies:[t.Fj,t.JJ,t.On,d.W2,d.gu],styles:[".raiting-page[_ngcontent-%COMP%]{height:400px;display:flex;align-items:center;justify-content:flex-start;flex-direction:column}.raiting-page[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-top:20px;width:80%;outline:none;background:#252333;border:none;border-radius:4px;height:56px;padding:0 0 0 15px;font-family:Montserrat,sans-serif;font-style:normal;font-weight:500;font-size:14px;line-height:16px;color:#cfd2d8;box-sizing:border-box}.raiting-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:0;color:#fff}.raiting-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:80%;text-align:center;color:#fff}.raiting-page[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]{margin-top:20px}.raiting-page[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:5px;color:#ed901e;font-size:3em}.raiting-page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:50px;width:80%;margin-top:20px;border-radius:10px;background:#403c5f}"]})}return p})()}}]);