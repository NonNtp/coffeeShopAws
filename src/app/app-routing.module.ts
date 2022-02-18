import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './components/my-form/my-form.component';
import { DirectivesComponent } from '../app/components/directives/directives.component';
import { FriendComponent } from './components/friend/friend.component';
import { GreetComponent } from './components/greet/greet.component';
import { CoffeeComponent } from './components/coffee/coffee.component';

const routes: Routes = [
  {
    path: 'greet',
    component: GreetComponent,
  },
  {
    path: 'myForm',
    component: MyFormComponent,
  },
  {
    path: 'directive',
    component: DirectivesComponent,
  },
  {
    path: 'friend',
    component: FriendComponent,
  },
  {
    path: 'coffee',
    component: CoffeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
