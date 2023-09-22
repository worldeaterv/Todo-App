import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ValidatorsService } from 'src/app/shared/services/validators.service';
import { TodoService } from '../../services/todo-service.service';
import { CreateTask } from '../../interfaces/create-task.interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent {
  private todoService = inject(TodoService);
  private validatorsService = inject(ValidatorsService);

  constructor(private fb: FormBuilder, private router: Router) {}

  public newTaskForm: FormGroup = this.fb.group({
    titulo: ['tarea 1', [Validators.required, Validators.minLength(3)]],
    descripcion: [
      'descripcion 1',
      [Validators.required, Validators.minLength(3)],
    ],
  });

  createTask() {
    if (this.newTaskForm.invalid) {
      this.newTaskForm.markAllAsTouched();
      return;
    }

    const { titulo, descripcion } = this.newTaskForm.value;
    const createTask: CreateTask = { titulo, descripcion };

    this.todoService.postTask(createTask).subscribe({
      next: () => {
        Swal.fire(
          'Registro exitoso',
          'El registro se realizó correctamente',
          'success'
        );
        this.router.navigateByUrl('/dashboard/pending-tasks', {
          skipLocationChange: true,
        });
      },
      error: (message) => {
        console.log(message);
      },
    });
  }

  // validaciones formulario
  isValidField(field: string) {
    return this.validatorsService.isValidField(this.newTaskForm, field);
  }
  getFieldError(field: string) {
    return this.validatorsService.getFieldError(this.newTaskForm, field);
  }
}
