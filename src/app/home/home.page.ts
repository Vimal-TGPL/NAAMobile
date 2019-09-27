import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { Router } from '@angular/router'
import { NavController, MenuController} from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  splash = true;
  rootPage: any = HomePage;
  public counter = 0;
  url='https://demo-alpha2.newagealpha.com/';
  //url = 'https://demo.newagealpha.com/home';
  //url = 'https://api.newagealpha.com/index.html';
  target = '_self';
  connected : Subscription;
  disconnected : Subscription;


  constructor(private menuctrl:MenuController, private network: Network, private iab: InAppBrowser, private toast: Toast, private router: Router, private navCtrl: NavController, private screenorientation: ScreenOrientation) {
    this.connected = this.network.onDisconnect().subscribe(() => {
      this.toast.show(`Oops! You're Offline`, '3000', 'bottom').subscribe();
    });

    this.disconnected = this.network.onConnect().subscribe(() => {
      setTimeout(() => {
        this.toast.show(`Yaay! you're Online`, '3000', 'bottom').subscribe();
      }, 2000);
    });
  }

  openUrl() {
    var networkstate = this.network.type;
    console.log(networkstate);
    if (networkstate !== this.network.Connection.NONE) {
      this.screenorientation.lock(this.screenorientation.ORIENTATIONS.LANDSCAPE);
     const browser= this.iab.create(this.url, this.target, { toolbarcolor:"#ffffff",toolbarposition: 'bottom', toolbar: 'yes', location: 'no', zoom: 'no', hideurlbar: 'yes', hardwareback: 'yes',closebuttoncaption: 'Back', closebuttoncolor:'#2b468f', disallowoverscroll: 'yes' });
    //  browser.on('loadstop').subscribe(event =>{
    //    //browser.insertCSS({code: ".navbar-expand-sm .navbar-toggler {display: none;}"});
    //   //  browser.executeScript({
    //   //     code: ""
    //   //  });
      
    //  });
     browser.on('exit').subscribe(event =>{
      this.screenorientation.unlock();
     })
    }
    else {
      this.toast.show(`Network Error`, '10000', 'bottom').subscribe();
    }
  }

  auth_nav() {
   // console.log("from home");
    this.router.navigateByUrl('/auth');

  }

  enroll_nav() {
    this.router.navigateByUrl('/enroll');
  }

  ionViewWillLeave(){
    this.connected.unsubscribe();
    this.disconnected.unsubscribe();
  }
}