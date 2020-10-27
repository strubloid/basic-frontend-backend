import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Task } from '../components/tasklist/Task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {

  server = 'http://localhost:4100/';
  headers: Headers = new Headers();
  options: any;

  constructor(private http: HttpClient) {
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');

    this.options = new RequestOptions({headers: this.headers});
  }

  // @ts-ignore
  // tslint:disable-next-line:ban-types
  addTask(title): Observable<Object> {
    const newTask = new Task(title);
    return this.http.post<Task>(this.server + 'add', newTask);
  }

  /**
   * This will load all tasks from Laravel Project
   */
  getTasks(): Observable<Task[]>
  {
    return this.http.get<Task[]>(this.server + 'get');
  }

  /**
   * This will delete a specific task.
   * @param taskId
   */
  delete(taskId): Observable<Task>
  {
    const searchTask = {
      id: taskId,
      title: 'not set',
      status: false,
      date : new Date()
    };

    return this.http.post<Task>(this.server + 'delete', searchTask);
  }

  getOne(taskId): Observable<Task>
  {
    const searchTask = {
      id: taskId,
      title: 'not set',
      status: false,
      date : new Date()
    };

    return this.http.post<Task>(this.server + 'getone', searchTask);
  }

}
