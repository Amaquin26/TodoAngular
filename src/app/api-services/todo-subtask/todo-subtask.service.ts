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

  addTodoSubtasksByTodoTaskId(addTodoSubtask: {
    todoTaskId: number,
    name: string
  }): Observable<number> {
    return this.http.post<number>(`${environment.todoApiBaseUrl}/TodoSubtask`, addTodoSubtask);
  }

  updateTodoSubtask(updateTodoSubtask: {
    id: number,
    name: string
  }){
    return this.http.put(`${environment.todoApiBaseUrl}/TodoSubtask`,updateTodoSubtask);
  }

  toggleTodoSubtaskCheckStatus(todoSubtaskId: number): Observable<boolean>{
    return this.http.patch<boolean>(`${environment.todoApiBaseUrl}/TodoSubtask/${todoSubtaskId}`, undefined);
  }

  deleteTodoSubtask(todoTaskId: number){
    return this.http.delete(`${environment.todoApiBaseUrl}/TodoSubtask/${todoTaskId}`);
  }
}
