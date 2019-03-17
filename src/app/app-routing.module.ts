import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { CreateComponent } from "./create/create.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  { path: "list", component: ListComponent },
  { path: "create", component: CreateComponent },
  { path: "details/:id", component: DetailsComponent } // needed to make routing connection!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
