import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContactusPage } from '../contactus/contactus';
import { HomePage } from '../home/home';
/**
 * Generated class for the RequirementsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requirements',
  templateUrl: 'requirements.html',
})
export class RequirementsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequirementsPage');
  }


  openContactUsPage() {
    this.navCtrl.setRoot(ContactusPage);
  }

  openHomePage() {
    this.navCtrl.setRoot(HomePage);
  }
}
