import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login(event)
  {
    event.preventDefault();
    const target = event.target;

    // Getting all values from the form
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    // just a quick validation
    if (username === password){
      window.location.href = 'tasklist';
    }

    // If you want to check the passed value
    // console.log(username);
    // console.log(password);
  }

}
