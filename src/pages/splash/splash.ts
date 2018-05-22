import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {


  constructor(public viewCtrl: ViewController,public splashScreen: SplashScreen, private navCtrl: NavController,) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

  ionViewDidEnter() {

    this.splashScreen.hide();

    setTimeout(() => {
      this.viewCtrl.dismiss();

    }, 4000);



  }

}

