import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { AlertComponent } from './alert/alert.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    DropdownDirective,
    AlertComponent,
    PlaceholderDirective,
    LoadingSpinnerComponent,
  ],
  imports: [CommonModule],
  exports: [
    DropdownDirective,
    AlertComponent,
    PlaceholderDirective,
    CommonModule,
    LoadingSpinnerComponent,
  ],
})
export class SharedModule {}
