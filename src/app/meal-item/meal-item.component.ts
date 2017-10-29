import {Component, OnInit} from "@angular/core";
import {NDB_Nutrition_Response} from "../model/ndb-nutrition-response";
import {DataBridgeService} from "../services/data-bridge.service";
import {NutritionFacts} from "../model/nutrition-facts";
import {User} from "../model/user";
import {LocalStorageService} from "../services/local-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: "arch-hacks-meal-item",
  templateUrl: "./meal-item.component.html",
  styleUrls: ["./meal-item.component.scss"]
})
export class MealItemComponent implements OnInit {
  mealItem: NDB_Nutrition_Response;
  nutritionFacts: NutritionFacts;

  user: User = null;

  insulinRequired: number = 0;

  currentBloodSugar: number = 100;
  hoursSinceLastDose: number = 5;
  unitsInLastDose: number = 0;

  excess: boolean = false;

  difference: number = 0;
  bloodSugarImplications: number = 0;

  insulinOnBoardDuration: number = 5;
  correctionRatio: number = 30;
  targetBloodSugar: number = 100;
  carbohydrateRatio: number = 10;

  constructor(private dataBridgeService: DataBridgeService,
              private localStorageService: LocalStorageService,
              private router: Router) {
    dataBridgeService.onUpdateMealItem.subscribe(
      (mealItem: NDB_Nutrition_Response): void => {
          this.mealItem = mealItem;
          this.nutritionFacts = new NutritionFacts(this.mealItem);5
      }
    );
  }

  ngOnInit(): void {
    this.user = JSON.parse(this.localStorageService.fetchValueFromKey("user"));

    if (this.user !== null) {
      this.insulinOnBoardDuration = this.user.insulinOnBoardDuration;
      this.correctionRatio = this.user.correctionRatio;
      this.targetBloodSugar = this.user.targetBloodSugar;
      this.carbohydrateRatio = this.user.carbohydrateRatio;
    }

    this.change();
  }

  change() {
    this.difference = (this.insulinOnBoardDuration - this.hoursSinceLastDose) / this.insulinOnBoardDuration;
    this.bloodSugarImplications = this.unitsInLastDose * this.difference * this.correctionRatio;
    if (this.bloodSugarImplications < 0) {
      this.bloodSugarImplications = 0;
    }

    this.insulinRequired = (this.nutritionFacts.carbs[0] / this.carbohydrateRatio) + ((this.currentBloodSugar - (this.targetBloodSugar + this.bloodSugarImplications)) / this.correctionRatio);

    if (this.insulinRequired < 0) {
      this.excess = true;
      this.insulinRequired = 0;
    } else {
      this.excess = false;
    }
  }

  back(){
    this.router.navigate(['/home']);
  }
}
