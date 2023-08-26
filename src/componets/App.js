import { useState } from "react";
import "../App.css";
import Tooltip from "./Tooltip";

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
      {hovering && <Tooltip position={"top"} content={"tooltip for button"} />}
    </div>
  );
}

export default App;
