import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent {
  @Input() calories!: Number;
  @Input() type!: string;
  @Input() ingredients!: string;
  @Input() completed!: boolean;
}
