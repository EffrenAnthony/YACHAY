import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from './components/home/home.component';

const routes:Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component: HomeComponent},

]

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes,{useHash:true})],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
