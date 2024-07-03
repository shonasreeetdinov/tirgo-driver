import {Component, Input, OnInit} from '@angular/core';
import {AlertController, LoadingController, ModalController} from "@ionic/angular";
import {AuthenticationService} from "../services/authentication.service";
import { FilePicker } from '@capawesome/capacitor-file-picker';

@Component({
  selector: 'app-edittransport',
  templateUrl: './edittransport.page.html',
  styleUrls: ['./edittransport.page.scss'],
})
export class EdittransportPage implements OnInit {
  @Input('item') item: any;
  file_url: string = 'https://admin.tirgo.io/file/';

  type:number = 0;
  maxweight:number = 0;
  name:string = '';
  description:string = '';
  typetransport:any[]=[];
  files:any[]=[];

  tech_passport_files:any[]=[];
  license_files:any[]=[];
  car_photos:any[]=[];

  loadingAddTransport:boolean = false;
  loading:any;
  adr:boolean = false

  cubature:string = '';
  state_number:string = '';

  constructor(
      private modalController:ModalController,
      private loadingCtrl: LoadingController,
      public authService:AuthenticationService,
      private alertController: AlertController
  ) { }

  ngOnInit() {
    this.type = this.item.type;
    this.name = this.item.name;
    this.description = this.item.description;
    this.maxweight = this.item.max_weight;
    this.adr = this.item.adr;
    this.cubature = this.item.cubature;
    this.state_number = this.item.state_number;
    this.typetransport = this.authService.typetruck.map((item) => {
      return {
        label: item.name,
        type: 'radio',
        value: item.id,
      };
    });
    for (let row of this.item.docks){
      if (row.type_file === 'car_photos'){
        this.car_photos.push(row)
      }else if(row.type_file === 'license_files'){
        this.license_files.push(row)
      }else if(row.type_file === 'tech_passport_files'){
        this.tech_passport_files.push(row)
      }
    }
  }
  async close(){
    await this.modalController.dismiss({
      accepted: true,
    })
  }
  returnNameTypeTransport(type:number){
    const index = this.authService.typetruck.findIndex(e => +e.id === +type)
    if (index>=0){
      return this.authService.typetruck[index].name
    }else {
      return 'Не выбрано'
    }
  }
  returnMaxWeightTransport(type:number){
    const index = this.authService.typetruck.findIndex(e => +e.id === +type)
    if (index>=0){
      return this.authService.typetruck[index].weight
    }else {
      return 0
    }
  }
  async selectTypeTransport(){
    const alert = await this.alertController.create({
      header: 'Выберите тип транспорта',
      cssClass: 'customAlert',
      inputs: this.typetransport,
      buttons: [
        {
          text: 'Отмена',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Выбрать',
          handler: async (data) => {
            this.type = data;
            this.maxweight = this.returnMaxWeightTransport(data)
          }
        }
      ],
    });
    await alert.present();
  }
  async saveTransport(){
    this.loadingAddTransport = true;
    await this.authService.editTransport(this.name,this.description,this.maxweight,this.type,this.adr,this.item.id,this.car_photos,this.license_files,this.tech_passport_files,this.cubature,this.state_number).toPromise()
        .then(async (res:any) => {
          if (res.status){
            this.loadingAddTransport = false;
            this.authService.mytruck = await this.authService.getTruck().toPromise();
            await this.close()
            await this.authService.alert('Отлично','Транспорт успешно изменен')
          }else {
            this.loadingAddTransport = false;
            await this.authService.alert('Ошибка',res.error)
          }
        })
        .catch(async (err:any) => {
          this.loadingAddTransport = false;
          console.log(err)
        });
    // }
  }
  async uploadImage(type){
    const result = await FilePicker.pickImages({ readData: true });
    const file: any = result.files[0].data;
    const fileName = new Date().getTime() + '.jpeg';
    await this.authService.uploadFile(fileName, file, 'car-docks').then((res) => {
      if (res) {
        if (type == 'tech_passport_files') {
          this.tech_passport_files.push(res.file);
        }
        if (type == 'license_files') {
          this.license_files.push(res.file);
        }
        if (type == 'car_photos') {
          this.car_photos.push(res.file);
        }
      }
    });
  }
  async addFilesTechPassport(){
    this.loading = await this.loadingCtrl.create({
      message: 'Отгружаем фото',
      cssClass: 'custom-loading'
    });
  }
  async delFileTechTransport(file:string){
    const alert = await this.alertController.create({
      header: 'Удаление фото',
      message: 'Вы уверены что хотите удалить изображение.',
      cssClass: 'customAlert',
      buttons: [
        {
          text: 'Отмена',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Удалить',
          role:'destructive',
          handler: async (data) => {
            const index = this.tech_passport_files.findIndex(e => e.preview === file)
            if (index>=0){
              this.tech_passport_files.splice(index,1)
            }
          }
        }
      ],
    });
    await alert.present();
  }
  async addFilesLicense(){
    this.loading = await this.loadingCtrl.create({
      message: 'Отгружаем фото',
      cssClass: 'custom-loading'
    });
  }
  async delFileLicense(file){
    const alert = await this.alertController.create({
      header: 'Удаление фото',
      message: 'Вы уверены что хотите удалить изображение.',
      cssClass: 'customAlert',
      buttons: [
        {
          text: 'Отмена',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Удалить',
          role:'destructive',
          handler: async (data) => {
            const index = this.license_files.findIndex(e => e.preview === file)
            if (index>=0){
              this.license_files.splice(index,1)
            }
          }
        }
      ],
    });
    await alert.present();
  }
  async addFilesCarPhoto(){
    this.loading = await this.loadingCtrl.create({
      message: 'Отгружаем фото',
      cssClass: 'custom-loading'
    });
    // await this.authService.camera.getPicture(this.authService.optionsCamera).then(async (imageData:any) => {
    //   this.loading.present()
    //   const fileTransfer: FileTransferObject = await this.authService.transfer.create();
    //   const headers = {'Authorization': 'Bearer ' + AuthenticationService.jwt};
    //   const uploadOpts: FileUploadOptions = {
    //     headers: headers,
    //     fileKey: 'file',
    //     mimeType: "image/*",
    //     chunkedMode: false,
    //     fileName: imageData.substr(imageData.lastIndexOf('/') + 1)
    //   };
    //   uploadOpts.params = {typeUser:'driver',typeImage:'car-docks'};
    //   const res = JSON.parse((await fileTransfer.upload(imageData, this.authService.API_URL + '/users/uploadImage', uploadOpts)).response)
    //   if (res.status){
    //     this.car_photos.push(res.file)
    //     this.loading.dismiss();
    //   }
    // })
  }
  async delFileCarPhoto(file){
    const alert = await this.alertController.create({
      header: 'Удаление фото',
      message: 'Вы уверены что хотите удалить изображение.',
      cssClass: 'customAlert',
      buttons: [
        {
          text: 'Отмена',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {

          }
        }, {
          text: 'Удалить',
          role:'destructive',
          handler: async (data) => {
            const index = this.car_photos.findIndex(e => e.preview === file)
            if (index>=0){
              this.car_photos.splice(index,1)
            }
          }
        }
      ],
    });
    await alert.present();
  }
  async setAdrUser(ev: any) {
    this.adr = ev.target.checked
  }
}
