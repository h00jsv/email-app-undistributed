import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs"; //NEW
import { ActivatedRoute } from "@angular/router"; //NEW

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  email: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => (this.email = params.id)); //NEW
  }

  ngOnInit() {
    this.data.getDetails(this.email).subscribe(data => (this.email = data));
  }
}
