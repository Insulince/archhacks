import {Component, OnInit} from "@angular/core";
import {NDB_Nutrition_Response} from "../model/ndb-nutrition-response";
import {DataBridgeService} from "../services/data-bridge.service";
import {NutritionFacts} from "../model/nutrition-facts";

@Component({
  selector: "arch-hacks-meal-item",
  templateUrl: "./meal-item.component.html",
  styleUrls: ["./meal-item.component.scss"]
})
export class MealItemComponent implements OnInit {
  mealItem: NDB_Nutrition_Response;
  nutritionFacts: NutritionFacts;

  constructor(private dataBridgeService: DataBridgeService) {4
    dataBridgeService.onUpdateMealItem.subscribe(
      (mealItem: NDB_Nutrition_Response): void => {
          this.mealItem = mealItem;
          this.nutritionFacts = new NutritionFacts(this.mealItem);5
      }
    );
  }

  ngOnInit(): void {
  }
}
