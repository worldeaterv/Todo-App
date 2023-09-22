import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'app-navbar-task',
  templateUrl: './navbar-task.component.html',
  styleUrls: ['./navbar-task.component.css'],
})
export class NavbarTaskComponent {
  public reactiveMenu: MenuItem[] = [
    {
      title: 'Pendientes',
      route: '/dashboard/pending-tasks',
    },
    {
      title: 'Completadas',
      route: '/dashboard/completed-tasks',
    },
    {
      title: 'Todas mis tareas',
      route: '/dashboard/all-tasks',
    },
  ];
}
