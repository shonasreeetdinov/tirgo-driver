"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3193],{3193:(T,c,a)=>{a.r(c),a.d(c,{SupportPageModule:()=>M});var u=a(6814),r=a(6223),i=a(7331),d=a(6800),h=a(5861),e=a(2029),m=a(2545),f=a(8720),g=a(3911);function v(t,A){if(1&t&&(e.ynx(0),e.TgZ(1,"div",15)(2,"p",16),e._uU(3),e.qZA(),e.TgZ(4,"small"),e._uU(5),e.ALo(6,"date"),e.qZA()(),e.BQk()),2&t){const s=A.$implicit;e.xp6(1),e.Q6J("ngClass",s.user_admin_id?"support-message":"user-message"),e.xp6(2),e.Oqu(s.text),e.xp6(2),e.Oqu(e.xi3(6,3,s.date,"dd MMMM YYYY HH:mm"))}}const Z=[{path:"",component:(()=>{class t{constructor(s,n){this.authService=s,this.navCtrl=n,this.message="",this.disablebuttonsend=!1}ngOnInit(){}back(){this.navCtrl.back()}doRefresh(s){var n=this;return(0,h.Z)(function*(){n.authService.messages=yield n.authService.getMessages().toPromise(),setTimeout(()=>{s.target.complete()},1e3)})()}sendMessage(){this.disablebuttonsend=!0,this.authService.sendMessage(this.message).toPromise().then(s=>{this.authService.messages.push(s.data),this.disablebuttonsend=!1,this.message=""}).catch(s=>{this.authService.alert("\u0423\u043f\u0441","\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435")})}static#e=this.\u0275fac=function(n){return new(n||t)(e.Y36(m.$),e.Y36(f.SH))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-support"]],decls:22,vars:10,consts:[[1,"wrapper-fluid-header"],[1,"logo-wrap","personal-head"],[1,"top-back",3,"click"],["src","assets/img/arrow-left.svg","alt",""],["slot","fixed","pullFactor","1","pullMin","100","pullMax","200",3,"ionRefresh"],["pullingIcon","arrow-dropdown","refreshingSpinner","circles",1,"loadingspinner"],[1,"wrapper-fluid"],[1,"body-have-bottom-menu","ion-padding"],[4,"ngFor","ngForOf"],[1,"bottom-wrap","input-chat-support"],[1,"bottom-menu","support-input"],["type","text",3,"disabled","placeholder","ngModel","ngModelChange"],[3,"disabled","click"],["src","assets/img/arrow-right2.svg","alt",""],[1,"hidden-block-chat"],[3,"ngClass"],[1,"ion-no-margin","ion-no-padding"]],template:function(n,o){1&n&&(e.TgZ(0,"ion-header")(1,"div",0)(2,"div",1)(3,"button",2),e.NdJ("click",function(){return o.back()}),e._UZ(4,"img",3),e.qZA(),e.TgZ(5,"h2"),e._uU(6),e.ALo(7,"translate"),e.qZA(),e._UZ(8,"div"),e.qZA()()(),e.TgZ(9,"ion-content")(10,"ion-refresher",4),e.NdJ("ionRefresh",function(p){return o.doRefresh(p)}),e._UZ(11,"ion-refresher-content",5),e.qZA(),e.TgZ(12,"div",6)(13,"div",7),e.YNc(14,v,7,6,"ng-container",8),e.qZA(),e.TgZ(15,"div",9)(16,"nav",10)(17,"input",11),e.NdJ("ngModelChange",function(p){return o.message=p}),e.ALo(18,"translate"),e.qZA(),e.TgZ(19,"button",12),e.NdJ("click",function(){return o.sendMessage()}),e._UZ(20,"img",13),e.qZA()()(),e._UZ(21,"div",14),e.qZA()()),2&n&&(e.xp6(6),e.Oqu(e.lcZ(7,6,"\u0421\u043b\u0443\u0436\u0431\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438")),e.xp6(8),e.Q6J("ngForOf",o.authService.messages),e.xp6(3),e.s9C("placeholder",e.lcZ(18,8,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")),e.Q6J("disabled",o.disablebuttonsend)("ngModel",o.message),e.xp6(2),e.Q6J("disabled",o.disablebuttonsend))},dependencies:[u.mk,u.sg,r.Fj,r.JJ,r.On,i.W2,i.Gu,i.nJ,i.Wo,u.uU,g.X$]})}return t})()}];let S=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#s=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(Z),d.Bz]})}return t})();var b=a(2319);let M=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.oAB({type:t});static#s=this.\u0275inj=e.cJS({imports:[u.ez,r.u5,i.Pc,S,b.h,g.aw]})}return t})()}}]);