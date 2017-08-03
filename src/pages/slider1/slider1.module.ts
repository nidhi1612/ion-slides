import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Slider1Page } from './slider1';
import { Slider2PageModule } from "../slider2/slider2.module";

@NgModule({
  declarations: [
    Slider1Page,
  ],
  imports: [
    IonicPageModule.forChild(Slider1Page),
    Slider2PageModule

  ],
  exports: [
    Slider1Page
  ]
})
export class Slider1PageModule {}
