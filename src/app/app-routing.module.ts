import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule'},
  { path: 'enroll', loadChildren: './enroll/enroll.module#EnrollPageModule'},
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule'},
  { path: 'performance', loadChildren: './performance/performance.module#PerformancePageModule' },
  { path: 'scores', loadChildren: './scores/scores.module#ScoresPageModule' },
  { path: 'modal/:comval/:indexval', loadChildren: './modal/modal.module#ModalPageModule'},  { path: 'test', loadChildren: './test/test.module#TestPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }