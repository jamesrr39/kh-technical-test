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

export const allItemsMap = new Map<Letter, Item>([
  ["A", A],
  ["B", B],
  ["C", C],
  ["D", D],
]);
