import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutritionComponent } from '../../nutrition/nutrition.component';
import { WeightComponent } from '../../weight/weight.component';
import { SleepComponent } from '../../sleep/sleep.component';
import { ActivityComponent } from '../../activity/activity.component';
import { MobileComponent } from '../../mobile/mobile.component';

// const routes: Routes = [
//     {path : 'nutrition' , component: NutritionComponent},
//     {path : 'weight', component:WeightComponent},
//     {path : 'sleep', component:SleepComponent},
//     {path : 'activity', component:ActivityComponent}
// ];

const routes: Routes = [
    {
      path: '',
      component: MobileComponent,
      children: [
        { path: 'activity', component: ActivityComponent },
        { path: 'sleep', component: SleepComponent},
        { path: 'weight', component: WeightComponent},
        { path: 'nutrition', component: NutritionComponent},
        { path: '**', redirectTo: 'nutrition', pathMatch: 'full' },]
    },
  
  
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class NavBarRoutingModule { }