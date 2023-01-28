import { Component } from '@angular/core';
import { ReplaceSpacePipe } from '@shared/pipes/replace-space.pipe';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  // * Este nombre debe coincidir con el que se le pone en la vista
  value = 'Hola Mundo';

  // TODO: Llamo a un constructor para acceder al pipe
  constructor(private replaceSpace:ReplaceSpacePipe) {

  }

  // TODO: con esta función indico todo lo que se tiene que hacer el momento en el que se inicia el componente
  ngOnInit():void {
    // TODO: si dejo esto asi sin indicar el pipe como un provedor nos dara un error en la consola del navegador
    // * Para indicar el provedor lo hacemos desde el modulo de donde viene el provedor, en este caso, el modulo que está asociado al pipe
    this.value = this.replaceSpace.transform(this.value, '-');
  }

}
