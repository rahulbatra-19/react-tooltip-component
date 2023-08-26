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
        Press
      </button>
      {hovering && (
        <Tooltip
          top={10}
          bottom={20}
          right={10}
          left={20}
          content={`Thanks for hovering im a tooltip`}
        />
      )}
    </div>
  );
}

export default App;
