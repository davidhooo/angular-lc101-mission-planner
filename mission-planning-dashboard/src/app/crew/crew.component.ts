import { Component, OnInit } from "@angular/core";

@Component({
  selector: "crew",
  templateUrl: "./crew.component.html",
  styleUrls: ["./crew.component.css"],
})
export class CrewComponent implements OnInit {
  memberBeingEdited: object = null;
  duplicateMember: boolean = false;
  
  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
 ];
 
  constructor() {}

  ngOnInit() {}

  add(memberName: string, isFirst: boolean) {
    for (let member of this.crew) {
      if (member['name'] === memberName) {
       this.duplicateMember = true;
      }
    }
    if (this.duplicateMember === false) {
      this.crew.push({name: memberName, firstMission: isFirst});
    }
    this.duplicateMember = false
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
  member['name'] = name;
  this.memberBeingEdited = null;
  }
 
}
