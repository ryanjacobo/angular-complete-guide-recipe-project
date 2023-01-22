import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // "pathMath: 'full'" means redirect to /recipes if path: is ''
  // For lazy loading. loadChildren tells app-routing to load recipes module when user visits 'recipes' path. Project needs to be restarted after implementing lazy load.
  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipes/recipes.module').then((x) => x.RecipesModule),
  },
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('./shopping-list/shopping-list.module').then(
        (x) => x.ShoppingListModule
      ),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((x) => x.AuthModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ], // preloadingStrategy speeds up login process in reloation to lazy loading
  exports: [RouterModule],
})
export class AppRoutingModule {}
