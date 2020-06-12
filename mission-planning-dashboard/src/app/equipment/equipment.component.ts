import { Component, OnInit } from "@angular/core";

@Component({
  selector: "equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.css"],
})
export class EquipmentComponent implements OnInit {
  itemBeingEdited: string = null;
  duplicateItem = false;

  equipment = ["Habitat dome", "Drones", "Food containers", "Oxygen tanks"];
  constructor() {}

  ngOnInit() {}

  add(item: string) {

    if (this.equipment.includes(item) === true) {
      this.duplicateItem = true;
    }
    
    if (this.duplicateItem === false) {
      this.equipment.push(item);
    }
    this.duplicateItem = false
  }

  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  edit(item: string) {
    this.itemBeingEdited = item;
  }

  save(updatedItem: string, item: string) {
    let index = this.equipment.indexOf(item)
    this.equipment[item] = updatedItem;
    this.itemBeingEdited = null;
    }
}

