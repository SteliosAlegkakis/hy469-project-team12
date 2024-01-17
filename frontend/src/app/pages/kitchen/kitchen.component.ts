import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { SmartSpeakerService } from 'src/app/global/services/smart-speaker/smart-speaker.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss'],
})
export class KitchenComponent implements OnInit {
  constructor(
    private sockets: SocketsService,
    private smart_speaker: SmartSpeakerService
  ) {}
  ngOnInit(): void {
    this.sockets.subscribe('updated_meals_mobile', (payload: any) => {
      this.meals = payload.meals;
      this.calories = payload.calories;
      this.protein = payload.protein;
      this.carbs = payload.carbs;
      this.fat = payload.fat;
    });
    this.smart_speaker.initialize();
    this.smart_speaker.start();
    this.smart_speaker.speak('Welcome to kitchen');

    this.smart_speaker.addCommand('Change', () => {
      this.smart_speaker.speak('Which meal?');
      this.smart_speaker.addCommand('Breakfast', () => {
        this.showPopUp();
        this.smart_speaker.addCommand('yogurt', () => {
          this.smart_speaker.speak('You will add 200 calories are you sure?');
          this.smart_speaker.addCommand('yes', () => {
            const breakfastIndex = this.meals.findIndex(
              (meal) => meal.type === 'Breakfast'
            );
            this.meals[breakfastIndex].ingredients += ', yogurt';
            this.meals[breakfastIndex].calories += 200;
            this.hidePopUp();
          });
        });
      });
    });
  }
  show_pop_up: boolean = false;
  calories: number = 0;
  protein: number = 0;
  carbs: number = 0;
  fat: number = 0;
  clicked: boolean = false;

  specific_meals: {
    name: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    info: string;
  }[] = [
    {
      name: 'yogurt',
      calories: 200,
      protein: 18,
      carbs: 15,
      fat: 2,
      info: 'Protein:18  Carbs:15  Fat:2',
    },
    {
      name: 'protein shake',
      calories: 400,
      protein: 36,
      carbs: 30,
      fat: 20,
      info: 'Protein:36  Carbs:30  Fat:20',
    },
    {
      name: 'protein bar',
      calories: 350,
      protein: 22,
      carbs: 30,
      fat: 20,
      info: 'Protein:22  Carbs:30  fat:20',
    },
  ];

  meals: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    type: string;
    ingredients: string;
    completed: boolean;
  }[] = [
    {
      calories: 400,
      protein: 30,
      carbs: 40,
      fat: 20,
      type: 'Breakfast',
      ingredients: 'eggs, avocado, bread',
      completed: false,
    },
    {
      calories: 500,
      protein: 45,
      carbs: 50,
      fat: 15,
      type: 'Lunch',
      ingredients: 'chicken fillet, white rice',
      completed: false,
    },
    {
      calories: 300,
      protein: 20,
      carbs: 20,
      fat: 5,
      type: 'Afternoon snack',
      ingredients: 'protein bar, banana',
      completed: false,
    },
    {
      calories: 600,
      protein: 40,
      carbs: 60,
      fat: 20,
      type: 'Dinner',
      ingredients: 'spaghetti, ground beef',
      completed: false,
    },
    {
      calories: 300,
      protein: 20,
      carbs: 30,
      fat: 6,
      type: 'Night sanck',
      ingredients: 'yoghurt, honey, strawberries',
      completed: false,
    },
  ];

  addMeal(type: string) {
    for (let meal of this.meals) {
      if (meal.type === type) {
        if (meal.completed == false) {
          meal.completed = true;

          this.calories += meal.calories;

          this.protein += meal.protein;
          this.carbs += meal.carbs;
          this.fat += meal.fat;
        } else {
          meal.completed = false;
          this.calories -= meal.calories;
          this.protein -= meal.protein;
          this.carbs -= meal.carbs;
          this.fat -= meal.fat;
        }
      }
    }
    this.sockets.publish('updated_meals_kitchen', {
      meals: this.meals,
      calories: this.calories,
      protein: this.protein,
      carbs: this.carbs,
      fat: this.fat,
    });
  }
  showPopUp() {
    this.show_pop_up = true;
  }
  hidePopUp() {
    this.show_pop_up = false;
  }
}
