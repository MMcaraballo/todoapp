import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace' // TODO: nombre del pipe ==> replaceSpace
})
export class ReplaceSpacePipe implements PipeTransform {

  // TODO: nickname hola soy pepe ==> hola-soy-pepe
  transform(value: string, args: string): string {
    // TODO: podemos indicar tambien que los argumentos sean opcionales usando un ? despues del nombre del argumento
    console.log({value});
    value = value.split(' ').join(args).toLocaleLowerCase()
    return value;
  }

}
