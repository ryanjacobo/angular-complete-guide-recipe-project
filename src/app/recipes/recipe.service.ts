import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Sinigang',
  //     'Pork belly with tamarind soup.',
  //     'https://www.kawalingpinoy.com/wp-content/uploads/2013/01/sinigang-baboy-7-768x1024.jpg',
  //     [new Ingredient('Pork belly cubes', 1), new Ingredient('Veggies', 3)]
  //   ),
  //   new Recipe(
  //     'Beef Caldereta',
  //     'Beef shoulder stew.',
  //     'https://www.kawalingpinoy.com/wp-content/uploads/2019/04/spicy-beef-caldereta-2.jpg',
  //     [
  //       new Ingredient('Beef shoulder cubes', 1),
  //       new Ingredient('Tomato paste', 1),
  //       new Ingredient('Carrots', 1),
  //     ]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private shoppinglistService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    // return this.recipes;
    return this.recipes.slice(); // adding slice() means on a copy of the recipes array which can be chanaged and not the actual array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
