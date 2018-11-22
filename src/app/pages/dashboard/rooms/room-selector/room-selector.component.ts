import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ngx-room-selector',
  templateUrl: './room-selector.component.html',
  styleUrls: ['./room-selector.component.scss'],
})
export class RoomSelectorComponent {
  @Output() select: EventEmitter<number> = new EventEmitter();

  selectedRoom: null;
  sortedRooms = [];
  viewBox = '-20 -20 618.88 407.99';
  isIE = !!(navigator.userAgent.match(/Trident/)
            || navigator.userAgent.match(/MSIE/)
            || navigator.userAgent.match(/Edge/));
  isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') >= 0;
  roomSvg = {
    borders: [],
    stokedAreas: [
      { d: 'M 0 225 L 0 175 L 590 175 L 590 225 L 0 225 L 0 225 Z' },
    ],
    rooms: [
      {
        id: '0',
        name: { text: 'Cochera A1', x: 50, y: 100 },
        state: 'Ocupada',
        patente: 'OOY 741',
        area: { d: 'M 50 175 L 0 175 L 0 0 L 100 0 L 100 175 L 75 175 Z' },
        border: { d: 'M 25 175 L 0 175 L 0 0 L 100 0 L 100 175 L 75 175' },
      },
      {
          id: '1',
          name: { text: 'Cochera A2', x: 150, y: 100 },
          state: 'Libre',
          patente: '',
          area: { d: 'M 125 175 L 100 175 L 100 0 L 200 0 L 200 175 L 175 175 Z' },
          border: { d: 'M 125 175 L 100 175 L 100 0 L 200 0 L 200 175 L 175 175' },
      },
      {
          id: '2',
          name: { text: 'Cochera A3', x: 250, y: 100 },
          state: 'Ocupada',
          patente: 'AB 123 CD',
          area: { d: 'M 225 175 L 200 175 L 200 0 L 300 0 L 300 175 L 275 175 Z' },
          border: { d: 'M 225 175 L 200 175 L 200 0 L 300 0 L 300 175 L 275 175' },
      },
      {
          id: '3',
          name: { text: 'Cochera A4', x: 350, y: 100 },
          state: 'Ocupada',
          patente: 'AB 123 BF',
          area: { d: 'M 325 175 L 300 175 L 300 0 L 400 0 L 400 175 L 375 175 Z' },
          border: { d: 'M 325 175 L 300 175 L 300 0 L 400 0 L 400 175 L 375 175' },
      },
      {
          id: '4',
          name: { text: 'Cochera A5', x: 450, y: 100 },
          state: 'Libre',
          patente: '',
          area: { d: 'M 425 175 L 400 175 L 400 0 L 500 0 L 500 175 L 475 175 Z' },
          border: { d: 'M 425 175 L 400 175 L 400 0 L 500 0 L 500 175 L 475 175' },
      },
      {
          id: '5',
          name: { text: 'Cochera A6', x: 550, y: 100 },
          state: 'Libre',
          patente: '',
          area: { d: 'M 525 175 L 500 175 L 500 0 L 590 0 L 590 175 L 575 175 Z' },
          border: { d: 'M 525 175 L 500 175 L 500 0 L 590 0 L 590 175 L 575 175' },
      },
      {
          id: '6',
          name: { text: 'Cochera B1', x: 50, y: 300 },
          state: 'Libre',
          patente: '',
          area: { d: 'M 25 225 L 0 225 L 0 380 L 100 380 L 100 225 L 75 225 Z' },
          border: { d: 'M 25 225 L 0 225 L 0 380 L 100 380 L 100 225 L 75 225 ' },
      },
        {
            id: '7',
            name: { text: 'Cochera B2', x: 150, y: 300 },
            state: 'Ocupada',
            patente: 'CAI 666',
            area: { d: 'M 125 225 L 100 225 L 100 380 L 200 380 L 200 225 L 175 225 Z' },
            border: { d: 'M 125 225 L 100 225 L 100 380 L 200 380 L 200 225 L 175 225' },
        },
        {
            id: '8',
            name: { text: 'Cochera B3', x: 250, y: 300 },
            state: 'Ocupada',
            patente: 'AC 456 CD',
            area: { d: 'M 225 225 L 200 225 L 200 380 L 300 380 L 300 225 L 275 225 Z' },
            border: { d: 'M 225 225 L 200 225 L 200 380 L 300 380 L 300 225 L 275 225' },
        },
        {
            id: '9',
            name: { text: 'Cochera B4', x: 350, y: 300 },
            state: 'Ocupada',
            patente: 'FAQ 147',
            area: { d: 'M 325 225 L 300 225 L 300 380 L 400 380 L 400 225 L 375 225 Z' },
            border: { d: 'M 325 225 L 300 225 L 300 380 L 400 380 L 400 225 L 375 225' },
        },
        {
            id: '10',
            name: { text: 'Cochera B5', x: 450, y: 300 },
            state: 'Ocupada',
            patente: 'AB 123 LL',
            area: { d: 'M 425 225 L 400 225 L 400 380 L 500 380 L 500 225 L 475 225 Z' },
            border: { d: 'M 425 225 L 400 225 L 400 380 L 500 380 L 500 225 L 475 225' },
        },
        {
            id: '11',
            name: { text: 'Cochera B6', x: 550, y: 300 },
            state: 'Libre',
            patente: '',
            area: { d: 'M 525 225 L 500 225 L 500 380 L 590 380 L 590 225 L 575 225 Z' },
            border: { d: 'M 525 225 L 500 225 L 500 380 L 590 380 L 590 225 L 575 225' },
        },
    ],
  };

  constructor() {
    this.selectRoom('2');
  }

  private sortRooms() {
    this.sortedRooms = this.roomSvg.rooms.slice(0).sort((a, b) => {
      if (a.id === this.selectedRoom) {
        return 1;
      }
      if (b.id === this.selectedRoom) {
        return -1;
      }
      return 0;
    });
  }

  selectRoom(roomNumber) {
    this.select.emit(roomNumber);
    this.selectedRoom = roomNumber;
    this.sortRooms();
  }
}
