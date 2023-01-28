import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceSpacePipe } from './pipes/replace-space.pipe';



@NgModule({
  declarations: [
    ReplaceSpacePipe
  ],
  imports: [
    CommonModule
  ],
  // TODO: esto lo hacemos con el objetivo de poder acceder a los recursos de este modulo como lo es el pipe replaceSpace a otros modulos
  // * Primero se debe declarar y luego se exporta
  exports: [
    ReplaceSpacePipe
  ],
  // TODO: aqui vamos a indicar todas las directivas que queremos como provedores
  providers: [
    ReplaceSpacePipe
  ]
})
export class SharedModule { }
