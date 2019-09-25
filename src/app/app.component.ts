import { Component } from '@angular/core';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {Platform} from '@ionic/angular';
import {Toast} from '@ionic-native/toast/ngx';
import { NavController } from '@ionic/angular';
import {Router} from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { $ } from 'protractor';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  counter = 0;
  // enableBackDrop: boolean = true;
  showBackdrop: boolean = false;
  //shouldPropagate: boolean = true;


  constructor(
    public platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private toast:Toast,
    private navCtrl:NavController,
    private router: Router,
    private network: Network,
  ) {
    this.initializeApp();
    
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#000000');
      this.splashScreen.hide();
     
      this.platform.backButton.subscribe(()=>{
        if(this.router.url === '/menu/home')
        {
          if(this.counter===0)
          {
            this.counter++;
              this.toast.show(`Press Back again to Exit`,'3000','bottom').subscribe();
              setTimeout(()=>{
                this.counter=0;
              },5000)
          }else{
            navigator['app'].exitApp();
          }
        }
      })
    });
  }

  
}
