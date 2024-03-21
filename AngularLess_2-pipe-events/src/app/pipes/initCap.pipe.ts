import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'initcap',
  standalone: true
})
export class InitCapPipe implements PipeTransform {
  transform(value: string): string {
      return value[0].toUpperCase() + value.slice(1).toLowerCase();
  }
}