import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateSessionGuard } from '@core/guards/validate-session.guard';

const routes: Routes = [
  {
    path: 'auth', //TODO: Public!
    loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'task', //TODO: Private
    loadChildren: () => import('@modules/task/task.module').then((m) => m.TaskModule),
    canActivate: [ValidateSessionGuard] // TODO: aqui podemos añadir todos los guardianes que esten relacionados con esta ruta
  }
  // {
  //   // * Desde aqui lo que hacemos es cargar el modulo que a su vez contiene su propio router. Desde ese router es que llamaremos a los componenetes
  //   path: 'auth',   //TODO: http://localhost:4200/auth
  //   loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule)
  // },
  // {
  //   path: 'task',
  //   loadChildren: () => import('@modules/task/task.module').then((m) => m.TaskModule)
  // }
  // {
  //   path: '',
  //   component:HomeComponent,
  //   children: [
  //     {
  //       path: 'one',
  //       component: HomeChildOneComponent
  //     },
  //     {
  //       path: 'two',
  //       component: HomeChildTwoComponent
  //     }
  //   ]
  // }
  // {
  //   path: '', // * Si no colocamos nada entonces estaría haciendo referencia a -> localhost:4200//
  //   component: TestCopmponentComponent
  // },
  // {
  //   path: 'test-component', // * podemos enlazar varias rutas a un mismo componente
  //   component: TestCopmponentComponent
  // },
  // {
  //   path: '**',
  //   component: Page404Component
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
