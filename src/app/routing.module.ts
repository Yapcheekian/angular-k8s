import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClarifaiComponent } from "./clarifai/clarifai.component";
import { CoronavirusComponent } from "./coronavirus/coronavirus.component";
import { HomeComponent } from "./home/home.component";
import { SnakeComponent } from "./snake/snake.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "snake",
    component: SnakeComponent,
  },
  {
    path: "coronavirus",
    component: CoronavirusComponent,
  },
  {
    path: "clarifai",
    component: ClarifaiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
