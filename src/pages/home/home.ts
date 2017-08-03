import {Component} from '@angular/core';
import { AudioProvider } from 'ionic-audio';



@Component({
  templateUrl: 'home.html',
  selector:'page-home'
  
})
export class HomePage {
    constructor(private _audioProvider: AudioProvider) {
    }
  }

 

  