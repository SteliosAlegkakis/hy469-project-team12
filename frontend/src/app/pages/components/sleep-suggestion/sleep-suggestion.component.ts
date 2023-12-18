import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sleep-suggestion',
  templateUrl: './sleep-suggestion.component.html',
  styleUrls: ['./sleep-suggestion.component.scss']
})
export class SleepSuggestionComponent {
  @Input() img!:string;
  @Input() title!:string;
  @Input() text!:string;
  @Input() index!: number;
}
