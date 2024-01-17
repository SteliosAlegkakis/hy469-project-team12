import { Component, OnInit} from '@angular/core';
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
      this.lost = payload.weight_lost;
      this.weight = this.weight - payload.weight_lost;
    })
  }
  weight: number = 73;
  lost:number = 0.5;
  goal: number = 69.5;
  new_goal:number = 69.5;
  show_pop_up: boolean = false;
  weeks:number = 4;
  kg_per_week:number = parseFloat(((this.weight-this.new_goal)/this.weeks).toFixed(1));

  updateWeeks(){
    console.log(this.weeks);
    this.kg_per_week = parseFloat(((this.weight-this.new_goal)/this.weeks).toFixed(1));
  }

  updateWeightGoal(){
    console.log(this.new_goal);
    this.kg_per_week = parseFloat(((this.weight-this.new_goal)/this.weeks).toFixed(1));
  }

  setGoal(){
    this.goal = this.new_goal;
    this.hidePopUp();
  }

  showPopUp(){ this.show_pop_up = true; }
  hidePopUp(){ this.show_pop_up = false; }
}
