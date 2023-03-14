import React from 'react';
import s from "./Counter2Redux.module.css"
import {AppRootStateType2} from './ReduxCounter2/store2';
import {useSelector} from 'react-redux';


type DisplayType = {

}

export const Display2Redux: React.FC<DisplayType> = (props) => {

    const minValue = useSelector<AppRootStateType2, number>( state => state.minValue)
    const maxValue = useSelector<AppRootStateType2, number>( state => state.maxValue)

    const classNameDspValue = minValue < maxValue ? s.text  : s.textRed

    return (
        <div className={s.display}>
            <div className={classNameDspValue}>{minValue}</div>
        </div>
    );
};

