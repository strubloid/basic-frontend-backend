import { Component, OnInit } from '@angular/core';
import { Task } from '../../tasklist/Task';
import { TasklistService } from '../../../service/tasklist.service';
import { MessageService } from '../../../service/message.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private tasklistService: TasklistService,
    private msg: MessageService
  ) {

  }

  ngOnInit(): void {
    this.loadTasks();

    this.msg.getMessage().subscribe((data) => {
      this.loadTasks();
    });
  }

  /**
   * This will load all tasks from Laravel Project
   */
  loadTasks()
  {
    this.tasklistService.getTasks().subscribe((all) => {
      this.tasks = all;
      // If you want to check all tasks
      // console.log(this.tasks);
    });
  }

}
