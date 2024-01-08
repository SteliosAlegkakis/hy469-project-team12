import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit{
  constructor(private sockets: SocketsService) {}
  
  ngOnInit(): void {
    this.sockets.subscribe("add_steps",(payload:any)=> {
      console.log(payload);
      console.log(111);
  
      this.steps += payload.num;
      if(this.steps >= this.goal) {
        this.goal_completed = true;
        setTimeout(()=>{this.show_notification = false},4500);
      }
      console.log(this.steps);
    });
  }

  goal_completed:boolean = false;
  show_notification:boolean = true;
  goal:number = 6000;
  steps: number = 3241;

  info: {height: Number, date: Number, month: Number}[] = [
    {height: 70, date: 18, month: 11},
    {height: 60, date: 19, month: 11},
    {height: 40, date: 20, month: 11},
    {height: 80, date: 21, month: 11},
    {height: 30, date: 22, month: 11},
    {height: 20, date: 23, month: 11},
    {height: 50, date: 24, month: 11},
    {height: 90, date: 25, month: 11},
    {height: 60,date: 26, month: 11},
    {height: 80, date: 27, month: 11},
    {height: 60, date: 28, month: 11},
    {height: 70, date: 29, month: 11},
    {height: 100, date: 30, month: 11},
  ]
}
