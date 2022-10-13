import { allItemsMap, Item, Letter } from "./Item";

type ScoreForLetter = {
  totalForLetter: number;
  bonusValue: number;
};

export type LetterResult = {
  qty: number;
  score: ScoreForLetter;
};

export function calculateScore(items: Item[]) {
  // arrange into a per-letter map
  const itemsByLetter = new Map<Letter, Item[]>();

  items.forEach((item) => {
    let existing = itemsByLetter.get(item.letter);
    if (!existing) {
      existing = [];
      itemsByLetter.set(item.letter, existing);
    }

    existing.push(item);
  });

  // initialise final result object
  const result = {
    letters: new Map<Letter, LetterResult>(),
    totals: {
      bonuses: 0,
      score: 0,
    },
  };

  // go through each letter, calculate score for each
  itemsByLetter.forEach((items, letter) => {
    const score = calculateScoreForLetter(
      allItemsMap.get(letter),
      items.length
    );

    const resultForLetter = {
      qty: items.length,
      score,
    };

    result.totals.bonuses += score.bonusValue;
    result.totals.score += score.totalForLetter;
    result.letters.set(letter, resultForLetter);
  });

  return result;
}

function calculateScoreForLetter(item: Item, qty: number): ScoreForLetter {
  const pointsPerItem = item.points;
  const bonus = item.bonus;
  if (!bonus) {
    // simple case - no bonuses
    const totalForLetter = qty * pointsPerItem;
    return { totalForLetter, bonusValue: 0 };
  }

  // more complex cases - total score including bonuses
  const scoreFromBonus = Math.floor(qty / bonus.qtyItems) * bonus.points;
  const scoreNotFromBonus = (qty % bonus.qtyItems) * pointsPerItem;

  const totalForLetter = scoreFromBonus + scoreNotFromBonus;
  const bonusValue = totalForLetter - pointsPerItem * qty;

  return { totalForLetter, bonusValue };
}
