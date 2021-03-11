import React from "react";
import '@myob/myob-styles/dist/styles/myob-clean.css';
import { useStyles } from 'react-treat';
import * as styles from './app.treat';

const BlahComponent = () => {
    const styled = useStyles(styles);
    return (<div className={styled.button}>blah</div>)
};

export default BlahComponent;
