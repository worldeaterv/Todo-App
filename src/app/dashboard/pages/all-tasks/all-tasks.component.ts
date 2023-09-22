import { Component, inject, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Tasks } from '../../interfaces/tasks.interface';
import { TodoService } from '../../services/todo-service.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css'],
})
export class AllTasksComponent implements OnInit {
  private todoService = inject(TodoService);

  public tasks: Tasks[] = [];
  public loading: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.loading = true;
    this.todoService.getTasks().subscribe((tasks) => {
      if (tasks) {
        this.tasks = tasks;
        this.loading = false;
      } else {
        this.tasks = [];
        this.loading = false;
      }
    });
  }

  deleteAllTasksCompleted() {
    const hayTareasCompletadas = this.tasks.some(
      (tarea) => tarea.estado === 'completada'
    );
    if (!hayTareasCompletadas) {
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
        this.getTasks();
      },
      error: (message) => {
        console.log(message);
      },
    });
  }

  changeTaskState(id: string, estadoActual: string) {
    this.todoService.changeTaskState(id).subscribe({
      next: () => {
        if (estadoActual === 'pendiente') {
          Swal.fire(
            'Tarea completada',
            'La tarea se completó correctamente.',
            'success'
          );
        } else if (estadoActual === 'completada') {
          Swal.fire(
            'Tarea cambiada a pendiente',
            'La tarea se ha cambiado a pendiente correctamente.',
            'success'
          );
        }
        this.getTasks();
      },
      error: (message) => {
        console.log(message);
      },
    });
  }

}
