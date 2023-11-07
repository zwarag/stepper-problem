import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Step1RoutingModule } from './step1-routing.module';
import { Step1Component } from './step1.component';


@NgModule({
  declarations: [
    Step1Component
  ],
  imports: [
    CommonModule,
    Step1RoutingModule
  ]
})
export class Step1Module { }
