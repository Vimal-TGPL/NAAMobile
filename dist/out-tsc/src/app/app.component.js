import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
var AppComponent = /** @class */ (function () {
    //shouldPropagate: boolean = true;
    function AppComponent(platform, splashScreen, statusBar, toast, navCtrl, router, network) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.router = router;
        this.network = network;
        this.counter = 0;
        // enableBackDrop: boolean = true;
        this.showBackdrop = false;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.backgroundColorByHexString('#000000');
            _this.splashScreen.hide();
            _this.platform.backButton.subscribe(function () {
                if (_this.router.url === '/menu/home') {
                    if (_this.counter === 0) {
                        _this.counter++;
                        _this.toast.show("Press Back again to Exit", '3000', 'bottom').subscribe();
                        setTimeout(function () {
                            _this.counter = 0;
                        }, 5000);
                    }
                    else {
                        navigator['app'].exitApp();
                    }
                }
            });
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            Toast,
            NavController,
            Router,
            Network])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map