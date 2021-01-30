import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css'],
})
export class DateTimeComponent implements OnInit {
  currentDate = '';
  currentTime = '';
  constructor() {}

  ngOnInit(): void {
    this.getDate();
    this.getTime();
  }

  getDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    this.currentDate = dd + '-' + mm + '-' + yyyy;
  }

  getTime() {
    const time = new Date(); // for now
    const hh = String(time.getHours()).padStart(2, '0'); //
    const mm = String(time.getMinutes()).padStart(2, '0'); //
    const ampm = time.getHours() > 12 ? ' pm' : ' am';
    const timeNow = hh + ':' + mm + ampm.toUpperCase();
    this.currentTime = timeNow;
  }
}
