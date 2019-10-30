import { Injectable } from '@angular/core';
import { ConnectionService } from './connection.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDTO } from '../shared/models/loginDTO.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private connection: ConnectionService,
    private http: HttpClient
  ) {}

  apiUrl = this.connection.getConnectionUrl() + 'login';

  login(dto: LoginDTO): Observable<any> {
    return this.http.post<any>(this.apiUrl, dto);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
