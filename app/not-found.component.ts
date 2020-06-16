import { Component } from "@angular/core";

@Component({
  selector: "not-found",
  template: ` <div>Page Not Found, go <a routerLink="/">Home?</a></div> `,
})
export class NotFoundComponent {
  constructor() {}
}
