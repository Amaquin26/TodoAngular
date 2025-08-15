import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoTask } from '../../models/todo-task/todo-task';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoTaskService {
  constructor(private http: HttpClient) {}

  getTodoTasks():Observable<TodoTask[]> {
    return this.http.get<TodoTask[]>(`${environment.todoApiBaseUrl}/TodoTask`);
  }

  getTodoTaskById(id: number): Observable<TodoTask> {
    return this.http.get<TodoTask>(`${environment.todoApiBaseUrl}/TodoTask/${id}`);
  }

  createTodoTask(addTodoTask: {
    title: string;
    description: string;
  }): Observable<number> {
    return this.http.post<number>(`${environment.todoApiBaseUrl}/TodoTask`, addTodoTask);
  }

  updateTodoTask(updateTodoTask: {
    id: number;
    title: string;
    description?: string;
  }): Observable<void> {
    return this.http.put<void>(`${environment.todoApiBaseUrl}/TodoTask`, updateTodoTask);
  }

  deleteTodoTask(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.todoApiBaseUrl}/TodoTask/${id}`);
  }
}
