import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { ItemShopComponent } from './pages/item-shop/item-shop.component';
import { ItemPreviewComponent } from './pages/item-shop/item-preview/item-preview.component';
import { NavBarComponent } from './pages/components/nav-bar/nav-bar.component';
import { TopBarComponent } from './pages/components/top-bar/top-bar.component';
import { NutritionComponent } from './pages/nutrition/nutrition.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { SleepComponent } from './pages/sleep/sleep.component';
import { WeightComponent } from './pages/weight/weight.component';
import { MobileComponent } from './pages/mobile/mobile.component';
import { GraphComponent } from './pages/components/graph/graph.component';
import { PercentageBarComponent } from './pages/components/percentage-bar/percentage-bar.component';
import { SecondaryInfoComponent } from './pages/components/secondary-info/secondary-info.component';
import { InfoIconsComponent } from './pages/components/info-icons/info-icons.component';
import { WeightBarComponent } from './pages/components/weight-bar/weight-bar.component';
import { WeightInfoComponent } from './pages/components/weight-info/weight-info.component';
import { DemoSocketsComponent } from './pages/demo-sockets/demo-sockets.component';
import { BathroomComponent } from './pages/bathroom/bathroom.component';
import { SleepSuggestionComponent } from './pages/components/sleep-suggestion/sleep-suggestion.component';
import { SleepCategoryComponent } from './pages/components/sleep-category/sleep-category.component';
import { MealComponent } from './pages/components/meal/meal.component';
import { KitchenComponent } from './pages/kitchen/kitchen.component';

const socketIoConfig: SocketIoConfig = { url: environment.host, options: {} };
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ItemShopComponent,
    ItemPreviewComponent,
    NavBarComponent,
    TopBarComponent,
    NutritionComponent,
    ActivityComponent,
    SleepComponent,
    WeightComponent,
    MobileComponent,
    GraphComponent,
    PercentageBarComponent,
    SecondaryInfoComponent,
    InfoIconsComponent,
    WeightBarComponent,
    WeightInfoComponent,
    DemoSocketsComponent,
    BathroomComponent,
    SleepSuggestionComponent,
    SleepCategoryComponent,
    MealComponent,
    KitchenComponent
  ],
  imports: [
    SocketIoModule.forRoot(socketIoConfig),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
