import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DateService} from "../shared/date.service";
import {format, parseISO} from "date-fns";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {
  public section!: string;
  start: string = ''
  end: string = ''
  compareStart: string = ''
  compareEnd: string = ''
  dateService = inject(DateService)
  private activatedRoute = inject(ActivatedRoute);
  constructor() {
    this.dateService.dateRange.subscribe((v) => this.formatDates(v))
    this.dateService.compareDateRange.subscribe((v) => this.formatCompareDates(v))
  }

  ngOnInit() {
    this.section = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  protected readonly format = format;

  private formatDates(v: any) {
    this.start = format(parseISO(v.start), 'MMM dd, yyyy');
    this.end = format(parseISO(v.end), 'MMM dd, yyyy');
  }

  private formatCompareDates(v: any) {
    this.compareStart = format(parseISO(v.start), 'MMM dd, yyyy');
    this.compareEnd = format(parseISO(v.end), 'MMM dd, yyyy');
  }
}
