import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subscribeFilter'
})
export class SubscribeFilterPipe implements PipeTransform {
  transform(data :any ,filterValue: boolean): any {
    if(!filterValue) return data;
    else return data.filter(item=>item.HasAccess)
  }

}
