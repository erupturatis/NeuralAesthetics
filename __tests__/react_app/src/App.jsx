import { useEffect } from "react";
import { BasePainter } from "../../";

function App() {
  useEffect(() => {
    let paint = new BasePainter(document.querySelector("#root-svg"));
    console.log(paint);
  }, []);
  // integration testing will be done manually here, will set up some tests
  // later probably in this react app to run along with the normal tests
  return (
    <div className="App big">
      <div className="full-size ">
        <svg
          id="root-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        ></svg>
      </div>
    </div>
  );
}

export default App;
