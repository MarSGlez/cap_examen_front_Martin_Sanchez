import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [
  { path: 'usuarios', redirectTo: 'usuarios/index', pathMatch: 'full'},
  { path: 'usuarios/index', component: UsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
