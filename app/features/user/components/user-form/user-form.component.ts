import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "user-form",
  templateUrl: "user-form.component.html",
})
export class UserFormComponent {
  @Input() detail: any[];

  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onSubmit(user, isValid) {
    if (isValid) {
      this.update.emit(user);
    }
  }
}
