import { Component, OnInit } from "@angular/core";
import { UserService } from "../../user.service";
import { Router, ActivatedRoute } from "@angular/router";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "rxjs/add/operator/switchMap";

@Component({
  selector: "user-single",
  templateUrl: "./user-single.component.html",
})
export class UserSingleComponent implements OnInit {
  user: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((data) => this.userService.getUser(data["id"]))
      .subscribe((data) => (this.user = data["data"]));
  }

  handleUpdate(event) {
    this.userService.updateUser(event).subscribe((data) => {
      this.user = data;
      Swal.fire({
        type: "success",
        icon: "success",
        title: "SUCCESS!",
        text: "The user has been updated.",
      });
    });
  }
}
