import React from 'react';
import s from "./Counter2Redux.module.css"
import {Input2} from './components/Input2';
import {useDispatch, useSelector} from 'react-redux';
import {changeMaxValuePresetAC2} from './ReduxCounter2/maxValuePresetReducer2';
import {changeMinValuePresetAC2} from './ReduxCounter2/minValuePresetReducer2';
import {AppRootStateType2} from './ReduxCounter2/store2';


type SettingsDisplayType = {

}

export const SettingsDisplay2Redux: React.FC<SettingsDisplayType> = (props) => {

    const minValuePreset = useSelector<AppRootStateType2, number>( state => state.minValuePreset)
    const maxValuePreset = useSelector<AppRootStateType2, number>( state => state.maxValuePreset)

    const dispatch = useDispatch()

    const callBackMaxValuePreset = (value: number) => {
        dispatch(changeMaxValuePresetAC2(value))
    }

    const callBackMinValuePreset = (value: number) => {
        dispatch(changeMinValuePresetAC2(value))
    }


    return (
        <div className={s.displaySettings}>
            <div className={s.displaySettingsText}>
                <span>max value:</span><span>start value:</span>
            </div>
            <div className={s.displaySettingsInput}>
                <Input2 callback={callBackMaxValuePreset}
                        value={maxValuePreset}
                />
                <Input2 callback={callBackMinValuePreset}
                        value={minValuePreset}
                />
            </div>
        </div>
    );
};

