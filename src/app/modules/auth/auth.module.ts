import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './page/login-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [ // TODO: componentes, pipes, directivas
    LoginPageComponent
  ],
  imports: [ // TODO: otros modulos
    CommonModule,
    AuthRoutingModule,
    // TODO: como ya tenemos el modulo shared importado no es necesario pero en caso de tener un pipe componente o directiva de otro modulo que deseemos usar en este debemos importar el modulo al que pertenecen
    SharedModule
  ]
})
export class AuthModule { }
