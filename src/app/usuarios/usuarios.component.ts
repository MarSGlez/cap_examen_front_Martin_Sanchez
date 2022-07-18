import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public array: any = [];



  constructor(private service: UsuarioService) { }

  ngOnInit(){
      return this.service.getUser().subscribe(
        result => {
          this.array = result
        },
        error => {
            console.log(error);
        }
     );
  }

}
