import { useState } from "react";
import "../styles/App.css";
import Tooltip from "./Tooltip";
// this is the main file where hovering is used so when a user hover over the button the state of hoverig is changes and tooltip appreas and disapear according to that
function App() {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="App">
      <button
        className="button"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        Sign up
      </button>
      {hovering && (
        <Tooltip position={"right"} content={"tooltip for button"} />
      )}
    </div>
  );
}

export default App;
