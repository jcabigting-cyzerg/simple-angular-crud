import { Component, OnInit } from "@angular/core";

@Component({
  selector: "site-header",
  templateUrl: "site-header.component.html",
})
export class SiteHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  nav = [
    {
      link: "/",
      name: "Home",
      exact: true,
    },
    {
      link: "/users",
      name: "Users",
      exact: false,
    },
    {
      link: "/oops",
      name: "404",
      exact: false,
    },
  ];
}
