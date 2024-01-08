import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-percentage-bar',
  templateUrl: './percentage-bar.component.html',
  styleUrls: ['./percentage-bar.component.scss']
})
export class PercentageBarComponent implements OnInit{
  @Input() completed!: number;
  @Input() goal!: number;
  @Input() bar_color!: String;

  percentage!:number;

  ngOnInit(): void {
    this.percentage = (this.completed/this.goal)*100;
    this.percentage = Number(this.percentage.toFixed(0));

    setInterval(() => {
      this.percentage = (this.completed/this.goal)*100;
      this.percentage = Number(this.percentage.toFixed(0));
    }, 500)
  }


}
