import { Component } from '@angular/core';

@Component({
  selector: 'app-weight-info',
  templateUrl: './weight-info.component.html',
  styleUrls: ['./weight-info.component.scss'],
})
export class WeightInfoComponent {
  weight: number = 73;
  goal: number = 70.5;
}
