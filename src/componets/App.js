import { useState } from "react";
import "../App.css";
import Tooltip from "./Tooltip";

function App() {
  const [hovering, setHovering] = useState(true);
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
        <Tooltip position={"top"} content={"this is best way to be in the rome and it is good "} />
      )}
    </div>
  );
}

export default App;
