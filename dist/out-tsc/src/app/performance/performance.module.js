import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PerformancePage } from './performance.page';
var routes = [
    {
        path: '',
        component: PerformancePage,
        children: [
            { path: 'global', loadChildren: '../global/global.module#GlobalPageModule' },
            { path: 'usa', loadChildren: '../usa/usa.module#USAPageModule' },
            { path: 'japan', loadChildren: '../japan/japan.module#JapanPageModule' },
            { path: 'europe', loadChildren: '../europe/europe.module#EuropePageModule' },
        ]
    },
    {
        path: '',
        redirectTo: '/performance/global',
    }
];
var PerformancePageModule = /** @class */ (function () {
    function PerformancePageModule() {
    }
    PerformancePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PerformancePage]
        })
    ], PerformancePageModule);
    return PerformancePageModule;
}());
export { PerformancePageModule };
//# sourceMappingURL=performance.module.js.map