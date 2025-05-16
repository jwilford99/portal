import { Injectable } from '@angular/core';
import {Keys} from "./display-keys";

@Injectable({
  providedIn: 'root'
})
export class NumberFormatService {

  constructor() { }

  getValue(d: number | any, c: string | any): unknown {
    let type = Keys.lookup(c).type;

    const currency = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    const percent = new Intl.NumberFormat('en-US', {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    })

    switch (type) {
      case 'percent':
        return `${percent.format(d[c])}`;
      case 'currency':
        return `${currency.format(d[c])}`;
      case 'number':
        return `${new Intl.NumberFormat('en-US').format(d[c])}`;
      default:
        return d[c];
    }
  }
}
