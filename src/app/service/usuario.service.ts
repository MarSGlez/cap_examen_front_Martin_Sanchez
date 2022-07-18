import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiURL = "http://prueba.test/";

  constructor(private httpClient: HttpClient) { }

  getUser() {
    return this.httpClient.get(`${this.apiURL}user`);
  }
}
