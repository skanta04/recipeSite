import { EventEmitter, Injectable } from '@angular/core';
import {Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Broccoli Pesto Pasta',
        'A bright broccoli pesto pasta that is delicious and healthy!', 
        'assets/pesto.jpeg', 
        [
            new Ingredient('Broccoli', 4),
            new Ingredient('Garlic', 2),
            new Ingredient ('Basil', 2),
            new Ingredient('Parmesan', 1)
        ]),
        
        new Recipe('Five Spice Chicken Sheet', 
        'A delicious spicy chicken sheet pan dinner.', 
        'assets/chikenPan.jpeg',
        [
            new Ingredient('Chicken', 4),
            new Ingredient('Honey', 1),
            new Ingredient('Carrots', 3),
            new Ingredient('Cabbage', 1)
        ])
      ];

    constructor(private slService: ShoppingListService) {

    }
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}