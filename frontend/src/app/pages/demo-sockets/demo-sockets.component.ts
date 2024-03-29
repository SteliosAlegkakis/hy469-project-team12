import { Component } from '@angular/core';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';

@Component({
  selector: 'app-demo-sockets',
  templateUrl: './demo-sockets.component.html',
  styleUrls: ['./demo-sockets.component.scss']
})
export class DemoSocketsComponent {

  constructor(private sockets: SocketsService) {}

  add_steps() {
    this.sockets.publish("add_steps", {num: 3000});
  }

  update_weight() {
    this.sockets.publish("update_weight", {weight_lost: 0.5});
  }
}
