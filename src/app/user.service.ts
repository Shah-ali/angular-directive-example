import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { share } from 'rxjs/operators';

export class User {
  id: number;
  name: string;
}

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

 
  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos').pipe(
      map((response: Response)=>response), share()
    )
  }

  getUsers(): Promise<User[]> {
    return Promise.resolve([
      { id: 1, name: 'Maria' },
      { id: 2, name: 'Alex' },
      { id: 3, name: 'Chuntao' },
      { id: 4, name: 'Béatrice' },
      { id: 5, name: 'Sarah' },
      { id: 6, name: 'Andrés' },
      { id: 7, name: 'Abdul' },
      { id: 8, name: 'Pierre' },
      { id: 9, name: 'Jiao' },
      { id: 10, name: 'Seth' }
    ]);
  }



}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/