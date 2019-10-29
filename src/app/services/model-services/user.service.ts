import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConnectionService} from '../connection.service';
import {Observable} from 'rxjs';
import {User} from '../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private apiUrl;
  constructor(private httpClient: HttpClient,
              private connectionService: ConnectionService) {
    this.apiUrl = this.connectionService.getConnectionUrl() + 'user';
  }
  getUsers(): Observable<User[]> {
    return this.httpClient
      .get<User[]>(this.apiUrl);
  }

  getUserId(id: string): Observable<User> {
    return this.httpClient
      .get<User>(this.apiUrl + '/' + id);
  }

  createUser(user: User){
    return this.httpClient
      .post<User>(this.apiUrl, JSON.stringify(user));
  }

  updateUser(user: User) {
    return this.httpClient
      .put<User>(this.apiUrl + '/' + user.id, JSON.stringify(user));
  }

  deleteUser(user: User){
    return this.httpClient
      .delete<User>(this.apiUrl + '/' + user.id);
  }
}
