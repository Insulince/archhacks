export class NDB_Nutrition_Response {
  foods: Array<NDB_Nutrition_Food_Object> = [];
  count: number;
  notfound: number;
  api: number;

  constructor(rawResponse: any) {
    rawResponse.foods.forEach(
      (rawFoodObject: any): void => {
        this.foods.push(new NDB_Nutrition_Food_Object(rawFoodObject));
      }
    );
    this.count = rawResponse.count;
    this.notfound = rawResponse.notfound;
    this.api = rawResponse.api;
  }
}

export class NDB_Nutrition_Food_Object {
  food: NDB_Nutrition_Food;

  constructor(rawFoodObject: any) {
    this.food = new NDB_Nutrition_Food(rawFoodObject.food);
  }
}

export class NDB_Nutrition_Food {
  sr: string;
  type: string;
  desc: NDB_Nutrition_Desc;
  ing: NDB_Nutrition_Ing;
  nutrients: Array<NDB_Nutrition_Nutrient> = [];
  footnotes: Array<NDB_Nutrition_Footnote> = [];

  constructor(rawFood: any) {
    this.sr = rawFood.sr;
    this.type = rawFood.type;
    this.desc = new NDB_Nutrition_Desc(rawFood.desc);
    this.ing = new NDB_Nutrition_Ing(rawFood.ing);
    rawFood.nutrients.forEach(
      (rawNutrient: any): void => {
        this.nutrients.push(new NDB_Nutrition_Nutrient(rawNutrient));
      }
    );
    rawFood.footnotes.forEach(
      (rawFootnote: any): void => {
        this.footnotes.push(new NDB_Nutrition_Footnote(rawFootnote));
      }
    );
  }
}

export class NDB_Nutrition_Desc {
  ndbno: string;
  name: string;
  ds: string;
  manu: string;
  ru: string;

  constructor(rawDescription: any) {
    this.ndbno = rawDescription.ndbno;
    this.name = rawDescription.name;
    this.ds = rawDescription.ds;
    this.manu = rawDescription.manu;
    this.ru = rawDescription.ru;
  }
}

export class NDB_Nutrition_Ing {
  desc: string;
  upd: string;

  constructor(rawIng: any) {
    this.desc = rawIng.desc;
    this.upd = rawIng.upd;
  }
}

export class NDB_Nutrition_Nutrient {
  nutrient_id: string;
  name: string;
  derivation: string;
  group: string;
  unit: string;
  value: string;
  measures: Array<NDB_Nutrition_Measure> = [];

  constructor(rawNutrient: any) {
    this.nutrient_id = rawNutrient.nutrient_id;
    this.name = rawNutrient.name;
    this.derivation = rawNutrient.derivation;
    this.group = rawNutrient.group;
    this.unit = rawNutrient.unit;
    this.value = rawNutrient.value;
    rawNutrient.measures.forEach(
      (rawMeasure: any): void => {
        this.measures.push(new NDB_Nutrition_Measure(rawMeasure));
      }
    );
  }
}

export class NDB_Nutrition_Measure {
  label: string;
  eqv: number;
  eunit: string;
  qty: number;
  value: string;

  constructor(rawMeasure: any) {
    this.label = rawMeasure.label;
    this.eqv = rawMeasure.eqv;
    this.eunit = rawMeasure.eunit;
    this.qty = rawMeasure.qty;
    this.value = rawMeasure.value;
  }
}

export class NDB_Nutrition_Footnote {
  // TODO: Footnotes were empty in the examples I used to model.
  constructor(rawFootnote: any) {
  }
}