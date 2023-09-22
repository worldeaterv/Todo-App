import { Component, inject, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Tasks } from '../../interfaces/tasks.interface';
import { TodoService } from '../../services/todo-service.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css'],
})
export class CompletedTasksComponent implements OnInit {
  private todoService = inject(TodoService);

  public tasks: Tasks[] = [];
  public loading: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.getCompletedTasks();
  }

  getCompletedTasks() {
    this.loading = true;
    this.todoService.getTasks().subscribe((tasks) => {
      if (tasks) {
        this.tasks = tasks.filter((tasks) => tasks.estado === 'completada');
        this.loading = false;
      } else {
        this.tasks = [];
        this.loading = false;
      }
    });
  }

  deleteAllTasksCompleted() {
    if (this.tasks.length <= 0) {
      Swal.fire('Error', 'No hay tareas completadas para borrar.', 'error');
      return;
    }

    this.todoService.deleteAllTasksCompleted().subscribe({
      next: () => {
        Swal.fire(
          'Eliminacion de tareas exitosa',
          'Las tareas completadas se eliminaron correctamente.',
          'success'
        );
        this.getCompletedTasks();
      },
      error: (message) => {
        console.log(message);
      },
    });
  }

  changeTaskState(id: string) {
    this.todoService.changeTaskState(id).subscribe({
      next: () => {
        Swal.fire(
          'Tarea cambiada a pendiente',
          'La tarea se ha cambiado a pendiente correctamente.',
          'success'
        );
        this.getCompletedTasks();
      },
      error: (message) => {
        console.log(message);
      },
    });
  }
}
