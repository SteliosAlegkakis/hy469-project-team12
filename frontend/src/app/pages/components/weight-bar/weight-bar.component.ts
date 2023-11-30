import { Component } from '@angular/core';

@Component({
  selector: 'app-weight-bar',
  templateUrl: './weight-bar.component.html',
  styleUrls: ['./weight-bar.component.scss'],
})
export class WeightBarComponent {
  pointerPosition: number = 40;
  bmi: number = 23.5;
}
