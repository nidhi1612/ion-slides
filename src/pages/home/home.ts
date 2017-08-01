import {Component, Provider} from '@angular/core';
import { AudioProvider } from 'ionic-audio';


import { ViewChild } from '@angular/core';
import { Slides, Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
@Component({
  templateUrl: 'home.html'
})
export class HomePage {
 
 

  @ViewChild(Slides) slider: Slides;
   @ViewChild(Slides) slide2: Slides;
width = document.documentElement.clientWidth;
  constructor(private _audioProvider: AudioProvider,public platform:Platform) {
    const $resizeEvent = Observable.fromEvent(window, 'resize')
      .map(() => {
        return document.documentElement.clientWidth;
        })
      .debounceTime(200)

      $resizeEvent.subscribe(data => {
        this.width = data;
         if(this.platform.width() >= 320 && this.platform.width() <= 359){
            this.slider.slidesPerView = 2;
            this.slider.spaceBetween = 10;
            this.slider.resize();
        }
        else if(this.platform.width() >= 360 && this.platform.width() <= 479){
            this.slider.slidesPerView = 2;
            this.slider.spaceBetween = 20;
            this.slider.resize();
        }
        else if(this.platform.width() >= 480 && this.platform.width() <= 639){
            this.slider.slidesPerView = 2;
            this.slider.spaceBetween = 10;
            this.slider.resize();
        }
        else if(this.platform.width() >= 640 && this.platform.width() <=767){
          this.slider.slidesPerView = 2;
          this.slider.spaceBetween = 60;
          this.slider.resize();
       }
       else if(this.platform.width() >= 768 && this.platform.width() <= 1920)
        {
          this.slider.slidesPerView = 3;
          this.slider.spaceBetween = 20;
          this.slider.resize();
        }
        //alert(this.width);
      });
  }

ionViewDidLoad(){
   this.platform.ready().then((readySource) => {
      this.width=  this.platform.width();
      
        if(this.platform.width() >= 320 && this.platform.width() <= 359){
            this.slider.slidesPerView = 2;
            this.slider.spaceBetween = 10;
            this.slider.resize();
        }
        else if(this.platform.width() >= 360 && this.platform.width() <= 479){
            this.slider.slidesPerView = 2;
            this.slider.spaceBetween = 20;
            this.slider.resize();
        }
        else if(this.platform.width() >= 480 && this.platform.width() <= 639){
            this.slider.slidesPerView = 2;
            this.slider.spaceBetween = 10;
            this.slider.resize();
        }
        else if(this.platform.width() >= 640 && this.platform.width() <=767){
          this.slider.slidesPerView = 2;
          this.slider.spaceBetween = 60;
          this.slider.resize();
       }
       else if(this.platform.width() >= 768 && this.platform.width() <= 1920)
        {
          this.slider.slidesPerView = 3;
          this.slide2.slidesPerView = 2;
          this.slider.spaceBetween = 20;
          this.slider.resize();
        }
      
    });
  }
  


  }

 

  