import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactusPage } from '../contactus/contactus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides: Array<{src: string}>;

  constructor(public navCtrl: NavController) {
    this.slides = [];
    for(var i = 1; i<=11; i++){
      this.slides.push({src:'../../assets/Img' + i + '.jpg'});
    }
  }

  openContactUsPage() {
    this.navCtrl.setRoot(ContactusPage);
  }

  openHomePage() {
  }

}
