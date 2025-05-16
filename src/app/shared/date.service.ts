import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {format, startOfMonth, startOfYesterday} from "date-fns";

@Injectable({
  providedIn: 'root'
})
export class DateService {
  dateRange = new BehaviorSubject<any>({start: format(startOfMonth(new Date()), 'yyyy-MM-dd'), end: format(startOfYesterday(), 'yyyy-MM-dd')});
  compareDateRange = new BehaviorSubject<any>({start: format(startOfMonth(new Date()), 'yyyy-MM-dd'), end: format(new Date(), 'yyyy-MM-dd')});
  showCompare = new BehaviorSubject<boolean>(false);

  constructor() {}

}
