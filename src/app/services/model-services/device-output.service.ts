import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConnectionService} from '../connection.service';
import {DeviceOutput} from '../../shared/models/deviceOutput';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceOutputService {
  private apiUrl;
  constructor(private httpClient: HttpClient,
              private connectionService: ConnectionService) {
    this.apiUrl = this.connectionService.getConnectionUrl() + 'deviceoutput';
  }

  getDeviceOutputs(): Observable<DeviceOutput[]> {
    return this.httpClient
      .get<DeviceOutput[]>(this.apiUrl);
  }

  getDeviceOutputById(id: string): Observable<DeviceOutput> {
    return this.httpClient
      .get<DeviceOutput>(this.apiUrl + '/' + id);
  }

  createDeviceOutput(output: DeviceOutput){
    return this.httpClient
      .post<DeviceOutput>(this.apiUrl, JSON.stringify(output));
  }

  updateDeviceOutput(output: DeviceOutput) {
    return this.httpClient
      .put<DeviceOutput>(this.apiUrl + '/' + output.id, JSON.stringify(output));
  }

  deleteDeviceOutput(output: DeviceOutput){
    return this.httpClient
      .delete<DeviceOutput>(this.apiUrl + '/' + output.id);
  }
}
