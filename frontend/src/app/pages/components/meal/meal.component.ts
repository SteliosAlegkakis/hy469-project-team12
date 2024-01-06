import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output() completed_pressed: EventEmitter<string> = new EventEmitter<string>();

  is_pop_up_open:boolean = false;

  markMealAsCompleted() { this.completed_pressed.emit(this.type); }
}
