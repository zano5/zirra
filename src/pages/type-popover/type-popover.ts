import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RACISM_LIST } from '../../mocks/Racism.mock';

/**
 * Generated class for the TypePopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-type-popover',
  templateUrl: 'type-popover.html',
})
export class TypePopoverPage {

  RacismList= RACISM_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypePopoverPage');
  }

  onRacism(rac){

    if(rac.name.match("Individual Racism")){


      this.navCtrl.push("TypeDescriptionPage",{racism: rac});
      //this.menu.close();

    }else if(rac.name.match("Systemic Racial Discrimination")){

      this.navCtrl.push("TypeDescriptionPage",{racism: rac});
     // this.menu.close();

    }else if(rac.name.match("Cultural Racism")){

      this.navCtrl.push("TypeDescriptionPage",{racism: rac});
      //this.menu.close();

    }else if(rac.name.match("Internalized Racism")){

      this.navCtrl.push("TypeDescriptionPage",{racism: rac});
      //this.menu.close();
    }
  }

}
