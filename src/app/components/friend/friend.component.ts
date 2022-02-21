import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Friend } from './friend';
import { PageService } from 'src/app/share/page.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css'],
})
export class FriendComponent implements OnInit {
  friend: Friend;
  friends: Friend[] = [];
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

  changeDefaultName(arg: string) {
    this.friend.name = arg;
  }

  submitFormHandler(f: FormGroup) {
    this.friend.name = f.get('FriendName')?.value;
    this.friend.name = f.get('FriendEmail')?.value;
    this.friend.name = f.get('FriendAge')?.value;
    let form_record = new Friend(
      f.get('FriendName')?.value,
      f.get('FriendEmail')?.value,
      f.get('FriendAge')?.value
    );
    this.friends.push(form_record);
  }
}
