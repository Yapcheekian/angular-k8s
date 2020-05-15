import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-coronavirus",
  templateUrl: "./coronavirus.component.html",
  styleUrls: ["./coronavirus.component.css"],
})
export class CoronavirusComponent implements OnInit {
  public data = [];
  displayedColumns: string[] = ["country", "totalCases"];
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://35.238.176.214/coronavirus").subscribe((res: any) => {
      console.log(res);
      this.data = res;
    });
  }

  back() {
    this.router.navigateByUrl("/");
  }
}
