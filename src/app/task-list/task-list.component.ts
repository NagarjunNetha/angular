import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks!: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // this.getTasks();
    this.performAuthentication();
  }

  // private getTasks() {
  //   this.taskService.getTaskList().subscribe((data: Task[]) => {
  //     this.tasks = data;
  //   });
  // }
 
  performAuthentication() {
    const username = 'yourUsername'; // Replace with your actual username
    const password = 'yourPassword'; // Replace with your actual password

    this.taskService.performBasicAuthentication(username, password)
      .subscribe(
        response => {
          console.log('Authentication successful', response);
          // Handle successful authentication, e.g., redirect to a secured page.
        },
        error => {
          console.error('Authentication failed', error);
          // Handle authentication failure, e.g., display an error message.
        }
      );
  }
   

}
