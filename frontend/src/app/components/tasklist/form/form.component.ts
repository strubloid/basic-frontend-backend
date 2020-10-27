import { Component, OnInit } from '@angular/core';
import { TasklistService } from '../../../service/tasklist.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title: string;

  constructor(private ts: TasklistService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  Add(event)
  {
    event.preventDefault();

    // If you want to check the passed title value, you must:
    // console.log(this.title);

    // This is another way to catch the passed value
    // this.serverName = (event.target as HTMLInputElement).value;

    this.ts.addTask(this.title).subscribe((data) => {
      console.log('Task Added:');
    });

  }

}
