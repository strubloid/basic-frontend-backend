import { Component, OnInit } from '@angular/core';
import { TasklistService } from '../../../service/tasklist.service';
import { MessageService } from '../../../service/message.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title: string;
  formSubmitted: boolean = false;

  constructor(
    private ts: TasklistService, private msg: MessageService
  ){

  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  Add(event)
  {
    event.preventDefault();
    this.formSubmitted = true;

    // If you want to check the passed title value, you must:
    // console.log(this.title);

    // This is another way to catch the passed value
    // this.serverName = (event.target as HTMLInputElement).value;

    this.ts.addTask(this.title).subscribe((data) => {
      console.log('Task Added:');
      this.title='';
      this.formSubmitted = false;
      this.msg.setMessage('Task Added');
    });

  }

}
