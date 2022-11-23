import { Component, OnInit } from '@angular/core';

// import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // providers: [RecipeService], // Must be moved to app.module.ts so any changes in any recipes component gets applied (not destroyed by NgOnDestroy)
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
