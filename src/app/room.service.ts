import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './models/Room';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  constructor(private readonly _httpClient: HttpClient) { }

  getAll(): Observable<Room[]> {
    return this._httpClient.get<Room[]>("http://localhost:8080/api/room");
  }
}

