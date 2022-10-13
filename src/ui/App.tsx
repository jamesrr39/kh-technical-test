import LettersGrid from "./LettersGrid";
import ScoreListing from "./ScoreListing";

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "auto auto",
  },
};

export default function App() {
  return (
    <div className="container">
      <div style={styles.grid}>
        <div>
          <h1>Kahoot! Points</h1>
        </div>
        <div>Player Items</div>
        <div>
          <LettersGrid />
        </div>
        <div>
          <ScoreListing />
        </div>
      </div>
    </div>
  );
}
