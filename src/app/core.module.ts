import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

// Creating a core module is only recommended if you have a service where you didn't use @Injectable: ({providedIn: 'root'})
@NgModule({
  declarations: [],
  // imports: [CommonModule],
  providers: [
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
