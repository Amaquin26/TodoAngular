import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoSubtask } from '../../models/todo-subtask/todo-subtask';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoSubtaskService {
  constructor(private http: HttpClient) {}

  getTodoSubtasksByTodoTaskId(todoTaskId: number): Observable<TodoSubtask[]> {
    return this.http.get<TodoSubtask[]>(`${environment.todoApiBaseUrl}/TodoSubtask/task/${todoTaskId}`);
  }
}
