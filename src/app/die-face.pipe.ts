import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dieFace'
})
export class DieFacePipe implements PipeTransform {

  transform(value): unknown {
    return (1 <= value && value <= 6) ? '⚀⚁⚂⚃⚄⚅'[value - 1] : value;
  }

}
