import { Animal } from "./animal.js";
export class Reptile extends Animal {
  constructor(size, temperature, skin, heartType, reproductionType) {
    super(size);
    this.temperature = temperature;
    this.skin = skin;
    this.heartType = heartType;
    this.reproductionType = reproductionType;
  }
}
