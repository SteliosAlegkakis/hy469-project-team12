import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
 

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.scss']
})
export class SleepComponent implements OnInit{
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

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    // Scroll to the top when the component initializes
    this.viewportScroller.setOffset([0, 0]);
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}
