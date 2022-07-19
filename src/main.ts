import "reflect-metadata";
import { Inject } from "@eriicafes/di";
import { container } from "./container";
import { Kitchen } from "./interfaces/kitchen";

class App {
  constructor(@Inject(Kitchen) public kitchen: Kitchen) {}
}

const app = container.resolve(App);

console.log(app.kitchen.prepareMeal());
