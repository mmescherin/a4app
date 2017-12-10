import { Component, OnInit } from '@angular/core';
import { DataService, DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: Post[];
  isEdit: boolean;

  constructor(private dataService: DataService) {
    this.isEdit = false;
    console.log('============= constructor');
   }

  ngOnInit() {
    console.log('============= ngOnInit');
    this.name = 'Michael';
    this.age = 105;
    this.email = 'test@test.com';
    this.address = {
      street: '56 Lenina st',
      city: 'Volgograd',
      state: 'Russia'
    };
    this.hobbies = ['Do nothing', 'Skeiting', 'Wolking', 'Runing'];

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onClick() {
    this.name = 'Frans Cafka';
  }

  addHobby(hobby: string) {
    if (hobby) {
      this.hobbies.unshift(hobby.trim());
    }
    return false;
  }

  deleteHobby(ind) {
    this.hobbies.splice(ind, 1);
  }

  togleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
