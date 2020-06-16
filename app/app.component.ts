import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <site-header></site-header>
    <div class="app">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
