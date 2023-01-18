import { SharedModule } from './../shared/shared.module';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    // CommonModule,
    SharedModule,
    // RouterModule,
    // RouterModule.forChild([
    //   { path: 'shopping-list', component: ShoppingListComponent },
    // ]),
    FormsModule,
    ReactiveFormsModule,
    ShoppingListRoutingModule,
  ],
})
export class ShoppingListModule {}
