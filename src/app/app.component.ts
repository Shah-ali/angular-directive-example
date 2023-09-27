import { Component, OnInit } from '@angular/core';

import { User, UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'Users list';
  users: User[] =[];

  a = [1,2,3,4,6,7]
subscription: any;  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getData();
    this.getData();
    this.userService.getUsers().then(users => this.users = users);

  const a= this.a.map((data: any) =>{
      if(data % 2 ==0){
        return data * data;
      } else {
        return data;
      }
    });

    console.log(a)
  }

  getData(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
   this.subscription=  this.userService.getData().subscribe(res=>{
      console.log('###', res)
    })
  }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/