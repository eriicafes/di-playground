import { DIContainer } from "@eriicafes/di";
import { NigerianKitchen } from "./components/kitchen";
import { Kitchen } from "./interfaces/kitchen";

export const container = new DIContainer();

container.registerTokens([
  {
    identifier: Kitchen,
    target: NigerianKitchen,
  },
]);
