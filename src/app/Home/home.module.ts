import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


import { HomeComponent } from './home.component';

//Định nghĩa router riêng cho module này
const routing: Routes = [
  { path: '', component: HomeComponent }
];

//forChild -> Router này sẽ được load như một router con
const Routing: ModuleWithProviders = RouterModule.forChild(routing);


@NgModule({
  imports: [
    CommonModule,
    Routing,
    FlexLayoutModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }