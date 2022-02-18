import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponent } from './components/greet/greet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyFormComponent } from './components/my-form/my-form.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { FriendComponent } from './components/friend/friend.component';
import { CoffeeComponent } from './components/coffee/coffee.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    MyFormComponent,
    DirectivesComponent,
    FriendComponent,
    CoffeeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
