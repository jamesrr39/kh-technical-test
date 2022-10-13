import LettersGrid from "./LettersGrid";
import ScoreListing from "./ScoreListing";

const BACKGROUND_COLOR = "rgb(84,60,125)";

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridColumnGap: "3px",
    backgroundColor: "white",
  },
  cell: {
    backgroundColor: BACKGROUND_COLOR,
  },
  rightCell: {
    backgroundColor: BACKGROUND_COLOR,
    paddingLeft: "10px",
  },
};

export default function App() {
  return (
    <div className="container-fluid">
      <div style={styles.grid}>
        <div style={styles.cell}>
          <h1>Kahoot! Points</h1>
        </div>
        <div style={styles.rightCell}>
          <h3>Player Items</h3>
        </div>
        <div style={styles.cell}>
          <LettersGrid />
        </div>
        <div style={styles.rightCell}>
          <ScoreListing />
        </div>
      </div>
    </div>
  );
}
