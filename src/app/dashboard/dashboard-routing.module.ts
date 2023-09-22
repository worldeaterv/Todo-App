import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { PendingTasksComponent } from './pages/pending-tasks/pending-tasks.component';
import { CompletedTasksComponent } from './pages/completed-tasks/completed-tasks.component';
import { AllTasksComponent } from './pages/all-tasks/all-tasks.component';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'pending-tasks',
        component: PendingTasksComponent,
      },
      {
        path: 'completed-tasks',
        component: CompletedTasksComponent,
      },
      {
        path: 'all-tasks',
        component: AllTasksComponent,
      },
      {
        path: 'create-task',
        component: CreateTaskComponent,
      },
      {
        path: 'edit-task/:id',
        component: EditTaskComponent,
      },
      {
        path: '**',
        redirectTo: 'pending-tasks',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
