import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get("http://35.238.176.214/coronavirus");
  }
}
