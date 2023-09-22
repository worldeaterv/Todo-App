import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Tasks } from '../../interfaces/tasks.interface';
import { TodoService } from '../../services/todo-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EditTask } from '../../interfaces/edit-task.interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent {
  private todoService = inject(TodoService);

  public task?: Tasks;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private validatorsService: ValidatorsService
  ) {}

  public editTaskForm: FormGroup = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    descripcion: ['', [Validators.required, Validators.minLength(3)]],
    estado: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.getTaskById();
  }

  getTaskById() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.todoService.getTaskById(id)))
      .subscribe((task) => {
        if (!task) return this.router.navigateByUrl('');

        this.editTaskForm.setValue({
          titulo: task.titulo,
          descripcion: task.descripcion,
          estado: task.estado,
        });

        return (this.task = task);
      });
  }
  editTask() {
    if (this.editTaskForm.invalid) {
      this.editTaskForm.markAllAsTouched();
      return;
    }

    const { titulo, descripcion, estado } = this.editTaskForm.value;

    if (
      titulo === this.task?.titulo &&
      descripcion === this.task?.descripcion &&
      estado === this.task?.estado
    ) {
      Swal.fire(
        'Inválido',
        'Edita al menos un valor para poder actualizar tu tarea.',
        'error'
      );
      return;
    }

    const editTask: EditTask = this.editTaskForm.value;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.todoService.editTask(id, editTask)))
      .subscribe({
        next: () => {
          Swal.fire(
            'Edición exitosa',
            'La edición se realizó correctamente.',
            'success'
          );
          this.getTaskById();
        },
        error: (message) => {
          console.log(message);
        },
      });
  }

  deleteTask() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.todoService.deleteTask(id)))
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/dashboard/pending-tasks');
          Swal.fire(
            'Tarea eliminada',
            'La tarea se elimino correctamente.',
            'success'
          );
        },
        error: (message) => {
          console.log(message);
        },
      });
  }

  // validaciones formulario
  isValidField(field: string) {
    return this.validatorsService.isValidField(this.editTaskForm, field);
  }
  getFieldError(field: string) {
    return this.validatorsService.getFieldError(this.editTaskForm, field);
  }
}
