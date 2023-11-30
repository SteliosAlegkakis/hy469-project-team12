import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-icons',
  templateUrl: './info-icons.component.html',
  styleUrls: ['./info-icons.component.scss']
})
export class InfoIconsComponent {
  @Input() label_1!: String;
  @Input() label_2!: String;
  @Input() label_3!: String;
  @Input() value_1!: String;
  @Input() value_2!: String;
  @Input() value_3!: String;
}
