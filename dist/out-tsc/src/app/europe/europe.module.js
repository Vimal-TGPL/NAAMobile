import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EuropePage } from './europe.page';
var routes = [
    {
        path: '',
        component: EuropePage
    }
];
var EuropePageModule = /** @class */ (function () {
    function EuropePageModule() {
    }
    EuropePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EuropePage]
        })
    ], EuropePageModule);
    return EuropePageModule;
}());
export { EuropePageModule };
//# sourceMappingURL=europe.module.js.map