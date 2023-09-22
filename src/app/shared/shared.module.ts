import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { NoTasksCardComponent } from './components/no-tasks-card/no-tasks-card.component';
import { NoTasksCompletedCardComponent } from './components/no-tasks-completed-card/no-tasks-completed-card.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    NoTasksCardComponent,
    NoTasksCompletedCardComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SpinnerComponent,
    NoTasksCardComponent,
    NoTasksCompletedCardComponent,
  ],
})
export class SharedModule {}
