import { Component } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent {
  calories:number = 0;
  protein:number = 0;
  carbs:number = 0;
  fat:number = 0;

  meals: {calories: number, protein:number, carbs:number, fat:number, type: string, ingredients: string, completed: boolean}[] = [
    {calories: 400, protein: 30, carbs: 40, fat: 20, type: "Breakfast", ingredients: "eggs, avocado, bread", completed: false},
    {calories: 500, protein: 45, carbs: 50, fat: 15, type: "Lunch", ingredients: "chicken fillet, white rice", completed: false},
    {calories: 300, protein: 20, carbs: 20, fat: 5, type: "Afternoon snack", ingredients: "protein bar, banana", completed: false},
    {calories: 600, protein:40, carbs: 60, fat: 20, type: "Dinner", ingredients: "spaghetti, ground beef", completed: false},
    {calories: 300, protein:20, carbs: 30, fat: 6,  type: "Night sanck", ingredients: "yoghurt, honey, strawberries", completed: false}
  ];
}
