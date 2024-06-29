"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2894,324],{324:(v,m,i)=>{i.r(m),i.d(m,{HeaderPageModule:()=>a});var h=i(6814),n=i(6223),r=i(7331),c=i(6800),e=i(2486),g=i(2029);const p=[{path:"",component:e.E}];let f=(()=>{class o{static#t=this.\u0275fac=function(s){return new(s||o)};static#e=this.\u0275mod=g.oAB({type:o});static#n=this.\u0275inj=g.cJS({imports:[c.Bz.forChild(p),c.Bz]})}return o})(),a=(()=>{class o{static#t=this.\u0275fac=function(s){return new(s||o)};static#e=this.\u0275mod=g.oAB({type:o});static#n=this.\u0275inj=g.cJS({imports:[h.ez,n.u5,r.Pc,f]})}return o})()},2486:(v,m,i)=>{i.d(m,{E:()=>a});var h=i(5861),n=i(5053),r=i(2029),c=i(6800),e=i(3248),g=i(2545);let p=(()=>{class o{constructor(t,s){this.router=t,this.authService=s}init(){try{e.V.requestPermissions().then(t=>{"granted"===t.receive?(console.log("We have permission to send push notifications"),e.V.register()):console.log("We do not have permission to send push notifications")}),e.V.addListener("registration",t=>{console.log("saveDeviceToken",t.value),this.authService.saveDeviceToken(t.value).subscribe()}),e.V.addListener("registrationError",t=>{console.error("Error with Push plugin",t)}),e.V.addListener("pushNotificationReceived",t=>{console.log("Push received: ",t)}),e.V.addListener("pushNotificationActionPerformed",t=>{console.log("Push action performed: ",t)})}catch(t){console.log(t)}}static#t=this.\u0275fac=function(s){return new(s||o)(r.LFG(c.F0),r.LFG(g.$))};static#e=this.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var f=i(7331);let a=(()=>{class o{constructor(t,s,l,d,P){this.router=t,this.pushService=s,this.menu=l,this.authService=d,this.modalCtrl=P}ngOnInit(){}menuOpened(){var t=this;return(0,h.Z)(function*(){yield t.menu.toggle()})()}goToNotify(){this.router.navigate(["/notify"])}openTestPage(){var t=this;return(0,h.Z)(function*(){const s=yield t.modalCtrl.create({component:n.b,showBackdrop:!0,breakpoints:[0,.6],initialBreakpoint:.6,presentingElement:yield t.modalCtrl.getTop(),backdropDismiss:!0,cssClass:"modalCss",mode:"ios"});yield s.present(),yield s.onWillDismiss()})()}returnLogo(){return"ru"===this.authService.language?"/assets/logos/rus-oq.png":"tr"===this.authService.language?"/assets/logos/turk-oq.png.png":"en"===this.authService.language?"/assets/logos/english-oq.png":void 0}static#t=this.\u0275fac=function(s){return new(s||o)(r.Y36(c.F0),r.Y36(p),r.Y36(f._q),r.Y36(g.$),r.Y36(f.IN))};static#e=this.\u0275cmp=r.Xpm({type:o,selectors:[["app-header"]],decls:7,vars:0,consts:[[1,"header","ion-padding"],[1,"header__left",3,"click"],["src","assets/img/menu.svg","alt",""],["src","/assets/logos/tirgo-logo.png","alt","\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",1,"header__logo"],[1,"header__right",3,"click"],["src","assets/img/notification.svg","alt",""]],template:function(s,l){1&s&&(r.TgZ(0,"ion-header")(1,"header",0)(2,"button",1),r.NdJ("click",function(){return l.menuOpened()}),r._UZ(3,"img",2),r.qZA(),r._UZ(4,"img",3),r.TgZ(5,"button",4),r.NdJ("click",function(){return l.goToNotify()}),r._UZ(6,"img",5),r.qZA()()())},dependencies:[f.Gu],styles:[".header[_ngcontent-%COMP%]{display:grid;align-items:center;grid-template-columns:1fr auto 1fr;color:#fff;padding-top:calc(.9375rem + env(safe-area-inset-top))!important}.header__left[_ngcontent-%COMP%]{padding:.3125rem;justify-self:start}.header__logo[_ngcontent-%COMP%]{width:11.25rem}.header__title[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:600;justify-self:center}.header__right[_ngcontent-%COMP%]{padding:.3125rem;justify-self:right}.header__right[_ngcontent-%COMP%]   i.icm-notif[_ngcontent-%COMP%]{font-size:1.375rem}.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:none!important}"]})}return o})()},2894:(v,m,i)=>{i.r(m),i.d(m,{MysubscribersPageModule:()=>u});var h=i(6814),n=i(6223),r=i(7331),c=i(6800),e=i(2029),g=i(8720);const f=[{path:"",component:(()=>{class t{constructor(l){this.navCtrl=l}ngOnInit(){}back(){this.navCtrl.back()}static#t=this.\u0275fac=function(d){return new(d||t)(e.Y36(g.SH))};static#e=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-mysubscribers"]],decls:31,vars:0,consts:[[1,"wrapper-fluid-header"],[1,"logo-wrap","personal-head"],[1,"top-back",3,"click"],["src","assets/img/arrow-left.svg","alt",""],[1,"wrapper-fluid"],[1,"body-wrap","podpiski-list"],[1,"podposki-item"],[1,"podpiski-item-title"],["src","assets/img/down-row.svg","alt",""],[1,"bottom-wrap","personal-bottom"],[1,"reg-btn","podpis-buy"]],template:function(d,P){1&d&&(e.TgZ(0,"ion-header")(1,"div",0)(2,"div",1)(3,"button",2),e.NdJ("click",function(){return P.back()}),e._UZ(4,"img",3),e.qZA(),e.TgZ(5,"h2"),e._uU(6,"\u041c\u043e\u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0438"),e.qZA(),e._UZ(7,"div"),e.qZA()()(),e.TgZ(8,"ion-content")(9,"div",4)(10,"div",5)(11,"div",6)(12,"div",7),e._uU(13," \u041e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u0437\u0430 "),e._UZ(14,"img",8),e.qZA()(),e.TgZ(15,"div",6)(16,"div",7),e._uU(17," \u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0430\u044f \u0441\u0434\u0435\u043b\u043a\u0430 "),e._UZ(18,"img",8),e.qZA()(),e.TgZ(19,"div",6)(20,"div",7),e._uU(21," \u0421\u0442\u0440\u0430\u0445\u043e\u0432\u043a\u0430 "),e._UZ(22,"img",8),e.qZA()(),e.TgZ(23,"div",6)(24,"div",7),e._uU(25," \u041f\u0440\u043e\u043c\u043e-\u043a\u043e\u0434\u044b "),e._UZ(26,"img",8),e.qZA()()()()(),e.TgZ(27,"ion-footer")(28,"div",9)(29,"button",10),e._uU(30,"\u041a\u0443\u043f\u0438\u0442\u044c"),e.qZA()()())},dependencies:[r.W2,r.fr,r.Gu]})}return t})()}];let a=(()=>{class t{static#t=this.\u0275fac=function(d){return new(d||t)};static#e=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[c.Bz.forChild(f),c.Bz]})}return t})();var o=i(324);let u=(()=>{class t{static#t=this.\u0275fac=function(d){return new(d||t)};static#e=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[h.ez,n.u5,r.Pc,a,o.HeaderPageModule]})}return t})()},5053:(v,m,i)=>{i.d(m,{b:()=>g});var h=i(5861),n=i(2029),r=i(2545),c=i(7331),e=i(6223);let g=(()=>{class p{constructor(a,o){this.authService=a,this.modalCtrl=o,this.star=5,this.comment=""}ngOnInit(){}setRaiting(){var a=this;return(0,h.Z)(function*(){(yield a.authService.setRaiting(a.orderid,a.star,a.comment,a.userid).toPromise()).status&&(yield a.authService.alert("\u041e\u0442\u043b\u0438\u0447\u043d\u043e","\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0447\u0442\u043e \u043e\u0446\u0435\u043d\u0438\u043b\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430."),yield a.modalCtrl.dismiss())})()}static#t=this.\u0275fac=function(o){return new(o||p)(n.Y36(r.$),n.Y36(c.IN))};static#e=this.\u0275cmp=n.Xpm({type:p,selectors:[["app-setraiting"]],inputs:{orderid:"orderid",userid:"userid"},decls:13,vars:6,consts:[[1,"raiting-page"],[1,"stars"],[3,"name","click"],["type","text","placeholder","\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",3,"ngModel","ngModelChange"],[3,"click"]],template:function(o,u){1&o&&(n.TgZ(0,"ion-content")(1,"div",0)(2,"h2"),n._uU(3,"\u041e\u0446\u0435\u043d\u0438\u0442\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430"),n.qZA(),n.TgZ(4,"div",1)(5,"ion-icon",2),n.NdJ("click",function(){return u.star=1}),n.qZA(),n.TgZ(6,"ion-icon",2),n.NdJ("click",function(){return u.star=2}),n.qZA(),n.TgZ(7,"ion-icon",2),n.NdJ("click",function(){return u.star=3}),n.qZA(),n.TgZ(8,"ion-icon",2),n.NdJ("click",function(){return u.star=4}),n.qZA(),n.TgZ(9,"ion-icon",2),n.NdJ("click",function(){return u.star=5}),n.qZA()(),n.TgZ(10,"input",3),n.NdJ("ngModelChange",function(s){return u.comment=s}),n.qZA(),n.TgZ(11,"button",4),n.NdJ("click",function(){return u.setRaiting()}),n._uU(12,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043e\u0446\u0435\u043d\u043a\u0443"),n.qZA()()()),2&o&&(n.xp6(5),n.Q6J("name",u.star>=1?"star":"star-outline"),n.xp6(1),n.Q6J("name",u.star>=2?"star":"star-outline"),n.xp6(1),n.Q6J("name",u.star>=3?"star":"star-outline"),n.xp6(1),n.Q6J("name",u.star>=4?"star":"star-outline"),n.xp6(1),n.Q6J("name",u.star>=5?"star":"star-outline"),n.xp6(1),n.Q6J("ngModel",u.comment))},dependencies:[e.Fj,e.JJ,e.On,c.W2,c.gu],styles:[".raiting-page[_ngcontent-%COMP%]{height:400px;display:flex;align-items:center;justify-content:flex-start;flex-direction:column}.raiting-page[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-top:20px;width:80%;outline:none;background:#252333;border:none;border-radius:4px;height:56px;padding:0 0 0 15px;font-family:Montserrat,sans-serif;font-style:normal;font-weight:500;font-size:14px;line-height:16px;color:#cfd2d8;box-sizing:border-box}.raiting-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:0;color:#fff}.raiting-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:80%;text-align:center;color:#fff}.raiting-page[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]{margin-top:20px}.raiting-page[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:5px;color:#ed901e;font-size:3em}.raiting-page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:50px;width:80%;margin-top:20px;border-radius:10px;background:#403c5f}"]})}return p})()}}]);