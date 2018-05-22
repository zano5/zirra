import { CaptureImageOptions } from '@ionic-native/media-capture';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController, AlertController, NavController, MenuController, PopoverController,Popover } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import { HeaderColor } from '@ionic-native/header-color';
import { RACISM_LIST } from '../mocks/Racism.mock';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  @ViewChild(Popover) popover: Popover;

  rootPage: string= 'HomePage';
  person;
  racism="";
  CValue

  racismList = RACISM_LIST;

  pages: Array<{title: string, icon:string,component : any}>;
  options = "Types Of Racism";


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, modalCtrl: ModalController, private alertCtrl: AlertController, private menu: MenuController, private pop:PopoverController) {

   // this.control();


    platform.ready().then(() => {




      statusBar.styleDefault()
      // this.statusBar.overlaysWebView(true);
      // statusBar.backgroundColorByHexString('#8B0000');



      let splash = modalCtrl.create('SplashPage');
      splash.present();

  });

    // used for an example of ngFor and navigation


    this.pages = [



          { title: 'About',icon: 'assets/imgs/kat1.png', component: 'AboutPage' },
          { title: 'FAQs',icon: 'assets/imgs/question.svg', component: 'FQuestionsPage'},
          { title: 'Types Of Racism',icon: 'assets/imgs/hat.svg', component: 'TypesPage'}


        ];




  }










    // if(this.racism.match("ir")){

    //   console.log("zano");
    //  this.nav.push("TypeDescriptionPage");



    // }else if(this.racism === "sr"){

    //   console.log("zano");
    //   this.nav.push("TypeDescriptionPage");

    // }else if(this.racism === "Cultural Racism"){

    // }else if(this.racism === "Internalized Racism"){

    // }







  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }





  // info(racism)
  // {

  //   if(racism.match("Individual Racism")){

  //     console.log("zano");
  //    this.nav.push("TypeDescriptionPage");



  //   }else if(racism === "Systemic Racial Discrimination"){

  //   }else if(racism === "Cultural Racism"){

  //   }else if(racism === "Internalized Racism"){

  //   }



//   onChange(CValue) {


//  if(CValue.match("Individual Racism")){


//       this.nav.push("TypeDescriptionPage",{racism: CValue});
//       this.menu.close();

//     }else if(CValue.match("Systemic Racial Discrimination")){

//       this.nav.push("TypeDescriptionPage",{racism: CValue});
//       this.menu.close();

//     }else if(CValue.match("Cultural Racism")){

//       this.nav.push("TypeDescriptionPage",{racism: CValue});
//       this.menu.close();

//     }else if(CValue.match("Internalized Racism")){

//       this.nav.push("TypeDescriptionPage",{racism: CValue});
//       this.menu.close();
//     }
// }



// presentPopover(myEvent) {
//   let popover = this.pop.create("TypePopoverPage");
//   popover.present({
//     ev: myEvent
//   });
// }


// control()
// {
//   if(this.options == "Menu"){

//     this.options="Types Of Racism";
//     this.pages = [



//       { title: 'Individual Racism',icon: 'assets/imgs/individual.svg', component: 'IndividualPage' },
//       { title: 'Systemic Racial Discrimination',icon: 'assets/imgs/system.svg', component: 'SystemPage'},
//       { title: 'Cultural Racism',icon: 'assets/imgs/cutural.svg', component: 'CulturalPage'},
//       { title: 'Internalized Racism',icon: 'assets/imgs/internalized.svg', component: 'InternalizedPage'}


//     ];



// }else if(this.options == "Types Of Racism"){


//     this.options="Menu";

//   this.pages = [



//     { title: 'About',icon: 'assets/imgs/kat1.png', component: 'AboutPage' },
//     { title: 'FAQs',icon: 'assets/imgs/question.svg', component: 'FQuestionsPage'},
//     { title: 'Types Of Racism',icon: 'assets/imgs/question.svg', component: 'TypesPage'}


//   ];


// }



//   }
}
