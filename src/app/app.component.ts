import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { formatDate } from '@fullcalendar/angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calendarOptions: CalendarOptions = { 
    weekends: false, // initial value
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'Meeting with Siddhu for development', date: '2020-07-02' },
      { title: 'Dvelopment ends', date: '2020-07-05' },
      { title: 'Testing starts', date: '2020-07-06' },
      { title: 'Testing ends', date: '2020-07-10' },
      { title: 'UAT starts', date: '2020-07-11' },
      { title: 'UAT ends', date: '2020-07-13' },

      { title: 'dummy event', date: '2020-06-13' },
      { title: 'dummy event', date: '2020-06-01' },
      { title: 'UAT ends', date: '2020-06-21' },

      { title: 'dummy event', date: '2020-08-13' },
      { title: 'dummy event', date: '2020-08-01' },
      { title: 'dummy event', date: '2020-08-21' },
      
      { title: 'dummy event', date: '2020-09-10' },
      { title: 'dummy event', date: '2020-09-05' },
      { title: 'dummy event', date: '2020-09-29' },
  
    ]
  };

    str = formatDate(new Date(), {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  });
  
  
  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }
  handleDateClick(arg) {
    alert('date clicked ' + arg.dateStr)
  }
  title = 'calendarApp';
}
