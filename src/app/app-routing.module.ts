import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';//add this .ts
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about/:id',//route parameter
    component:AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
