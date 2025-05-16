import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {IonicModule, IonSelect} from "@ionic/angular";
import {
  differenceInDays,
  endOfMonth,
  format, isToday,
  parseISO,
  startOfMonth,
  startOfYesterday,
  subDays,
  subMonths, subYears
} from "date-fns";
import {FormsModule} from "@angular/forms";
import {DateService} from "../date.service";
import {RangeCalendarComponent} from "../range-calendar/range-calendar.component";

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    RangeCalendarComponent
  ]
})
export class DateRangeComponent implements OnInit {
  protected readonly format = format;
  protected readonly parseISO = parseISO;
  @ViewChild('compareSelect', {static: false}) selectRef: IonSelect | undefined;
  dateService = inject(DateService);
  public dates = {start: format(startOfMonth(new Date()), 'yyyy-MM-dd'), end: format(startOfYesterday(), 'yyyy-MM-dd')}
  public compareDates = {start: format(startOfMonth(new Date()), 'yyyy-MM-dd'), end: format(new Date(), 'yyyy-MM-dd')}
  public today = format(new Date(), 'yyyy-MM-dd');
  public showCustom: boolean = false;
  public showCompare: boolean = false;
  public showCompareCal: boolean = false;
  alertOptions = {
    header: 'Select Date Range Option'
  }
  customAlertOptions = {
    header: 'Select Comparison Date Range'
  }


  public rangeList = [
    {value: 'last7', viewValue: 'Last 7 Days'},
    {value: 'last30', viewValue: 'Last 30 Days'},
    {value: 'mtd', viewValue: 'Month To Date'},
    {value: 'lastMonth', viewValue: 'Last Month'},
    {value: 'lifetime', viewValue: 'Lifetime'},
    {value: 'custom', viewValue: 'Custom'},
    {value: 'compare', viewValue: 'Compare'},
  ]

  public compareRangeList = [
    {value: 'reset', viewValue: 'Reset Comparison'},
    {value: 'previousPeriod', viewValue: 'Previous Period'},
    {value: 'previousMonth', viewValue: 'Previous Month'},
    {value: 'previousYear', viewValue: 'Previous Year'},
    {value: 'custom', viewValue: 'Custom'},
  ]

  constructor() {
    this.handleMaxDate();
  }

  ngOnInit() {}

  onChange(event: any) {
    let selection = event.detail.value;
    this.showCompare = false;
    this.showCustom = false;

    switch (selection) {
      case 'last7':
        this.getLast7();
        break;
      case 'last30':
        this.getLast30();
        break;
      case 'mtd':
        this.getMTD();
        break;
      case 'lastMonth':
        this.getLastMonth();
        break;
      case 'lifetime':
        this.getLifetime();
        break;
      case 'custom':
        this.showCustom = true;
        break;
      case 'compare':
        this.selectRef && this.selectRef.open();
        this.showCompare = true;
        break;
      default:
        this.getMTD();
    }
    this.dateService.dateRange.next(this.dates);
    this.handleMaxDate()
  }

  handleMaxDate() {
    let max = format(startOfYesterday(), 'yyyy-MM-dd');
    if (isToday(parseISO(this.dates.end))) {
      this.dateService.dateRange.next({start: this.dates.start, end: max})
    }
  }

  private getMTD() {
    this.dates = {start: format(startOfMonth(new Date()), 'yyyy-MM-dd'), end: format(new Date(), 'yyyy-MM-dd')}
  }

  private getLast7() {
    this.dates.start = format(subDays(new Date(), 7), 'yyyy-MM-dd');
    this.dates.end = format(new Date(), 'yyyy-MM-dd');
  }

  private getLast30() {
    this.dates.start = format(subDays(new Date(), 30), 'yyyy-MM-dd');
    this.dates.end = format(new Date(), 'yyyy-MM-dd');
  }

  private getLastMonth() {
    this.dates.start = format(startOfMonth(subMonths(new Date(), 1)), 'yyyy-MM-dd');
    this.dates.end = format(endOfMonth(subMonths(new Date(), 1)), 'yyyy-MM-dd');
  }

  private getLifetime() {
    this.dates.start = 'dates';
    this.dates.end = 'not available';
  }

  onCompareChange(event: any) {
    let selection = event.detail.value;
    this.showCompareCal = false;
    switch (selection) {
      case 'reset':
        this.resetComparison();
        break;
      case 'previousPeriod':
        this.getPreviousPeriod();
        break;
      case 'previousMonth':
        this.getPreviousMonth();
        break;
      case 'previousYear':
        this.getPreviousYear();
        break;
      case 'custom':
        this.showCompareCal = true;
        break;
      default:
        this.getMTD();
    }
    this.dateService.showCompare.next(!!selection);
    this.dateService.compareDateRange.next(this.compareDates);
  }

  private resetComparison() {
      this.dateService.compareDateRange.next(null);
      this.showCompare = false;
  }

  private getPreviousPeriod() {
      let dates = this.dateService.dateRange.value;
      let diff = differenceInDays(new Date(dates.end), new Date(dates.start)) + 1;
      let compStart = format(subDays(parseISO(dates.start), diff), 'yyyy-MM-dd');
      let compEnd = format(subDays(parseISO(dates.start), 1), 'yyyy-MM-dd');
      this.compareDates = {start: compStart, end: compEnd};
  }

  private getPreviousMonth() {
      let compStart = format(subMonths(parseISO(this.dateService.dateRange.value.start), 1), 'yyyy-MM-dd');
      let compEnd = format(subMonths(parseISO(this.dateService.dateRange.value.end), 1), 'yyyy-MM-dd');
      this.compareDates = {start: compStart, end: compEnd};
  }

  private getPreviousYear() {
    let compStart = format(subYears(parseISO(this.dateService.dateRange.value.start), 1), 'yyyy-MM-dd');
    let compEnd = format(subYears(parseISO(this.dateService.dateRange.value.end), 1), 'yyyy-MM-dd');
    this.compareDates = {start: compStart, end: compEnd};
  }
}

