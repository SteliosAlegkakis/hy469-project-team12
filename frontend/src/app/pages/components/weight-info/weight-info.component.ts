import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';

@Component({
  selector: 'app-weight-info',
  templateUrl: './weight-info.component.html',
  styleUrls: ['./weight-info.component.scss'],
})
export class WeightInfoComponent implements OnInit{
  constructor(private sockets:SocketsService) {}
  ngOnInit(): void {
    this.sockets.subscribe("update_weight",(payload:any)=>{
      console.log("test1 ",payload);
      console.log("test2 ",payload.weight_lost);
      this.lost = payload.weight_lost;
      this.weight = this.weight - payload.weight_lost;
    })
  }
  weight: number = 73;
  goal: number = 69.5;
  lost:number = 0.5;
}
