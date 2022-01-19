import { HttpClient } from "@angular/common/http"; //IMPORTANT: don't forget to import HttpClient in app.module.ts and add it to the imports section
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap } from "rxjs/operators"

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://ng-course-recipe-book-f9dbe-default-rtdb.firebaseio.com/recipes.json', recipes)
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('https://ng-course-recipe-book-f9dbe-default-rtdb.firebaseio.com/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    //take each recipe of recipes and return that recipe using the spread operator but specifically set 
                    //the ingredients property using a ternerary operator. If recipe.ingredients exists, set recipe.ingredients
                    //to recipe.ingredients. If recipe.ingredients does not exist, meaning no ingredients have been added 
                    //to the recipe, then set recipe.ingredients equal to an empty array.
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
                });
            }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                })
            )

    }
}