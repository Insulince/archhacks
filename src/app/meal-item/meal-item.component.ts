import {Component, OnInit} from "@angular/core";
import {NDB_Nutrition_Response} from "../model/ndb-nutrition-response";
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
  }
}
