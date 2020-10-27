import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasklistService } from '../../../service/tasklist.service';
import { Task } from '../Task';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  task: Task;
  constructor(
    private route: ActivatedRoute,
    private tls: TasklistService
  ) {
  }

  ngOnInit(): void
  {
    this.route.params.subscribe((data) => {
      this.tls.getOne(data.id).subscribe((foundTask) => {
        this.task = foundTask;
        // console.log(foundTask);
        console.log(this.task.title);
      });
    });
  }

}
