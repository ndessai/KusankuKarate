import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ContactusPage } from '../contactus/contactus';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTabRoot = HomePage;
  contactUsTabRoot = ContactusPage;

  constructor() {

  }
}
