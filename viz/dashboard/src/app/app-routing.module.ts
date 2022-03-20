import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardHomeComponent} from "./dashboard-home/dashboard-home.component";

const routes: Routes = [
  {path: 'home', component: DashboardHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}