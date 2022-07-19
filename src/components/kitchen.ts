import { Kitchen } from "../interfaces/kitchen";

export class NigerianKitchen implements Kitchen {
  cleanUp(): string {
    return "sweeping floor";
  }
  washDishes(): string {
    return "washing plates";
  }
  prepareMeal(): string {
    return "cooking food";
  }
}
