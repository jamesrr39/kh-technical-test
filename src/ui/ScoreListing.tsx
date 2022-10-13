import { useDispatch, useSelector } from "react-redux";
import { clear, ItemsSliceState } from "src/itemCounter";
import {
  allItemsList,
  Letter,
  sortItemsAlphabeticallyFunc,
} from "src/domain/Item";
import { calculateScore, LetterResult } from "src/domain/Score";
import { RootState } from "src/store";

type Props = {};

export default function ScoreListing(props: Props) {
  const dispatch = useDispatch();

  const { items } = useSelector((state: RootState) => state.itemCounter);

  const result = calculateScore(items);

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="bg-light">Item</th>
            <th className="bg-light">Qty</th>
            <th className="bg-light">Score</th>
          </tr>
        </thead>

        <tbody>
          {
            /* go through each possible letter, see if we have it anywhere in our list. If we have it, render, otherwise ignore
             */ allItemsList.map((item) => {
              const { letter } = item;
              const resultForLetter = result.letters.get(letter);
              if (!resultForLetter) {
                return null;
              }

              return (
                <tr key={`letter_${letter}`}>
                  <td>{letter}</td>
                  <td>{resultForLetter.qty}</td>
                  <td>{resultForLetter.score.totalForLetter}</td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <div>Bonuses {result.totals.bonuses}</div>
      <div>Total {result.totals.score}</div>
      <button
        type="button"
        className="btn btn-default"
        onClick={() => dispatch(clear())}
      >
        New Game
      </button>
    </div>
  );
}
