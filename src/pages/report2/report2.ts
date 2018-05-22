import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FileChooser } from '@ionic-native/file-chooser';
import { Report } from '../../modals/report.modals';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';


/**
 * Generated class for the Report2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-report2',
  templateUrl: 'report2.html',
})
export class Report2Page {

  person;

  myDate: String = new Date().toISOString();
  input
  @ViewChild('myInput') myInputRef :ElementRef

   stringUri:string;
  report: FormGroup;
  placeName:string;
  rep: Report;
  type="";
  title="";
  stringPic="";
  stringAudio="";
  stringVideo="";


    constructor(public navCtrl: NavController, public navParams: NavParams,private fileChooser: FileChooser, private fb:FormBuilder, private media: MediaCapture,private alertCtrl: AlertController) {

    this.type = this.navParams.get('type');
      this.person = this.navParams.get('person');
      console.log('person',this.person);

      console.log('Report 2',this.type);


      if(this.type === "me"){

        this.title = " Your Information"

      }else if(this.type === "someone")
      {

        this.title = "Victim Details"

      }



      this.report = this.fb.group({


        description:['',[Validators.required]],
          location:['',[Validators.required]],
          province:['',[Validators.required]],
          file:this.stringUri,
          date:['', [Validators.required]]

      });

    }

    ionViewWillEnter() {
      // Google Places API auto complete
      this.input = document.getElementById('googlePlaces').getElementsByTagName('input')[0];
      let autocomplete = new google.maps.places.Autocomplete(this.input, {types: ['geocode']});



      // google.maps.event.addListener(autocomplete, 'place_changed', (res) => {
      //   // retrieve the place object for your use
      //   console.log(res);
      //   let place = autocomplete.getPlace();
      //
      //
      //
      //   // console.log("place Name",place.getName())
      //
      //
      //
      // });
   }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Report2Page');
  }



  onFile(){
    this.fileChooser.open()
  .then(uri => this.stringUri = uri)
   .catch(e => console.log(e));
  }

  formSubmit({value,valid}:{value:Report,valid:boolean}){


    //value.location = this.myInput;

   console.log(this.input.value);

    // value.audioFile = this.stringAudio;
    // value.imageFile = this.stringPic;
    // value.videoFile = this.stringVideo;

    console.log(this.input.value);

    value.location = this.input.value;
      this.navCtrl.push('Report1Page',{person:this.person,value: value,type:this.type,audio:this.stringAudio, video: this.stringVideo, file:this.stringUri});




             //  let  storageRef= firebase.storage().ref('contents/' + this.stringUri);



               //  this.repo.file =   storageRef.getDownloadURL.toString();
   //
   //                console.log("Report Objects",this.repo);
   //
                  // this.repo.person = this.person;
                  // this.fire.addReport(this.repo);
   //
   //



  }

  startRecording()
  {

    let options: CaptureImageOptions = { limit: 1 };
    this.media.captureAudio(options)
    .then(
      (data: MediaFile[]) =>  this.stringAudio = data[0].fullPath,
      (err: CaptureError) => console.error(err)
    );


  }



  takePicture()
  {

    let options: CaptureImageOptions = { limit: 1 };
    this.media.captureImage(options)
    .then(
      (data: MediaFile[]) =>  this.stringPic = data[0].fullPath,
      (err: CaptureError) => console.error(err)


    );
  }

  recordVideo(){

    let options: CaptureImageOptions = { limit: 1 };
    this.media.captureVideo(options)
    .then(
      (data: MediaFile[]) => this.stringVideo = data[0].fullPath,
      (err: CaptureError) => console.error(err)


    );
  }

}
