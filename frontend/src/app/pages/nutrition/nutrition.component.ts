import { Component } from '@angular/core';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss']
})
export class NutritionComponent {
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
  
  meals: {calories: Number, type: string, ingredients: string, completed: boolean}[] = [
    {calories: 400, type: "Breakfast", ingredients: "eggs, avocado, bread", completed: true},
    {calories: 500, type: "Lunch", ingredients: "chicken fillet, white rice", completed: false},
    {calories: 300, type: "Afternoon snack", ingredients: "protein bar, banana", completed: false},
    {calories: 600, type: "Dinner", ingredients: "spaghetti, ground beef", completed: false},
    {calories: 300, type: "Night sanck", ingredients: "yoghurt, honey, strawberries", completed: false}
  ]
}
