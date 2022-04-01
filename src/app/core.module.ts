import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { RecipeService } from "./recipes/recipe.service";

@NgModule({
  //ShoppingListService provided by using @Injectable({providedIn: 'root'}) in shopping-list.service.ts
  //DataStorageService provided by using @Injectable({providedIn: 'root'}) in data-storage.service.ts
  //RecipesResolverService provided by using @Injectable({providedIn: 'root'}) in recipes-resolver.service.ts
  //AuthService provided by using @Injectable({providedIn: 'root'}) in auth.service.ts
  //AuthGuard provided by using @Injectable({providedIn: 'root'}) in auth.guard.ts
  providers: [
    RecipeService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ]
})
export class CoreModule {}
