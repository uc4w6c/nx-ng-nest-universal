import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes 
      /* これも追加してみたけどだめだった
      , { initialNavigation: 'enabled' } */
    )],
  exports: [RouterModule]
})
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]

export class AppRoutingModule { }
