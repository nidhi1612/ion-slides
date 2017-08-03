import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Platform } from 'ionic-angular';
import { Observable } from "rxjs/Observable";

/**
 * Generated class for the Slider2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-slider2',
  templateUrl: 'slider2.html',
})
export class Slider2Page {
@ViewChild(Slides) slider: Slides;
width = document.documentElement.clientWidth;
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform:Platform) {
    this.platform.ready().then((readySource) => {
      this.width=  this.platform.width();
      this.setSlider(this.width);
    });
    
    const $resizeEvent = Observable.fromEvent(window, 'resize')
      .map(() => {
        return document.documentElement.clientWidth;
        })
      .debounceTime(200);
    $resizeEvent.subscribe(data => {
        this.width = data;
        this.setSlider(this.width);
        
      });
  }

setSlider(width){
   
        if(width >= 320 && width <= 359){
            this.slider.slidesPerView = 2;
            this.slider.spaceBetween = 10;
            this.slider.resize();
        }
        else if(width >= 360 && width <= 479){
            this.slider.slidesPerView = 2;
            this.slider.spaceBetween = 20;
            this.slider.resize();
        }
        else if(width >= 480 && width <= 639){
            this.slider.slidesPerView = 2;
            this.slider.spaceBetween = 10;
            this.slider.resize();
        }
        else if(width >= 640 && width <=767){
          this.slider.slidesPerView = 3;
          this.slider.spaceBetween = 60;
          this.slider.resize();
       }
       else if(width >= 768 && width <= 1920)
        {
          this.slider.slidesPerView = 3;
          this.slider.spaceBetween = 20;
          this.slider.resize();
        }
  }


}
