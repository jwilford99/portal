import {Pipe, PipeTransform} from '@angular/core';
import {Keys} from "./display-keys";

@Pipe({
  name: 'dataKey',
  standalone: true
})
export class DataKeyPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let displayKey = Keys.lookup(value);
    return displayKey.value;
  }

}
