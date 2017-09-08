import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContactusPage } from '../contactus/contactus';
import { HomePage } from '../home/home';

/**
 * Generated class for the DoctrinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctrine',
  templateUrl: 'doctrine.html',
})
export class DoctrinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctrinePage');
  }


  openContactUsPage() {
    this.navCtrl.setRoot(ContactusPage);
  }

  openHomePage() {
    this.navCtrl.setRoot(HomePage);
  }
}
