import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter(){
      $('p').text('Hello jQuery!');

      setTimeout(()=>{
          const $svg = $('svg').drawsvg();
          $svg.drawsvg('animate');
      },100);
  }
}

