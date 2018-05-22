

import { HeaderColor } from '@ionic-native/header-color';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { AngularFireStorageModule } from 'angularfire2/storage';
import * as firebase from 'firebase';






import { FileChooser } from '@ionic-native/file-chooser';
import { auth } from 'firebase/app';


var firebaseConfig = {
  apiKey: "AIzaSyBR3NW_YHhen6SAYvvIr2mSrxHbT5T9zI0",
  authDomain: "zirra-ad665.firebaseapp.com",
  databaseURL: "https://zirra-ad665.firebaseio.com",
  projectId: "zirra-ad665",
  storageBucket: "zirra-ad665.appspot.com",
  messagingSenderId: "327604129138"
};

@NgModule({
  declarations: [
    MyApp,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  AngularFireModule.initializeApp(firebaseConfig)





  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileChooser,
    FirebaseProvider,
    MediaCapture








  ]
})
export class AppModule {}
