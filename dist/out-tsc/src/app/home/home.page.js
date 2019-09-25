import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { Router } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
var HomePage = /** @class */ (function () {
    function HomePage(menuctrl, network, iab, toast, router, navCtrl, screenorientation) {
        var _this = this;
        this.menuctrl = menuctrl;
        this.network = network;
        this.iab = iab;
        this.toast = toast;
        this.router = router;
        this.navCtrl = navCtrl;
        this.screenorientation = screenorientation;
        this.splash = true;
        this.rootPage = HomePage_1;
        this.counter = 0;
        this.url = 'https://demo-alpha2.newagealpha.com/home';
        //url = 'https://demo.newagealpha.com/home';
        //url = 'https://api.newagealpha.com/index.html';
        this.target = '_blank';
        this.connected = this.network.onDisconnect().subscribe(function () {
            _this.toast.show("Oops! You're Offline", '3000', 'bottom').subscribe();
        });
        this.disconnected = this.network.onConnect().subscribe(function () {
            setTimeout(function () {
                _this.toast.show("Yaay! you're Online", '3000', 'bottom').subscribe();
            }, 2000);
        });
    }
    HomePage_1 = HomePage;
    HomePage.prototype.openUrl = function () {
        var _this = this;
        var networkstate = this.network.type;
        console.log(networkstate);
        if (networkstate !== this.network.Connection.NONE) {
            this.screenorientation.lock(this.screenorientation.ORIENTATIONS.LANDSCAPE);
            var browser = this.iab.create(this.url, this.target, { toolbarcolor: "#ffffff", toolbarposition: 'bottom', toolbar: 'yes', location: 'no', zoom: 'no', hideurlbar: 'yes', hardwareback: 'yes', closebuttoncaption: 'Back', closebuttoncolor: '#2b468f', disallowoverscroll: 'yes' });
            browser.on('loadstop').subscribe(function (event) {
                //browser.insertCSS({code: ".navbar-expand-sm .navbar-toggler {display: none;}"});
                //  browser.executeScript({
                //     code: ""
                //  });
            });
            browser.on('exit').subscribe(function (event) {
                _this.screenorientation.unlock();
            });
        }
        else {
            this.toast.show("Network Error", '10000', 'bottom').subscribe();
        }
    };
    HomePage.prototype.auth_nav = function () {
        // console.log("from home");
        this.router.navigateByUrl('/auth');
    };
    HomePage.prototype.enroll_nav = function () {
        this.router.navigateByUrl('/enroll');
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.connected.unsubscribe();
        this.disconnected.unsubscribe();
    };
    var HomePage_1;
    HomePage = HomePage_1 = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [MenuController, Network, InAppBrowser, Toast, Router, NavController, ScreenOrientation])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map