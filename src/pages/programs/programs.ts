import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactusPage } from '../contactus/contactus';
import { HomePage } from '../home/home';

/**
 * Generated class for the ProgramsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-programs',
  templateUrl: 'programs.html',
})
export class ProgramsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProgramsPage');
  }


  openContactUsPage() {
    this.navCtrl.setRoot(ContactusPage);
  }

  openHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

}
