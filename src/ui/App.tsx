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
        <div>box3</div>
        <div>box4</div>
      </div>
    </div>
  );
}
