import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sleep-category',
  templateUrl: './sleep-category.component.html',
  styleUrls: ['./sleep-category.component.scss']
})
export class SleepCategoryComponent {
  @Input() title!:string;
  @Input() icon!:string;
  @Input() hours!:number;
  @Input() minutes!:number;
  @Input() ideal!:string;
  @Input() description!:string;
}
