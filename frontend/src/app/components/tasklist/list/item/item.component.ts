import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';
import { formatDate } from '@angular/common';
import { TasklistService  } from '../../../../service/tasklist.service';
import { MessageService } from '../../../../service/message.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() task: Task;

  constructor(private tls: TasklistService,  private msg: MessageService) { }

  ngOnInit(): void {
  }

  /**
   * This will return what is the correct datetime that was
   * stored into database the task.
   * @param task
   */
  getTime = (task) =>
  {
    const format = 'h:m dd/MM/yyyy';
    const locale = 'en-US';
    const formattedDate = formatDate(task.date, format, locale);

    // console.log(formattedDate);
    return formattedDate;
  }

  /**
   * This will remove an element from the list of tasks.
   */
  deleteItem = () =>
  {
    // console.log(this.task.id);
    this.tls.delete(this.task.id).subscribe((data) => {
      console.log('Task deleted: ' + data.id);
      this.msg.setMessage('Task Deleted');
    });
  }
}
