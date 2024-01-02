import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseURL = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  // getTaskList(): Observable<Task[]> {
  //   return this.httpClient.get<Task[]>(`${this.baseURL}`);
  // }

  performBasicAuthentication(username: string, password: string): Observable<any> {
    const headers = {
      'Authorization': 'Basic ' + btoa(username + ':' + password)
    };

    return this.httpClient.get(`${this.baseURL}/api/tasks`, { headers });
  }



}
