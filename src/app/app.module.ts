import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { ListComponent } from "./list/list.component";
import { CreateComponent } from "./create/create.component";

import { HttpClientModule } from "@angular/common/http";
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [AppComponent, NavComponent, ListComponent, CreateComponent, DetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
