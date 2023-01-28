import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateSessionGuard implements CanActivate {
  private cookie: string | null = 'null'; // TODO: Estes es la cookie que consultaremos al navegador cuandgo hagamos loggin

  // * Creamos un constructor, ya que, queremos acceder al router de tal manera que podamos dar respuesta en caso de que el usuario no cumpla con los requisitos para acceder a la ruta
  constructor(private router:Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookie();
    // return true; // TODO: (true | false)
  }

  private checkCookie():boolean {
    // TODO: con esto mostramos la data que contiene la ruta
    console.log(`Aqui ta ${this.cookie}`);
    // return (this.cookie !== null) // TODO: esto retorna True | False

    if(this.cookie !== null) {
      return true;
    } else {
      // * Permite redirigir a la ruta que especifiques
      this.router.navigate(['/', 'auth', 'login']);
      return false;
    }
  }
  
}
