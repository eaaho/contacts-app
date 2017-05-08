import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactAddress'
})
export class ContactAddressPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
