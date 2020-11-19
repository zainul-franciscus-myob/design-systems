import React from 'react';
// import { Button } from "theme-treat-rollup-ui-library-2";
import Button from "theme-treat-rollup-ui-library-2/lib-esm/Button/Button";

const NestButton = ({count, render, ...props}) => {
    return <Button>test{render && count >0 ? render(count-1, render): false}</Button>
}

export default NestButton