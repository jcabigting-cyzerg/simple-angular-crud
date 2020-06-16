import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { NotFoundComponent } from "./not-found.component";
import { AppComponent } from "./app.component";

import { UsersModule } from "./features/user/user.module";
import { SiteHeaderComponent } from "./shared/site-header/site-header.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SiteHeaderComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    UsersModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
