import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  subject = new Subject();

  constructor() { }

  // tslint:disable-next-line:typedef
  setMessage(msg)
  {
    this.subject.next(msg);
  }

  // tslint:disable-next-line:typedef
  getMessage()
  {
    return this.subject.asObservable();
  }
}
