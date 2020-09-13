import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    if (!path || path.trim().length ==0){
      return "tim_logo.png"
    }
    return path
  }

}
