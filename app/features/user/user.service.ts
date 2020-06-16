import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/map";

const USER_LIST: string = "https://reqres.in/api/users";

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  getUsers(): Observable<any[]> {
    return this.http
      .get(USER_LIST)
      .map((response: Response) => response.json());
  }

  getUser(id): Observable<any[]> {
    return this.http
      .get(`${USER_LIST}/${id}`)
      .map((response: Response) => response.json());
  }

  updateUser(user): Observable<any[]> {
    return this.http
      .put(`${USER_LIST}/${user.id}`, user)
      .map((response: Response) => response.json());
  }

  deleteUser(user): Observable<any[]> {
    return this.http
      .delete(`${USER_LIST}/${user.id}`)
      .map((response: Response) => response.json());
  }
}
