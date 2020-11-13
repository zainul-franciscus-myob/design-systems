import React from "react";
import "theme-treat-rollup-ui-library/lib-esm/treat.css";
import { Link, Button } from "theme-treat-rollup-ui-library";

function App() {
  return (
    <div>
      <h1>Welcome to t-online</h1>
      <p>
        <Button>I'm a Button</Button>
      </p>
      <p>
        <Link>I'm a link</Link>
      </p>
    </div>
  );
}

export default App;
