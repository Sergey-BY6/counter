import React from 'react';
import s from "./Counter.module.css"


type DisplayType = {
    minValue: number
    maxValue: number
}

export const Display: React.FC<DisplayType> = (props) => {

    const classNameDspValue = props.minValue < props.maxValue ? s.text  : s.textRed

    return (
        <div className={s.display}>
            <div className={classNameDspValue}>{props.minValue}</div>
        </div>
    );
};

