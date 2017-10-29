import {NDB_Nutrition_Food_Object, NDB_Nutrition_Nutrient, NDB_Nutrition_Response} from "./ndb-nutrition-response";

export class NutritionFacts {

  public energy: Array<any> = [0, "kcal", 0];
  public protein: Array<any> = [0, "g", 0];
  public totalFat: Array<any> = [0, "g", 0];
  public carbs: Array<any> = [0, "g", 0];
  public fiber: Array<any> = [0, "g", 0];
  public sugar: Array<any> = [0, "g", 0];
  public calcium: Array<any> = [0, "%", 0];
  public iron: Array<any> = [0, "%", 0];
  public magnesium: Array<any> = [0, "%", 0];
  public phosphorus: Array<any> = [0, "%", 0];
  public potassium: Array<any> = [0, "%", 0];
  public sodium: Array<any> = [0, "mg", 0];
  public zinc: Array<any> = [0, "%", 0];
  public vitaminC: Array<any> = [0, "%", 0];
  public thiamin: Array<any> = [0, "%", 0];
  public riboflavin: Array<any> = [0, "%", 0];
  public niacin: Array<any> = [0, "%", 0];
  public vitaminB6: Array<any> = [0, "%", 0];
  public vitaminB12: Array<any> = [0, "%", 0];
  public vitaminA: Array<any> = [0, "%", 0];
  public vitaminD: Array<any> = [0, "%", 0];
  public totalSaturated: Array<any> = [0, "g", 0];
  public totalMonosaturated: Array<any> = [0, "g", 0];
  public totalPolysaturated: Array<any> = [0, "g", 0];
  public totalTransFat: Array<any> = [0, "g", 0];
  public cholesterol: Array<any> = [0, "mg", 0];


  readonly nutritionFactsKeys: Array<string> = ["Energy", "Protein", "Total lipid (fat)", "Carbohydrate, by difference", "Fiber, total dietary", "Sugars, total", "Calcium, Ca", "Iron, Fe", "Magnesium, Mg", "Phosphorus, P", "Potassium, K", "Sodium, Na", "Zinc, Zn", "Vitamin C, total ascorbic acid", "Thiamin", "Riboflavin", "Niacin", "Vitamin B-6", "Vitamin B-12", "Vitamin A, IU", "Vitamin D", "Fatty acids, total saturated", "Fatty acids, total monounsaturated", "Fatty acids, total polyunsaturated", "Fatty acids, total trans", "Cholesterol"]

  constructor(NDB_nutrtition_response: NDB_Nutrition_Response) {
    NDB_nutrtition_response.foods.forEach(
      (food: NDB_Nutrition_Food_Object): void => {
        food.food.nutrients.forEach(
          (nutrient: NDB_Nutrition_Nutrient): void => {
            switch (nutrient.name) {
              case "Energy": {
                this.energy = [nutrient.value, nutrient.unit];
              }
              break;
              case "Protein": {
                this.protein = [nutrient.value, nutrient.unit];
              }
              break;
              case "Total lipid (fat)": {
                this.totalFat = [nutrient.value, nutrient.unit];
              }
              break;
              case "Carbohydrate, by difference": {
                this.carbs = [nutrient.value, nutrient.unit];
              }
              break;
              case "Fiber, total dietary": {
                this.fiber = [nutrient.value, nutrient.unit];
              }
              break;
              case "Sugars, total": {
                this.sugar = [nutrient.value, nutrient.unit];
              }
              break;
              case "Calcium, Ca": {
                this.calcium = [nutrient.value, nutrient.unit];
              }
              break;
              case "Iron, Fe": {
                this.iron = [nutrient.value, nutrient.unit];
              }
              break;
              case "Magnesium, Mg": {
                this.magnesium = [nutrient.value, nutrient.unit];
              }
              break;
              case "Phosphorus, P": {
                this.phosphorus = [nutrient.value, nutrient.unit];
              }
              break;
              case "Potassium, K": {
                this.potassium = [nutrient.value, nutrient.unit];
              }
              break;
              case "Sodium, Na": {
                this.sodium = [nutrient.value, nutrient.unit];
              }
              break;
              case "Zinc, Zn": {
                this.zinc = [nutrient.value, nutrient.unit];
              }
              break;
              case "Vitamin C, total ascorbic acid": {
                this.vitaminC = [nutrient.value, nutrient.unit];
              }
              break;
              case "Thiamin": {
                this.thiamin = [nutrient.value, nutrient.unit];
              }
              break;
              case "Riboflavin": {
                this.riboflavin = [nutrient.value, nutrient.unit];
              }
              break;
              case "Niacin": {
                this.niacin = [nutrient.value, nutrient.unit];
              }
              break;
              case "Vitamin B-6": {
                this.vitaminB6 = [nutrient.value, nutrient.unit];
              }
              break;
              case "Vitamin B-12": {
                this.vitaminB12 = [nutrient.value, nutrient.unit];
              }
              break;
              case "Vitamin A, IU": {
                this.vitaminA = [nutrient.value, nutrient.unit];
              }
              break;
              case "Vitamin D": {
                this.vitaminD = [nutrient.value, nutrient.unit];
              }
              break;
              case "Fatty acids, total saturated": {
                this.totalSaturated = [nutrient.value, nutrient.unit];
              }
              break;
              case "Fatty acids, total monounsaturated": {
                this.totalMonosaturated = [nutrient.value, nutrient.unit];
              }
              break;
              case "Fatty acids, total polyunsaturated": {
                this.totalPolysaturated = [nutrient.value, nutrient.unit];
              }
              break;
              case "Fatty acids, total trans": {
                this.totalTransFat = [nutrient.value, nutrient.unit];
              }
              break;
              case "Cholesterol": {
                this.cholesterol = [nutrient.value, nutrient.unit];
              }
              break;
              default:
                console.log("hmmmm");
              break;
            }
          }
        );
      }
    );
  }
}
