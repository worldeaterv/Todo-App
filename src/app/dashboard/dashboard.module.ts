import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { NavbarTaskComponent } from './components/navbar-task/navbar-task.component';
import { MyGithubNavComponent } from './components/my-github-nav/my-github-nav.component';
import { PendingTasksComponent } from './pages/pending-tasks/pending-tasks.component';
import { CompletedTasksComponent } from './pages/completed-tasks/completed-tasks.component';
import { AllTasksComponent } from './pages/all-tasks/all-tasks.component';
import { TodoService } from './services/todo-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    NavbarTaskComponent,
    MyGithubNavComponent,
    PendingTasksComponent,
    CompletedTasksComponent,
    AllTasksComponent,
    CreateTaskComponent,
    EditTaskComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [TodoService],
})
export class DashboardModule {}
