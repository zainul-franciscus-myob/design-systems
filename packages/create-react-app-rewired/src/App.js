import React from "react";
import { TreatProvider, Badge, lightTheme } from "@myob/myob-widgets";
// import '@myob/myob-styles/dist/styles/myob-clean.css'
// import { button } from "./test.treat";

function App() {
  return (
      <div>
        <p className={''}>
          <TreatProvider theme={lightTheme}>
          {/* <Button >Test</Button> */}

            <Badge>I'm a Badge</Badge>
          </TreatProvider>
        </p>
      </div>
  );
}

export default App;
