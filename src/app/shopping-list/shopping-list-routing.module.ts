import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';

// const routes: Routes = [
//   { path: 'shopping-list', component: ShoppingListComponent },
// ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'shopping-list', component: ShoppingListComponent },
    ]),
  ],
  // exports: [RouterModule],
})
export class ShoppingListRoutingModule {}
