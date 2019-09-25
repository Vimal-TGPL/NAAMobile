import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EnrollPage } from './enroll.page';
var routes = [
    {
        path: '',
        component: EnrollPage
    }
];
var EnrollPageModule = /** @class */ (function () {
    function EnrollPageModule() {
    }
    EnrollPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EnrollPage]
        })
    ], EnrollPageModule);
    return EnrollPageModule;
}());
export { EnrollPageModule };
//# sourceMappingURL=enroll.module.js.map