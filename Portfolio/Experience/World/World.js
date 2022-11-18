import Experience from "../Experience";
import Room from "./Room";
import Environment from "./Environment";

import * as THREE from "three";
import Room from "./Room";

export default class World {
  constructor() {
    this.experience = new Experience();

    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;
    console.log(
      { this: this.resources.on, experience: this.experience },
      "world"
    );
    this.resources.on("ready", () => {
      this.environment = new Environment();
      this.room = new Room();
      console.log("created room");
    });
  }

  resize() {}
  update() {}
}
