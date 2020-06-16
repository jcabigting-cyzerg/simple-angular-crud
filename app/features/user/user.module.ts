import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { UserComponent } from "./containers/user/user.component";
import { UserSingleComponent } from "./containers/user-single/user-single.component";

import { UserListComponent } from "./components/user-list/user-list.component";
import { UserDetailComponent } from "./components/user-details/user-detail.component";
import { UserFormComponent } from "./components/user-form/user-form.component";

import { UserService } from "./user.service";

const routes: Routes = [
  {
    path: "users",
    children: [
      { path: "", component: UserComponent },
      { path: ":id", component: UserSingleComponent },
    ],
  },
];

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserDetailComponent,
    UserSingleComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [UserService],
})
export class UsersModule {}
