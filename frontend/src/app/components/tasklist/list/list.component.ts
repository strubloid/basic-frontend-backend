import { Component, OnInit } from '@angular/core';
import { Task } from '../../tasklist/Task';
import { TasklistService } from "../../../service/tasklist.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private tasklistService: TasklistService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  /**
   * This will load all tasks from Laravel Project
   */
  loadTasks()
  {
    this.tasklistService.getTasks().subscribe((all) => {
      this.tasks = all;
      console.log(this.tasks);
    });
  }

}
