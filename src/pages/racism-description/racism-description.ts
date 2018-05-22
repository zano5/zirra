import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Racism } from '../../modals/racism.modal';

/**
 * Generated class for the RacismDescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-racism-description',
  templateUrl: 'racism-description.html',
})
export class RacismDescriptionPage {

  racism : Racism;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.racism = this.navParams.get('rac');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RacismDescriptionPage');
  }

}
