import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NavController} from "@ionic/angular";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private translateService: TranslateService
    ) { }

  ngOnInit() {}
  back(){
    this.navCtrl.back();
  }
  async goToRegistration(){
    await this.router.navigate(['registration'], {replaceUrl: true});
  }
  async goToAuthorization(){
    await this.router.navigate(['login'], {replaceUrl: true});
  }
}
