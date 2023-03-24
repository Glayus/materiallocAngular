import { Component } from '@angular/core';
import { Room } from 'src/app/models/Room';
import { RoomServiceService } from 'src/app/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent {

  roomList!: Room[]

  constructor(private readonly _roomservice: RoomServiceService) { }

  ngOnInit(): void {
    this._roomservice.getAll().subscribe({
      next: data => this.roomList = data,
      error: console.error

    })
  }

}
