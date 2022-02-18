import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Friend } from './friend';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css'],
})
export class FriendComponent implements OnInit {
  friend: Friend;
  friendForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.friend = new Friend('bob', 'bob@gmail.com', 42);
    this.friendForm = this.fb.group({
      FriendName: [''],
      FriendEmail: [''],
      FriendAge: [''],
    });
  }

  ngOnInit(): void {}
  changeDefaultName() {
    this.friend.name = this.friendForm.value.FriendName;
    this.friend.email = this.friendForm.value.FriendEmail;
    this.friend.age = this.friendForm.value.FriendAge;
  }
}
