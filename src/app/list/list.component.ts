import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

import { Observable } from "rxjs";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  emails: Object;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getEmails().subscribe(data => (this.emails = data));
  }
}
