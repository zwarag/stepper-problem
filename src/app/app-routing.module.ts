import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperComponent } from "./stepper/stepper.component";

const routes: Routes = [
  {
    path: 'steps',
    component: StepperComponent,
    children: [
      {
        path: 'step1',
        loadChildren: () => import('./step1/step1.module').then(m => m.Step1Module)
      },
      {
        path: 'step2',
        loadChildren: () => import('./step2/step2.module').then(m => m.Step2Module)
      },
      {
        path: 'step3',
        loadChildren: () => import('./step3/step3.module').then(m => m.Step3Module)
      },
      {
        path: '',
        redirectTo: 'step1',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'steps',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
