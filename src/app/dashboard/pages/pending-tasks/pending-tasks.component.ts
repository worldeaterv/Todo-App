import { Component, inject, OnInit } from '@angular/core';
import { Tasks } from '../../interfaces/tasks.interface';
import { TodoService } from '../../services/todo-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pending-tasks',
  templateUrl: './pending-tasks.component.html',
  styleUrls: ['./pending-tasks.component.css'],
})
export class PendingTasksComponent implements OnInit {
  private todoService = inject(TodoService);

  public tasks: Tasks[] = [];
  public loading: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.getPendingTasks();
  }

  getPendingTasks() {
    this.loading = true;
    this.todoService.getTasks().subscribe((tasks) => {
      if (tasks) {
        this.tasks = tasks.filter((task) => task.estado === 'pendiente');
        this.loading = false;
      } else {
        this.tasks = [];
        this.loading = false;
      }
    });
  }

  changeTaskState(id: string) {
    this.todoService.changeTaskState(id).subscribe({
      next: () => {
        Swal.fire(
          'Tarea completada',
          'La tarea se completó correctamente.',
          'success'
        );
        this.getPendingTasks();
      },
      error: (message) => {
        console.log(message);
      },
    });
  }
}
