import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerformancePage } from './performance.page';


const routes: Routes = [
  {
    path: '',
    component: PerformancePage,
    children: [
      { path: 'global', loadChildren: '../global/global.module#GlobalPageModule' },
      { path: 'usa', loadChildren: '../usa/usa.module#USAPageModule' },
      { path: 'japan', loadChildren: '../japan/japan.module#JapanPageModule' },
      { path: 'europe', loadChildren: '../europe/europe.module#EuropePageModule' },
      { path: 'all', loadChildren: '../all/all.module#AllPageModule' },
      { path: 'uk', loadChildren: '../uk/uk.module#UkPageModule' }
    ]
  },
  {
    path:'',
    redirectTo : '/performance/all',
    
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerformancePage]
})
export class PerformancePageModule { }
