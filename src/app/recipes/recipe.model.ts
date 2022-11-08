import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name!: string;
  public description!: string;
  public imagePath!: string;
  public ingredients: Ingredient[];
  // must add ! after the property name to fix the error - Property has no initializer and is not definitely assigned in the constructor

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
