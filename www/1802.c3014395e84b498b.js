"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1802],{1586:(E,T,d)=>{d.d(T,{G:()=>_});var l=d(2726),g=d(5861);class e extends l.Uw{constructor(){super(...arguments),this.ERROR_PICK_FILE_CANCELED="pickFiles canceled."}convertHeicToJpeg(u){var s=this;return(0,g.Z)(function*(){throw s.unimplemented("Not implemented on web.")})()}pickFiles(u){var s=this;return(0,g.Z)(function*(){const m=yield s.openFilePicker(u);if(!m)throw new Error(s.ERROR_PICK_FILE_CANCELED);const h={files:[]};for(const p of m){const f={blob:p,modifiedAt:p.lastModified,mimeType:s.getMimeTypeFromUrl(p),name:s.getNameFromUrl(p),path:void 0,size:s.getSizeFromUrl(p)};u?.readData&&(f.data=yield s.getDataFromFile(p)),h.files.push(f)}return h})()}pickImages(u){var s=this;return(0,g.Z)(function*(){return s.pickFiles(Object.assign({types:["image/*"]},u))})()}pickMedia(u){var s=this;return(0,g.Z)(function*(){return s.pickFiles(Object.assign({types:["image/*","video/*"]},u))})()}pickVideos(u){var s=this;return(0,g.Z)(function*(){return s.pickFiles(Object.assign({types:["video/*"]},u))})()}openFilePicker(u){var s=this;return(0,g.Z)(function*(){var m;const h=(null===(m=u?.types)||void 0===m?void 0:m.join(","))||"",p=void 0===u?.limit?0:u.limit;return new Promise(f=>{let A=!1;const Z=document.createElement("input");Z.type="file",Z.accept=h,Z.multiple=0===p,Z.addEventListener("change",()=>{A=!0;const C=Array.from(Z.files||[]);f(C)},{once:!0}),window.addEventListener("focus",(0,g.Z)(function*(){yield s.wait(1e3),!A&&f(void 0)}),{once:!0}),Z.click()})})()}getDataFromFile(u){return(0,g.Z)(function*(){return new Promise((s,m)=>{const h=new FileReader;h.readAsDataURL(u),h.onload=()=>{const A=("string"==typeof h.result?h.result:"").split("base64,")[1]||"";s(A)},h.onerror=p=>{m(p)}})})()}getNameFromUrl(u){return u.name}getMimeTypeFromUrl(u){return u.type}getSizeFromUrl(u){return u.size}wait(u){return(0,g.Z)(function*(){return new Promise(s=>setTimeout(s,u))})()}}const _=(0,l.fo)("FilePicker",{web:()=>new e})},1802:(E,T,d)=>{d.d(T,{i:()=>C});var l=d(5861),g=d(1586),e=d(2029),_=d(7331),y=d(2545),u=d(6814),s=d(6223),m=d(3911);function h(o,v){if(1&o){const t=e.EpF();e.TgZ(0,"div",23),e.NdJ("click",function(){const i=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.delFileTechTransport(i.preview.toString()))}),e.TgZ(1,"div",24),e._UZ(2,"ion-icon",25),e.qZA(),e.TgZ(3,"div",26),e._UZ(4,"img",27),e.qZA()()}if(2&o){const t=v.$implicit,n=e.oxw();e.xp6(4),e.Q6J("src",n.file_url+t.filename,e.LSH)}}function p(o,v){if(1&o){const t=e.EpF();e.TgZ(0,"div",23),e.NdJ("click",function(){const i=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.delFileLicense(i.preview.toString()))}),e.TgZ(1,"div",24),e._UZ(2,"ion-icon",25),e.qZA(),e.TgZ(3,"div",26),e._UZ(4,"img",27),e.qZA()()}if(2&o){const t=v.$implicit,n=e.oxw();e.xp6(4),e.Q6J("src",n.file_url+t.filename,e.LSH)}}function f(o,v){if(1&o){const t=e.EpF();e.TgZ(0,"div",16)(1,"div",17),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.uploadImage("license_files"))}),e.TgZ(2,"label",18)(3,"span",19)(4,"span"),e._uU(5,"+"),e.qZA(),e._UZ(6,"br"),e._uU(7),e.ALo(8,"translate"),e._UZ(9,"br"),e._uU(10),e.ALo(11,"translate"),e.qZA()()()()}2&o&&(e.xp6(7),e.hij("",e.lcZ(8,2,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")," "),e.xp6(3),e.hij(" ",e.lcZ(11,4,"\u043b\u0438\u0446\u0435\u043d\u0437\u0438\u044e"),""))}function A(o,v){if(1&o){const t=e.EpF();e.TgZ(0,"div",23),e.NdJ("click",function(){const i=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.delFileCarPhoto(i.preview.toString()))}),e.TgZ(1,"div",24),e._UZ(2,"ion-icon",25),e.qZA(),e.TgZ(3,"div",26),e._UZ(4,"img",27),e.qZA()()}if(2&o){const t=v.$implicit,n=e.oxw();e.xp6(4),e.Q6J("src",n.file_url+t.filename,e.LSH)}}function Z(o,v){if(1&o){const t=e.EpF();e.TgZ(0,"div",16)(1,"div",17),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.uploadImage("car_photos"))}),e.TgZ(2,"label",18)(3,"span",19)(4,"span"),e._uU(5,"+"),e.qZA(),e._UZ(6,"br"),e._uU(7),e.ALo(8,"translate"),e._UZ(9,"br"),e._uU(10),e.ALo(11,"translate"),e.qZA()()()()}2&o&&(e.xp6(7),e.hij("",e.lcZ(8,2,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")," "),e.xp6(3),e.hij(" ",e.lcZ(11,4,"\u0444\u043e\u0442\u043e"),""))}let C=(()=>{class o{constructor(t,n,r,i){this.modalController=t,this.loadingCtrl=n,this.authService=r,this.alertController=i,this.file_url="https://admin.tirgo.io/file/",this.type=0,this.maxweight=21e3,this.name="",this.description="",this.typetransport=[],this.adr=!1,this.cubature="96",this.state_number="",this.tech_passport_files=[],this.license_files=[],this.car_photos=[],this.loadingAddTransport=!1}ngOnInit(){this.typetransport=this.authService.typetruck.map(t=>({label:t.name,type:"radio",value:t.id}))}close(){var t=this;return(0,l.Z)(function*(){yield t.modalController.dismiss({accepted:!0})})()}returnNameTypeTransport(t){const n=this.authService.typetruck.findIndex(r=>+r.id==+t);return n>=0?this.authService.typetruck[n].name:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e"}returnMaxWeightTransport(t){const n=this.authService.typetruck.findIndex(r=>+r.id==+t);return n>=0?this.authService.typetruck[n].weight:0}selectTypeTransport(){var t=this;return(0,l.Z)(function*(){var r;yield(yield t.alertController.create({header:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430",cssClass:"customAlert",inputs:t.typetransport,buttons:[{text:"\u041e\u0442\u043c\u0435\u043d\u0430",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c",handler:(r=(0,l.Z)(function*(i){t.type=i,t.maxweight=t.returnMaxWeightTransport(i)}),function(a){return r.apply(this,arguments)})}]})).present()})()}selectCubature(){var t=this;return(0,l.Z)(function*(){var r;0===t.type?t.authService.alert("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f","\u0414\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u043a\u0443\u0431\u0430\u0442\u0443\u0440\u044b \u043f\u0440\u0438\u0446\u0435\u043f\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0442\u0438\u043f \u043f\u0440\u0438\u0446\u0435\u043f\u0430"):yield(yield t.alertController.create({header:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0443\u0431\u0430\u0442\u0443\u0440\u0443",cssClass:"customAlert",inputs:[{label:"82 m3",type:"radio",value:82},{label:"90 m3",type:"radio",value:90},{label:"96 m3",type:"radio",value:96},{label:"105 m3",type:"radio",value:105},{label:"110 m3",type:"radio",value:110},{label:"120 m3",type:"radio",value:120}],buttons:[{text:"\u041e\u0442\u043c\u0435\u043d\u0430",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c",handler:(r=(0,l.Z)(function*(i){t.cubature=i}),function(a){return r.apply(this,arguments)})}]})).present()})()}saveTransport(){var t=this;return(0,l.Z)(function*(){t.loadingAddTransport=!0,0===t.type?(t.authService.alert("\u041e\u0448\u0438\u0431\u043a\u0430","\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0442\u0438\u043f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430."),t.loadingAddTransport=!1):yield t.authService.addTransport(t.name,t.description,t.maxweight,t.type,t.car_photos,t.license_files,t.tech_passport_files,t.adr,t.cubature,t.state_number).toPromise().then(function(){var n=(0,l.Z)(function*(r){r.status&&(t.authService.mytruck=yield t.authService.getTruck().toPromise(),yield t.close(),yield t.authService.alert("\u041e\u0442\u043b\u0438\u0447\u043d\u043e","\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"))});return function(r){return n.apply(this,arguments)}}()).catch(function(){var n=(0,l.Z)(function*(r){console.log(r)});return function(r){return n.apply(this,arguments)}}())})()}uploadImage(t){var n=this;return(0,l.Z)(function*(){const i=(yield g.G.pickImages({readData:!0})).files[0].data,a=(new Date).getTime()+".jpeg";yield n.authService.uploadFile(a,i,"car-docks").then(c=>{c&&("tech_passport_files"==t&&n.tech_passport_files.push(c.file),"license_files"==t&&n.license_files.push(c.file),"car_photos"==t&&n.car_photos.push(c.file))})})()}addFilesTechPassport(){var t=this;return(0,l.Z)(function*(){t.loading=yield t.loadingCtrl.create({message:"\u041e\u0442\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0444\u043e\u0442\u043e",cssClass:"custom-loading"})})()}delFileTechTransport(t){var n=this;return(0,l.Z)(function*(){var i;yield(yield n.alertController.create({header:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u0442\u043e",message:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435.",cssClass:"customAlert",buttons:[{text:"\u041e\u0442\u043c\u0435\u043d\u0430",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",role:"destructive",handler:(i=(0,l.Z)(function*(a){console.log(t);const c=n.tech_passport_files.findIndex(x=>x.preview===t);c>=0&&n.tech_passport_files.splice(c,1)}),function(c){return i.apply(this,arguments)})}]})).present()})()}addFilesLicense(){var t=this;return(0,l.Z)(function*(){t.loading=yield t.loadingCtrl.create({message:"\u041e\u0442\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0444\u043e\u0442\u043e",cssClass:"custom-loading"})})()}delFileLicense(t){var n=this;return(0,l.Z)(function*(){var i;yield(yield n.alertController.create({header:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u0442\u043e",message:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435.",cssClass:"customAlert",buttons:[{text:"\u041e\u0442\u043c\u0435\u043d\u0430",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",role:"destructive",handler:(i=(0,l.Z)(function*(a){const c=n.license_files.findIndex(x=>x.preview===t);c>=0&&n.license_files.splice(c,1)}),function(c){return i.apply(this,arguments)})}]})).present()})()}addFilesCarPhoto(){var t=this;return(0,l.Z)(function*(){t.loading=yield t.loadingCtrl.create({message:"\u041e\u0442\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0444\u043e\u0442\u043e",cssClass:"custom-loading"})})()}delFileCarPhoto(t){var n=this;return(0,l.Z)(function*(){var i;yield(yield n.alertController.create({header:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u0442\u043e",message:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435.",cssClass:"customAlert",buttons:[{text:"\u041e\u0442\u043c\u0435\u043d\u0430",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",role:"destructive",handler:(i=(0,l.Z)(function*(a){const c=n.car_photos.findIndex(x=>x.preview===t);c>=0&&n.car_photos.splice(c,1)}),function(c){return i.apply(this,arguments)})}]})).present()})()}setAdrUser(t){var n=this;return(0,l.Z)(function*(){n.adr=t.target.checked})()}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(_.IN),e.Y36(_.HT),e.Y36(y.$),e.Y36(_.Br))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-addtransport"]],decls:98,vars:73,consts:[[1,"my-custom-header"],["slot","end"],[3,"click"],[1,"wrapper-fluid","ion-padding-tabs"],[1,"body-wrap","form-block"],[1,"autorize"],["type","text","name","name","readonly","",3,"placeholder","value","click"],["type","text","name","name",3,"placeholder","ngModel","ngModelChange"],["rows","5","type","text","name","name",3,"placeholder","ngModel","ngModelChange"],["readonly","","type","text","name","name",3,"placeholder","value","click"],["type","text","name","name","placeholder","\u0413\u043e\u0441. \u043d\u043e\u043c\u0435\u0440 \u0422\u044f\u0433\u0430\u0447\u0430",3,"ngModel","ngModelChange"],[1,"data-checkbox"],["type","checkbox",1,"checkbox",3,"checked","change"],[1,"fake-checkbox"],[1,"file-uploads"],["class","file-group",3,"click",4,"ngFor","ngForOf"],[1,"file-group"],[1,"form-group",3,"click"],[1,"label"],[1,"title"],["class","file-group",4,"ngIf"],[1,"bottom-wrap","personal-bottom"],[1,"reg-btn",3,"disabled","click"],[1,"file-group",3,"click"],[1,"del-button"],["name","trash-bin-outline"],[1,"form-group"],["alt","",3,"src"]],template:function(n,r){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"ion-buttons",1)(6,"ion-button",2),e.NdJ("click",function(){return r.close()}),e._uU(7),e.ALo(8,"translate"),e.qZA()()()(),e.TgZ(9,"ion-content")(10,"div",3)(11,"div",4)(12,"div",5)(13,"p")(14,"b"),e._uU(15),e.ALo(16,"translate"),e.qZA()(),e.TgZ(17,"input",6),e.NdJ("click",function(){return r.selectTypeTransport()}),e.ALo(18,"translate"),e.qZA(),e.ynx(19),e.TgZ(20,"p")(21,"b"),e._uU(22),e.ALo(23,"translate"),e.qZA()(),e.TgZ(24,"input",7),e.NdJ("ngModelChange",function(a){return r.name=a}),e.ALo(25,"translate"),e.qZA(),e.BQk(),e.ynx(26),e.TgZ(27,"p")(28,"b"),e._uU(29),e.ALo(30,"translate"),e.qZA()(),e.TgZ(31,"textarea",8),e.NdJ("ngModelChange",function(a){return r.description=a}),e.ALo(32,"translate"),e.qZA(),e.BQk(),e.ynx(33),e.TgZ(34,"p")(35,"b"),e._uU(36),e.ALo(37,"translate"),e.qZA()(),e.TgZ(38,"input",7),e.NdJ("ngModelChange",function(a){return r.maxweight=a}),e.ALo(39,"translate"),e.qZA(),e.BQk(),e.ynx(40),e.TgZ(41,"p")(42,"b"),e._uU(43),e.ALo(44,"translate"),e.qZA()(),e.TgZ(45,"input",9),e.NdJ("click",function(){return r.selectCubature()}),e.ALo(46,"translate"),e.qZA(),e.BQk(),e.ynx(47),e.TgZ(48,"p")(49,"b"),e._uU(50),e.ALo(51,"translate"),e.qZA()(),e.TgZ(52,"input",10),e.NdJ("ngModelChange",function(a){return r.state_number=a}),e.qZA(),e.BQk(),e.ynx(53),e.TgZ(54,"div",11)(55,"p"),e._uU(56,"ADR"),e.qZA(),e.TgZ(57,"label")(58,"input",12),e.NdJ("change",function(a){return r.setAdrUser(a)}),e.qZA(),e._UZ(59,"span",13),e._uU(60),e.ALo(61,"translate"),e.qZA()(),e.BQk(),e.TgZ(62,"p")(63,"b"),e._uU(64),e.ALo(65,"translate"),e.qZA()(),e.TgZ(66,"div",14),e.YNc(67,h,5,1,"div",15),e.TgZ(68,"div",16)(69,"div",17),e.NdJ("click",function(){return r.uploadImage("tech_passport_files")}),e.TgZ(70,"label",18)(71,"span",19)(72,"span"),e._uU(73,"+"),e.qZA(),e._UZ(74,"br"),e._uU(75),e.ALo(76,"translate"),e._UZ(77,"br"),e._uU(78),e.ALo(79,"translate"),e.qZA()()()()(),e.TgZ(80,"p")(81,"b"),e._uU(82),e.ALo(83,"translate"),e.qZA()(),e.TgZ(84,"div",14),e.YNc(85,p,5,1,"div",15),e.YNc(86,f,12,6,"div",20),e.qZA(),e.TgZ(87,"p")(88,"b"),e._uU(89),e.ALo(90,"translate"),e.qZA()(),e.TgZ(91,"div",14),e.YNc(92,A,5,1,"div",15),e.YNc(93,Z,12,6,"div",20),e.qZA()()(),e.TgZ(94,"div",21)(95,"button",22),e.NdJ("click",function(){return r.saveTransport()}),e._uU(96),e.ALo(97,"translate"),e.qZA()()()()),2&n&&(e.xp6(3),e.Oqu(e.lcZ(4,33,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442")),e.xp6(4),e.hij(" ",e.lcZ(8,35,"\u0417\u0430\u043a\u0440\u044b\u0442\u044c")," "),e.xp6(8),e.Oqu(e.lcZ(16,37,"\u0422\u0438\u043f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430")),e.xp6(2),e.s9C("placeholder",e.lcZ(18,39,"\u0422\u0438\u043f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430")),e.Q6J("value",r.returnNameTypeTransport(r.type)),e.xp6(5),e.Oqu(e.lcZ(23,41,"\u041c\u0430\u0440\u043a\u0430 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430")),e.xp6(2),e.s9C("placeholder",e.lcZ(25,43,"\u041c\u0430\u0440\u043a\u0430 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430")),e.Q6J("ngModel",r.name),e.xp6(5),e.Oqu(e.lcZ(30,45,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435")),e.xp6(2),e.s9C("placeholder",e.lcZ(32,47,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435")),e.Q6J("ngModel",r.description),e.xp6(5),e.Oqu(e.lcZ(37,49,"\u0413\u0440\u0443\u0437\u043e\u043f\u043e\u0434\u044a\u0435\u043c\u043d\u043e\u0441\u0442\u044c")),e.xp6(2),e.s9C("placeholder",e.lcZ(39,51,"\u0413\u0440\u0443\u0437\u043e\u043f\u043e\u0434\u044a\u0435\u043c\u043d\u043e\u0441\u0442\u044c")),e.Q6J("ngModel",r.maxweight),e.xp6(5),e.Oqu(e.lcZ(44,53,"\u041a\u0443\u0431\u0430\u0442\u0443\u0440\u0430 \u043f\u0440\u0438\u0446\u0435\u043f\u0430")),e.xp6(2),e.s9C("placeholder",e.lcZ(46,55,"\u041a\u0443\u0431\u0430\u0442\u0443\u0440\u0430 \u043f\u0440\u0438\u0446\u0435\u043f\u0430")),e.Q6J("value",r.cubature+" m3"),e.xp6(5),e.Oqu(e.lcZ(51,57,"\u0413\u043e\u0441. \u043d\u043e\u043c\u0435\u0440 \u0422\u044f\u0433\u0430\u0447\u0430")),e.xp6(2),e.Q6J("ngModel",r.state_number),e.xp6(6),e.Q6J("checked",r.adr),e.xp6(2),e.hij(" ",e.lcZ(61,59,"\u0415\u0441\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u043a\u0443 \u043e\u043f\u0430\u0441\u043d\u044b\u0445 \u0433\u0440\u0443\u0437\u043e\u0432")," "),e.xp6(4),e.Oqu(e.lcZ(65,61,"\u0422\u0435\u0445 \u043f\u0430\u0441\u043f\u043e\u0440\u0442")),e.xp6(3),e.Q6J("ngForOf",r.tech_passport_files),e.xp6(8),e.hij("",e.lcZ(76,63,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")," "),e.xp6(3),e.hij(" ",e.lcZ(79,65,"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442"),""),e.xp6(4),e.Oqu(e.lcZ(83,67,"\u041b\u0438\u0446\u0435\u043d\u0437\u0438\u0438 \u043d\u0430 \u043f\u0435\u0440\u0435\u0432\u043e\u0437\u043a\u0443 \u0433\u0440\u0443\u0437\u043e\u0432")),e.xp6(3),e.Q6J("ngForOf",r.license_files),e.xp6(1),e.Q6J("ngIf",r.license_files.length<3),e.xp6(3),e.Oqu(e.lcZ(90,69,"\u0424\u043e\u0442\u043e \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0430")),e.xp6(3),e.Q6J("ngForOf",r.car_photos),e.xp6(1),e.Q6J("ngIf",r.car_photos.length<4),e.xp6(2),e.Q6J("disabled",r.loadingAddTransport),e.xp6(1),e.Oqu(e.lcZ(97,71,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))},dependencies:[u.sg,u.O5,s.Fj,s.JJ,s.On,_.YG,_.Sm,_.W2,_.Gu,_.gu,_.wd,_.sr,m.X$],styles:[".file-group[_ngcontent-%COMP%]{max-width:112px!important;min-width:112px!important;min-height:85px!important;max-height:85px!important;width:112px!important;height:85px!important}.file-group[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{max-width:112px;min-width:112px;min-height:85px;max-height:85px;width:112px;height:85px;margin-right:10px}.file-group[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:10px;max-width:112px;min-width:112px;min-height:85px;max-height:85px;object-fit:cover;width:112px;height:85px}"]})}return o})()}}]);