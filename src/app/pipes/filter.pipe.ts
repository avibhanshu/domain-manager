import { Pipe, PipeTransform } from '@angular/core';
import { Domain } from '../models/domain';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText: string) {
    if(!value.length || !searchText) {
      return value;
    }

    const domains: Domain[] = [];
    for (const domain of value) {
      if(domain['domain'].includes(searchText)) {
        domains.push(domain);
      }
    }
    return domains;
  }

}
