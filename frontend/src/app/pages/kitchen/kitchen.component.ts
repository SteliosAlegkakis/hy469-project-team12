import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit{
  constructor(private sockets: SocketsService) {}
  ngOnInit(): void {
    this.sockets.subscribe("updated_meals_mobile",(payload:any)=> {
      this.meals = payload.meals;
      this.calories = payload.calories;
      this.protein = payload.protein;
      this.carbs = payload.carbs;
      this.fat = payload.fat;
    });
  }
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
    this.sockets.publish("updated_meals_kitchen", {meals: this.meals,calories: this.calories,protein: this.protein,carbs: this.carbs,fat: this.fat});
  }
}
