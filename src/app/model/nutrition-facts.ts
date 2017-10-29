import {NDB_Nutrition_Food_Object, NDB_Nutrition_Nutrient, NDB_Nutrition_Response} from "./ndb-nutrition-response";

export class NutritionFacts {

  public energy: any;
  public protein: any;
  public totalFat: any;
  public carbs: any;
  public fiber: any;
  public sugar: any;
  public calcium: any;
  public iron: any;
  public magnesium: any;
  public phosphorus: any;
  public potassium: any;
  public sodium: any;
  public zinc: any;
  public vitaminC: any;
  public thiamin: any;
  public riboflavin: any;
  public niacin: any;
  public vitaminB6: any;
  public vitaminB12: any;
  public vitaminA: any;
  public vitaminD: any;
  public totalSaturated: any;
  public totalMonosaturated: any;
  public totalPolysaturated: any;
  public totalTransFat: any;
  public cholesterol: any;


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
