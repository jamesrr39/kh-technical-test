import { useDispatch, useSelector } from "react-redux";
import { allItemsList } from "src/domain/Item";
import { calculateScore } from "src/domain/Score";
import { clear } from "src/itemCounter";
import { RootState } from "src/store";

const styles = {
  totalNewGameContainer: {
    display: "grid",
    gridTemplateColumns: "auto auto",
  },
  tbody: {
    // override bootstrap black text in table rule
    color: "white",
  },
  totalScore: {
    fontSize: "1.5em",
  },
  bonusContainer: {
    borderBottom: "1px solid white",
    margin: "30px 0px 10px",
  },
};

export default function ScoreListing() {
  const dispatch = useDispatch();

  const { items } = useSelector((state: RootState) => state.itemCounter);

  const result = calculateScore(items);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="bg-light">Item</th>
            <th className="bg-light">Qty</th>
            <th className="bg-light">Score</th>
          </tr>
        </thead>

        <tbody style={styles.tbody}>
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
      <div style={styles.bonusContainer}>
        Bonuses <strong>{result.totals.bonuses}</strong>
      </div>
      <div style={styles.totalNewGameContainer}>
        <div>
          Total
          <br />
          <strong style={styles.totalScore}>{result.totals.score}</strong>
        </div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => dispatch(clear())}
        >
          New Game
        </button>
      </div>
    </div>
  );
}
