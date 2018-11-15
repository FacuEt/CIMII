
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';


let counter = 0;

@Injectable()
export class UserService {

  private users = {
    nick: { name: 'Nicolas Veira', picture: 'assets/images/nick.png' },
    eva: { name: 'Eva Molinari', picture: 'assets/images/eva.png' },
    jack: { name: 'Pedro Guerra', picture: 'assets/images/jack.png' },
    lee: { name: 'Macarena Ruiz', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan Landriel', picture: 'assets/images/alan.png' },
    kate: { name: 'Julia Martinez', picture: 'assets/images/kate.png' },
  };

  private userArray: any[];

  constructor() {
    // this.userArray = Object.values(this.users);
  }

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getUserArray(): Observable<any[]> {
    return observableOf(this.userArray);
  }

  getUser(): Observable<any> {
    counter = (counter + 1) % this.userArray.length;
    return observableOf(this.userArray[counter]);
  }
}
