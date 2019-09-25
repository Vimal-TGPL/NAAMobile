import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { USAPage } from './usa.page';
var routes = [
    {
        path: '',
        component: USAPage
    }
];
var USAPageModule = /** @class */ (function () {
    function USAPageModule() {
    }
    USAPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [USAPage]
        })
    ], USAPageModule);
    return USAPageModule;
}());
export { USAPageModule };
//# sourceMappingURL=usa.module.js.map