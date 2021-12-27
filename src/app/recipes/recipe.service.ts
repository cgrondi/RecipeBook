import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            "Beef and Broccoli",
            "Has beef and broccoli in a bowl.",
            "https://live.staticflickr.com/65535/48588252551_16d7043332_h.jpg",
            [
                new Ingredient('Beef', 2),
                new Ingredient('Broccolli', 5)
            ]
        ),
        new Recipe(
            "Hamburger",
            "An american classic.",
            "https://live.staticflickr.com/160/416698521_0bef9b9cd0_b.jpg",
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1),
                new Ingredient('Lettuce', 1),
                new Ingredient('Tomato', 2),
                new Ingredient('Cheese', 1),
                new Ingredient('Onion', 1),
                new Ingredient('Pickles', 2),
                new Ingredient('Ketchup', 1),
                new Ingredient('Mustard', 1),
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }

}
