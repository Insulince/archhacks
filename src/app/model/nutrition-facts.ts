import {NDB_Nutrition_Food_Object, NDB_Nutrition_Nutrient, NDB_Nutrition_Response} from "./ndb-nutrition-response";

export class NutritionFacts {
  readonly nutritionFactsKeys: Array<string> = ["Energy", "Protein", "Total lipid (fat)", "Carbohydrate, by difference", "Fiber, total dietary", "Sugars, total", "Calcium, Ca", "Iron, Fe", "Magnesium, Mg", "Phosphorus, P", "Potassium, K", "Sodium, Na", "Zinc, Zn", "Vitamin C, total ascorbic acid", "Thiamin", "Riboflavin", "Niacin", "Vitamin B-6", "Vitamin B-12", "Vitamin A, IU", "Vitamin D", "Fatty acids, total saturated", "Fatty acids, total monounsaturated", "Fatty acids, total polyunsaturated", "Fatty acids, total trans", "Cholesterol"]

  constructor(NDB_nutrtition_response: NDB_Nutrition_Response) {
    NDB_nutrtition_response.foods.forEach(
      (food: NDB_Nutrition_Food_Object): void => {
        food.food.nutrients.forEach(
          (nutrient: NDB_Nutrition_Nutrient): void => {
            switch (nutrient.name) {
              case "Energy": {

              }
              break;
            }
          }
        );
      }
    );
  }
}
