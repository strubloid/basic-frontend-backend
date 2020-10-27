import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../Task';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() task: Task;

  constructor() { }

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
}
