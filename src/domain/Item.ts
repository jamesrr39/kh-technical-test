export type Item = {
  letter: Letter;
  points: number;
  bonus?: Bonus;
};

export type Bonus = {
  points: number;
  qtyItems: number;
};

export type Letter = "A" | "B" | "C" | "D";

export const A = {
  letter: "A" as "A",
  points: 50,
  bonus: {
    points: 200,
    qtyItems: 3,
  },
};

export const B = {
  letter: "B" as "B",
  points: 30,
  bonus: {
    points: 90,
    qtyItems: 2,
  },
};

export const C = {
  letter: "C" as "C",
  points: 20,
};

export const D = {
  letter: "D" as "D",
  points: 15,
};

export function sortItemsAlphabeticallyFunc(a: Item, b: Item) {
  if (a.letter === b.letter) {
    return 0;
  }

  return a.letter < b.letter ? -1 : 1;
}

export const allItemsMap = new Map<Letter, Item>([
  ["A", A],
  ["B", B],
  ["C", C],
  ["D", D],
]);

// build allItemsList at init time. The performance hit is tiny and it ensures the map and list are in sync.
export const allItemsList: Item[] = [];
allItemsMap.forEach((item) => allItemsList.push(item));
// Sort ascending
allItemsList.sort(sortItemsAlphabeticallyFunc);
