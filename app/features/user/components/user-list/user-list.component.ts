import { Component, OnInit, Input } from "@angular/core";

import { UserService } from "../../user.service";

@Component({
  selector: "user-list",
  templateUrl: "./user-list.component.html",
})
export class UserListComponent implements OnInit {
  @Input() data;

  constructor(private userService: UserService) {}

  ngOnInit() {}

  handleEdit(event) {
    this.userService.updateUser(event).subscribe((data) => {
      this.data = this.data.map((user) => {
        if (user.id === event.id) {
          user = Object.assign({}, user, event);
        }
        return user;
      });
    });
  }

  handleDelete(event) {
    this.userService.deleteUser(event).subscribe((data) => {
      this.data = this.data.filter((user) => {
        return user.id !== event.id;
      });
    });
  }
}
