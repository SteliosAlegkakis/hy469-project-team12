import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-info',
  templateUrl: './secondary-info.component.html',
  styleUrls: ['./secondary-info.component.scss']
})
export class SecondaryInfoComponent{

  @Input() label_1!: String;
  @Input() value_1!: String;
  @Input() label_2!: String;
  @Input() value_2!: String;
}
