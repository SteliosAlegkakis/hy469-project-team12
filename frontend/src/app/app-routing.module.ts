import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemShopComponent } from './pages/item-shop/item-shop.component';
import { NutritionComponent } from './pages/nutrition/nutrition.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { WeightComponent } from './pages/weight/weight.component';
import { SleepComponent } from './pages/sleep/sleep.component';
import { DemoSocketsComponent } from './pages/demo-sockets/demo-sockets.component';
import { BathroomComponent } from './pages/bathroom/bathroom.component';
import { KitchenComponent } from './pages/kitchen/kitchen.component';

const routes: Routes = [
  // { path: 'socket-events', loadChildren: () => import('./pages/socket-events/socket-events.module').then(m => m.SocketEventsModule) },
  { path: 'tasks', loadChildren: () => import('./pages/tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'mobile', loadChildren:()=> import('./pages/components/nav-bar/nav-bar-routing.module').then(m => m.NavBarRoutingModule)},
  { path: 'demo' ,component: DemoSocketsComponent},
  { path: 'item-shop', component: ItemShopComponent},
  { path: 'nutrition' , component: NutritionComponent},
  { path: 'activity' , component: ActivityComponent},
  { path: 'weight' , component: WeightComponent},
  { path: 'sleep' , component: SleepComponent},
  { path: 'bathroom' , component: BathroomComponent },
  { path: 'kitchen' , component: KitchenComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
