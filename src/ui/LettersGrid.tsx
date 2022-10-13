import { useDispatch } from "react-redux";
import { addItem } from "src/itemCounter";
import { allItemsList } from "src/domain/Item";

const styles = {
  letter: {
    width: "50px",
    height: "50px",
    margin: "10px",
  },
};

export default function LettersGrid() {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Items</h3>
      {allItemsList.map((item) => {
        return (
          <button
            key={item.letter}
            style={styles.letter}
            className="btn btn-primary"
            type="button"
            onClick={() => dispatch(addItem(item))}
          >
            {item.letter}
          </button>
        );
      })}
    </div>
  );
}
