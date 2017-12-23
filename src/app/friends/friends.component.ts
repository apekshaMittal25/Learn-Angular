import { Component, OnInit } from '@angular/core';
import { Friends } from '../friends';
import { Http} from '@angular/http';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(http: Http) {
    http.get('http://www.mocky.io/v2/5a3e04b42f0000a20417133c')
      .subscribe((response) => 
        { 
            this.friends = response.json();
        },
        error => console.log(error));
  }

  //friends = FRIENDS;
  friends;
  public filterQuery = "";
  selectedFriend: Friends;

  ngOnInit() {
  }

  onSelect(friend: Friends): void {
    this.selectedFriend = friend;
  }

}


