import { Pipe, PipeTransform } from '@angular/core';
import { TODO } from './todo';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(task: TODO[], searchText: string | null) {

    if (!searchText) {
      return task;
    }
    return task.filter((task:TODO ) => task.task.includes(searchText));
     
  }

  
}
