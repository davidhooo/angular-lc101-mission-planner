import { Component, OnInit } from "@angular/core";

@Component({
  selector: "header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  title = "";
  missionName = "Mars 2030";
  rocketName = "Falcon Heavy";
  constructor() {}

  ngOnInit() {}
}
