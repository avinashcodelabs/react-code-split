import React from "react";
import { render } from "react-dom";

import { Synopsis } from "./Synopsis";

const LazyPlot = React.lazy(() => import("./Plot"));

const Movie = () => {
  const [showPlot, setShowPlot] = React.useState(false);

  return (
    <>
      <h2>Inception</h2>
      <Synopsis />
      <button onClick={() => setShowPlot((prevState) => !prevState)}>
        {showPlot ? "Hide" : "Show full plot.."}
      </button>
      {showPlot && (
        <React.Suspense fallback={<div>Loading</div>}>
          <LazyPlot />
        </React.Suspense>
      )}
    </>
  );
};

const rootElement = document.getElementById("root");
render(<Movie />, rootElement);
