import React from "react";
import '@myob/myob-styles/dist/styles/myob-clean.css';
import {SimpleLabel, SimpleTheme, TreatProvider} from '@myob/myob-widgets'
import * as themes from './theme.treat';
import BlahComponent from './BlahComponent';

const App = () => {
    return (
        <>
            <TreatProvider theme={themes.blueTheme}>
                <SimpleLabel>Simple Label</SimpleLabel>
            </TreatProvider>
            {/*<TreatProvider theme={themes.greenButton}>*/}
            {/*    <BlahComponent/>*/}
            {/*</TreatProvider>*/}
        </>
    )
};

export default App;
