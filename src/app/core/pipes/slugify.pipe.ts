import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugify'
})
export class SlugifyPipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value) return '';
    return value
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '_');
  }
}
