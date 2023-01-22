import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // RecipesModule, // removed after implementing lazy loading
    // ShoppingListModule,
    SharedModule,
    CoreModule,
    // AuthModule,
  ],

  bootstrap: [AppComponent],
  // Used by authComponent.showErrorAlert. Not needed for Angular 9+
  // entryComponents: [AlertComponent],
})
export class AppModule {}
