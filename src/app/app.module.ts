import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { NavBar } from './navbar.component';
import { Footer } from './footer.component';

@NgModule({
  declarations: [AppComponent, NavBar, Footer],
  imports: [BrowserModule, AppRoutingModule, UserlistComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
