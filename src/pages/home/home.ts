import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactusPage } from '../contactus/contactus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openContactUsPage() {
    this.navCtrl.setRoot(ContactusPage);
  }

  openHomePage() {
  }

}
