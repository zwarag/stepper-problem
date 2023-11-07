import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Step3RoutingModule } from './step3-routing.module';
import { Step3Component } from './step3.component';


@NgModule({
  declarations: [
    Step3Component
  ],
  imports: [
    CommonModule,
    Step3RoutingModule
  ]
})
export class Step3Module { }
