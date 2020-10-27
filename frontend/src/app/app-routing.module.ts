import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {TasklistComponent} from './components/tasklist/tasklist.component';
import {DetailComponent} from "./components/tasklist/detail/detail.component";

import { Task } from "./components/tasklist/Task";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'tasklist', component: TasklistComponent },
  { path: 'tasklist/:id', component: DetailComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
