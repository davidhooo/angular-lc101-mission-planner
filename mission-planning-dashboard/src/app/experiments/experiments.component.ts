import { Component, OnInit } from "@angular/core";

@Component({
  selector: "experiments",
  templateUrl: "./experiments.component.html",
  styleUrls: ["./experiments.component.css"],
})
export class ExperimentsComponent implements OnInit {
  experimentBeingEdited: string = null;
  duplicateExperiment: boolean = false;

  experiments: string[] = [
    "Mars soil sample",
    "Plant growth in habitat",
    "Human bone density"
  ]

  constructor() {}

  ngOnInit() {}

  add(newExperiment: string) {

    if (this.experiments.includes(newExperiment) === true) {
      this.duplicateExperiment = true;
    }
    if (this.duplicateExperiment === false) {
      this.experiments.push(newExperiment);
    }
    this.duplicateExperiment = false
  }

  remove(experiment: string) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }

  edit(experiment: string) {
    this.experimentBeingEdited = experiment;
  }

  save(newExperiment: string, experiment: string) {
    let index = this.experiments.indexOf(experiment)
    this.experiments[index] = newExperiment;
    this.experimentBeingEdited = null;
    }
}
