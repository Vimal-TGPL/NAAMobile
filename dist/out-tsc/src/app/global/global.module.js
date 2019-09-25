import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GlobalPage } from './global.page';
var routes = [
    {
        path: '',
        component: GlobalPage
    }
];
var GlobalPageModule = /** @class */ (function () {
    function GlobalPageModule() {
    }
    GlobalPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [GlobalPage]
        })
    ], GlobalPageModule);
    return GlobalPageModule;
}());
export { GlobalPageModule };
//# sourceMappingURL=global.module.js.map