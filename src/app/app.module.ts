import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {Network} from '@ionic-native/network/ngx'
import {Toast} from '@ionic-native/toast/ngx'
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx'
import { HttpClientModule } from '@angular/common/http'
import { HTTP } from '@ionic-native/http/ngx'
import { ModalPageModule } from './modal/modal.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), HttpClientModule, AppRoutingModule],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    Network,
    Toast,
    ScreenOrientation,
    HTTP,
    ModalPageModule,
    ModalController,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
