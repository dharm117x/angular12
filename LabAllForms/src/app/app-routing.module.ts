import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { Reactiveform1Component } from './reactiveform1/reactiveform1.component';

const routes: Routes = [
  {path:'template',component:TemplateformComponent},
  {path:'reactive', component:ReactiveformComponent},
  {path:'reactive1', component:Reactiveform1Component},
  {path:'dynamic', component:DynamicformComponent},
  {path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
