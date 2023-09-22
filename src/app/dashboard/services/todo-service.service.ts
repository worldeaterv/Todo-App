import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroments } from 'src/enviroments/enviroments';
import { map, Observable } from 'rxjs';
import { Tasks } from '../interfaces/tasks.interface';
import { CreateTask } from '../interfaces/create-task.interface';
import { CreateTaskResponse } from '../interfaces/create-task-response.inteface';
import { EditTask } from '../interfaces/edit-task.interface';
import { EditTaskResponse } from '../interfaces/edit-task-response.interface';
import { DeleteTaskResponse } from '../interfaces/delete-task-response.inteface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly baseUrl: string = enviroments.baseUrl;
  private readonly apiPath: string = enviroments.apiPath;
  private http = inject(HttpClient);

  constructor() {}

  getTasks(): Observable<Tasks[]> {
    const url = this.baseUrl + this.apiPath + '/mis-tareas';
    return this.http
      .get<{ tareas: Tasks[] }>(url)
      .pipe(map((response) => response.tareas));
  }

  getTaskById(id: string): Observable<Tasks> {
    const url = this.baseUrl + this.apiPath + `/tarea/${id}`;

    return this.http.get<Tasks>(url);
  }

  postTask(createTask: CreateTask): Observable<CreateTaskResponse> {
    const body = createTask;
    const url = this.baseUrl + this.apiPath + '/crear-tarea';

    return this.http.post<CreateTaskResponse>(url, body);
  }

  editTask(id: string, editTask: EditTask): Observable<EditTaskResponse> {
    const body = editTask;
    const url = this.baseUrl + this.apiPath + `/editar-tarea/${id}`;

    return this.http.patch<EditTaskResponse>(url, body);
  }

  deleteTask(id: string): Observable<DeleteTaskResponse> {
    const url = this.baseUrl + this.apiPath + `/borrar-tarea/${id}`;

    return this.http.delete<DeleteTaskResponse>(url);
  }

  deleteAllTasksCompleted() {
    const url = this.baseUrl + this.apiPath + `/borrar-tareas-completadas`;

    return this.http.delete(url);
  }

  changeTaskState(id: string) {
    const url = this.baseUrl + this.apiPath + `/estado-tarea/${id}`;

    return this.http.patch(url, {});
  }
}
