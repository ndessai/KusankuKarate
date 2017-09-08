import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctrinePage } from './doctrine';

@NgModule({
  declarations: [
    DoctrinePage,
  ],
  imports: [
    IonicPageModule.forChild(DoctrinePage),
  ],
})
export class DoctrinePageModule {}
