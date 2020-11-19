import React from "react";
import "theme-treat-rollup-ui-library-2/lib-esm/treat.css";
import { Button, Link } from "theme-treat-rollup-ui-library-2";

function App() {
  return (
      <div>
        <h1>Welcome to t-online</h1>
        <p>
          <Button>I'm a Button</Button>
          {/* <NestButton count={2000} render={(count, render) => <NestButton count={count-1}  render={render}/>}/> */}
        </p>
        <p>
          <Link>I'm Link Link</Link>
        </p>
      </div>
  );
}

export default App;
