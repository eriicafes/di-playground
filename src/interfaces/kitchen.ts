export interface Kitchen {
  cleanUp(): string;
  washDishes(): string;
  prepareMeal(): string;
}

export const Kitchen = Symbol("Kitchen");
