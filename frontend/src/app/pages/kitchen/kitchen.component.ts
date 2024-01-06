import { Component } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent {
  calories:number = 0;
  protein:number = 0;
  carbs:number = 0;
  fat:number = 0;
}
