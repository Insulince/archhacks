import {Component, OnInit} from "@angular/core";
import {NDB_Nutrition_Food_Object, NDB_Nutrition_Nutrient, NDB_Nutrition_Response} from "../model/ndb-nutrition-response";
import {DataBridgeService} from "../services/data-bridge.service";

@Component({
  selector: "arch-hacks-meal-item",
  templateUrl: "./meal-item.component.html",
  styleUrls: ["./meal-item.component.scss"]
})
export class MealItemComponent implements OnInit {
  mealItem: NDB_Nutrition_Response;

  constructor(private dataBridgeService: DataBridgeService) {
    dataBridgeService.onUpdateMealItem.subscribe(
      (mealItem: NDB_Nutrition_Response): void => {
        this.mealItem = mealItem;
      }
    );
  }

  ngOnInit(): void {
    let x = [];
    this.mealItem.foods.forEach(
      (food: NDB_Nutrition_Food_Object): void => {
        food.food.nutrients.forEach(
          (nutrient: NDB_Nutrition_Nutrient): void => {
            x.push(nutrient.name);
          }
        );
      }
    );

    console.log(x.join("|"));
  }
}
