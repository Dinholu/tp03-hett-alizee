import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'devise'
})
export class DevisePipe implements PipeTransform {

  transform(value: number): string {
    const formattedPrice = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);
    return formattedPrice;
  }

}
