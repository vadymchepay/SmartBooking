import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public selectSource: string;
  public selectTarif: string;
  public selectRoom: string;
  public StartDate: Date;
  public EndDate: Date;

  public onStartDate(event) {
    console.log(event);
  }

  public onEndDate(event) {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
