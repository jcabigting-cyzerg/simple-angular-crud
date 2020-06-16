import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "[user-detail]",
  templateUrl: "./user-detail.component.html",
})
export class UserDetailComponent implements OnInit {
  @Input() detail;
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  email = "";
  first_name = "";
  last_name = "";

  editing = false;

  constructor() {}

  ngOnInit() {
    this.email = this.detail.email;
    this.first_name = this.detail.first_name;
    this.last_name = this.detail.last_name;
  }

  onSave() {
    this.detail.email = this.email;
    this.detail.first_name = this.first_name;
    this.detail.last_name = this.last_name;

    this.edit.emit(this.detail);
  }

  onDelete() {
    this.delete.emit(this.detail);
  }

  toggleUpdate() {
    this.editing = !this.editing;
  }
}
