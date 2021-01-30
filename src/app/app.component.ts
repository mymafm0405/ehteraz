import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nameSet = false;
  firstName = '';
  lastName = '';

  onSubmit(form: NgForm) {
    this.nameSet = true;
    this.firstName = form.value.firstName;
    this.lastName = form.value.lastName;
  }
}
