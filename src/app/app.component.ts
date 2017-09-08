import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ContactusPage } from '../pages/contactus/contactus';
import { DoctrinePage } from '../pages/doctrine/doctrine';
import { ProgramsPage } from '../pages/programs/programs';
import { RequirementsPage } from '../pages/requirements/requirements';
import { SchoolPage } from '../pages/school/school';
import { SurveyPage } from '../pages/survey/survey';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = TabsPage;
  
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Programs', component: ProgramsPage },
      { title: 'Doctrine', component: DoctrinePage },
      { title: 'School', component: SchoolPage },
      { title: 'Requirements', component: RequirementsPage },
      { title: 'Survey', component: SurveyPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
