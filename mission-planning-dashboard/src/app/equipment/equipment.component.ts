import { Component, OnInit } from "@angular/core";

@Component({
  selector: "equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.css"],
})
export class EquipmentComponent implements OnInit {
  equipment = ["Habitat dome", "Drones", "Food containers", "Oxygen tanks"];
  constructor() {}

  ngOnInit() {}
}
