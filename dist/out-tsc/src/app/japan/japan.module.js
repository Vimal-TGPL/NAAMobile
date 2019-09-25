import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { JapanPage } from './japan.page';
var routes = [
    {
        path: '',
        component: JapanPage
    }
];
var JapanPageModule = /** @class */ (function () {
    function JapanPageModule() {
    }
    JapanPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [JapanPage]
        })
    ], JapanPageModule);
    return JapanPageModule;
}());
export { JapanPageModule };
//# sourceMappingURL=japan.module.js.map