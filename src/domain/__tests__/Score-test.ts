import { A, B } from "../Item";
import { calculateScore } from "../Score";

describe("calculateScore", () => {
  test("B,A,B", () => {
    const score = calculateScore([B, A, B]);

    expect(score.totals.score).toEqual(140);
    expect(score.totals.bonuses).toEqual(30);

    const expectedA = { qty: 1, score: { bonusValue: 0, totalForLetter: 50 } };
    const expectedB = { qty: 2, score: { bonusValue: 30, totalForLetter: 90 } };

    expect(score.letters.size).toBe(2);
    expect(score.letters.get("A")).toEqual(expectedA);
    expect(score.letters.get("B")).toEqual(expectedB);
  });
});
