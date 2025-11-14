import "./App.css";
import Zaehler from "./components/Zaehler";
import Begruessung from "./components/Begruessung";
import { TastaturDemo } from "./components/KeyEvent";
import { Posts } from "./components/ApiFile";

function App() {
  return (
    <>
      <Begruessung name="Enrico" />

      <div>
        <Zaehler />
      </div>

      <TastaturDemo />

      <div id="file-api">
        <h3>File API</h3>
        <Posts />
      </div>
    </>
  );
}

export default App;
