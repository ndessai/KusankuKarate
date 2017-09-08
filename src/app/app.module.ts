import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactusPage } from '../pages/contactus/contactus';
import { DoctrinePage } from '../pages/doctrine/doctrine';
import { ProgramsPage } from '../pages/programs/programs';
import { RequirementsPage } from '../pages/requirements/requirements';
import { SchoolPage } from '../pages/school/school';
import { SurveyPage } from '../pages/survey/survey';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactusPage,
    DoctrinePage,
    ProgramsPage,
    RequirementsPage,
    SchoolPage,
    SurveyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactusPage,
    DoctrinePage,
    ProgramsPage,
    RequirementsPage,
    SchoolPage,
    SurveyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
