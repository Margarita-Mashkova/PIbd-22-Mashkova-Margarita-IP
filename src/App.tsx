import "./styles.css";
import Counter from "./Counter";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter start={10} step={5} />
      </header>
    </div>
  );
}
