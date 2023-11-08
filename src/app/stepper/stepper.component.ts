import { StepperSelectionEvent } from "@angular/cdk/stepper";
import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatStepper } from "@angular/material/stepper";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements AfterViewInit {

  @ViewChild('stepper') stepper!: MatStepper;

  route = inject(ActivatedRoute)
  router = inject(Router)

  async onStepChange(event: StepperSelectionEvent) {
    const stepRoute = ['step1', 'step2', 'step3'][event.selectedIndex];
    await this.router.navigate(['steps', stepRoute]);
  }

  ngAfterViewInit() {
    const stepMap = {'step1': 0, 'step2': 1, 'step3': 2};
    const currentStep = this.route.firstChild?.snapshot.url[0].path as keyof typeof stepMap;
    this.stepper!.selectedIndex = stepMap[currentStep] ?? 0;
  }
}
