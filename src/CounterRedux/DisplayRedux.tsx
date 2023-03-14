import React from 'react';
import s from "./CounterRedux.module.css"
import {useSelector} from 'react-redux';
import {AppRootStateType} from './ReduxCounter/store';


type DisplayType = {

}

export const DisplayRedux: React.FC<DisplayType> = (props) => {

    const minValue = useSelector<AppRootStateType, number>( state => state.minValue)
    const maxValue = useSelector<AppRootStateType, number>( state => state.maxValue)

    const classNameDspValue = minValue < maxValue ? s.text  : s.textRed

    return (
        <div className={s.display}>
            <div className={classNameDspValue}>{minValue}</div>
        </div>
    );
};

