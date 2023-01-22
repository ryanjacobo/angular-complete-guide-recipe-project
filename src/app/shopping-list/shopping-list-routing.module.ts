import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';

// const routes: Routes = [
//   { path: 'shopping-list', component: ShoppingListComponent },
// ];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([{ path: '', component: ShoppingListComponent }]), // '' means path has been specified in app-routing as per lazy loading
  ],
  // exports: [RouterModule],
})
export class ShoppingListRoutingModule {}
