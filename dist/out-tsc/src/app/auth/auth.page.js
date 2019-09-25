import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
var AuthPage = /** @class */ (function () {
    function AuthPage(menuctrl, alertctrl, router) {
        this.menuctrl = menuctrl;
        this.alertctrl = alertctrl;
        this.router = router;
        this.passwordType = 'password';
        this.passwordShown = false;
        this.passwordName = 'eye-off';
        this.uname = "";
        this.pass = "";
    }
    AuthPage.prototype.togglePassword = function () {
        if (this.passwordShown) {
            this.passwordShown = false;
            this.passwordType = 'password';
            this.passwordName = 'eye-off';
        }
        else {
            this.passwordShown = true;
            this.passwordType = 'text';
            this.passwordName = 'eye';
        }
    };
    AuthPage.prototype.login = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert_1, alert_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.uname === "admin" && this.pass === "admin")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertctrl.create({
                                header: 'Message',
                                message: 'Login Sucess',
                                buttons: ['OK']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        this.router.navigateByUrl('/landing');
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.alertctrl.create({
                            header: 'Message',
                            message: 'UserName or Password is incorrect',
                            buttons: ['OK']
                        })];
                    case 4:
                        alert_2 = _a.sent();
                        return [4 /*yield*/, alert_2.present()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AuthPage = tslib_1.__decorate([
        Component({
            selector: 'app-auth',
            templateUrl: './auth.page.html',
            styleUrls: ['./auth.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [MenuController, AlertController, Router])
    ], AuthPage);
    return AuthPage;
}());
export { AuthPage };
//# sourceMappingURL=auth.page.js.map