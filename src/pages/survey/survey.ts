import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ContactusPage } from '../contactus/contactus';
import { HomePage } from '../home/home';
/**
 * Generated class for the SurveyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
})
export class SurveyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyPage');
  }


  openContactUsPage() {
    this.navCtrl.setRoot(ContactusPage);
  }

  openHomePage() {
    this.navCtrl.setRoot(HomePage);
  }
}
