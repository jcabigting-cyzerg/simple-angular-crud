import { Component, OnInit } from "@angular/core";

import { UserService } from "../../user.service";

@Component({
  selector: "user",
  templateUrl: "user.component.html",
})
export class UserComponent implements OnInit {
  users: any[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data["data"];
    });
  }
}
