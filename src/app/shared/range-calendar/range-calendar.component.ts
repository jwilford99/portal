import {Component, inject, input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {format, parseISO, startOfYesterday} from "date-fns";
import {DateService} from "../date.service";

@Component({
  selector: 'app-range-calendar',
  templateUrl: './range-calendar.component.html',
  styleUrls: ['./range-calendar.component.scss'],
  imports: [
    IonicModule
  ]
})
export class RangeCalendarComponent implements OnInit {
  type = input('');
  dateService = inject(DateService);
  calRange: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  handleDateRange(event: any) {
    let startDate = event.detail.value[0];
    let endDate = event.detail.value[1];

    if (event.detail.value[0] > event.detail.value[1]) {
      startDate = event.detail.value[1];
      endDate = event.detail.value[0];
    }

    this.getRange(startDate, endDate)

    if (event.detail.value.length > 2) {
      this.calRange = [];
    }
  }

  getRange(start: string, end: string) {
    for (const dt = parseISO(start); dt <= parseISO(end); dt.setDate(dt.getDate() + 1)) {
      this.calRange.push({
        date: format(new Date(dt), 'yyyy-MM-dd'),
        textColor: 'var(--ion-color-primary-contrast)',
        backgroundColor: 'var(--ion-color-primary)',
      });
    }

    this.setDateRange();
  }

  setDateRange() {
    if (this.calRange.length > 1) {
      let dates = {
        start: this.calRange[0]?.date,
        end: this.calRange[this.calRange.length - 1]?.date
      }
      this.type() === 'custom'
        ? this.dateService.dateRange.next(dates)
        : this.dateService.compareDateRange.next(dates)
    }
  }

  getMaxDate() {
    return format(startOfYesterday(), 'yyyy-MM-dd');
  }

  protected readonly startOfYesterday = startOfYesterday;
}
