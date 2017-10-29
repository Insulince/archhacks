import {NDB_Nutrition_Response} from "../model/ndb-nutrition-response";
import {EventEmitter} from "@angular/core";

export class DataBridgeService {
  onUpdateMealItem: EventEmitter<NDB_Nutrition_Response> = new EventEmitter<NDB_Nutrition_Response>();

  constructor() {
  }

  updateMealItem(mealItem: NDB_Nutrition_Response): void {
    this.onUpdateMealItem.emit(mealItem);
  }
}
