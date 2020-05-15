import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigate(id: Number) {
    switch (id) {
      case 1:
        this.router.navigateByUrl("/snake");
        break;
      case 2:
        this.router.navigateByUrl("/clarifai");
        break;
      case 3:
        this.router.navigateByUrl("/coronavirus");
        break;
    }
  }
}
