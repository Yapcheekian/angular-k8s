import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-coronavirus",
  templateUrl: "./clarifai.component.html",
  styleUrls: ["./clarifai.component.css"],
})
export class ClarifaiComponent implements OnInit {
  form: FormGroup;
  imagePreview;
  results: string[];
  loading = false;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.form = new FormGroup({
      image: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  back() {
    this.router.navigateByUrl("/");
  }

  OnImagePicked(e: Event) {
    const file = (e.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  submit() {
    this.loading = true;
    const imageData = new FormData();
    imageData.append("image", this.form.value.image, "image");

    this.http
      .post("http://35.238.176.214/clarifai", imageData)
      .subscribe((res: string[]) => {
        this.results = res;
        this.loading = false;
      });
  }
}
