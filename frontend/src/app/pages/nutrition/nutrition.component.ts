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
  ];
  
  meals: {calories: number, protein:number, carbs:number, fat:number, type: string, ingredients: string, completed: boolean}[] = [
    {calories: 400, protein: 30, carbs: 40, fat: 20, type: "Breakfast", ingredients: "eggs, avocado, bread", completed: false},
    {calories: 500, protein: 45, carbs: 50, fat: 15, type: "Lunch", ingredients: "chicken fillet, white rice", completed: false},
    {calories: 300, protein: 20, carbs: 20, fat: 5, type: "Afternoon snack", ingredients: "protein bar, banana", completed: false},
    {calories: 600, protein:40, carbs: 60, fat: 20, type: "Dinner", ingredients: "spaghetti, ground beef", completed: false},
    {calories: 300, protein:20, carbs: 30, fat: 6,  type: "Night sanck", ingredients: "yoghurt, honey, strawberries", completed: false}
  ];

  calories:number = 0;
  protein:number = 0;
  carbs:number = 0;
  fat:number = 0;

  added_meal:string = "";
  addMeal(type:string){
    for (let meal of this.meals){
      if(meal.type === type) {
        meal.completed = true;
        this.calories += meal.calories;
        this.protein += meal.protein;
        this.carbs += meal.carbs;
        this.fat += meal.fat;
      }
    }
  }
}
