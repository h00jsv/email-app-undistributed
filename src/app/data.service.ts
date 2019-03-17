import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  getEmails() {
    return this.http.get(
      "https://5c5a21f9af3ff700140de477.mockapi.io/api/email/"
    );
  }

  getDetails(emailId) {
    return this.http.get(
      "https://5c5a21f9af3ff700140de477.mockapi.io/api/email/" + emailId
    );
  }
}
