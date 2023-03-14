import React from 'react';
import s from './CounterRedux.module.css'
import {Input} from './components/Input';
import {useDispatch, useSelector} from 'react-redux';
import {changeMaxValuePresetAC} from './ReduxCounter/maxValuePresetReducer';
import {changeMinValuePresetAC} from './ReduxCounter/minValuePresetReducer';
import {AppRootStateType} from './ReduxCounter/store';


type SettingsDisplayType = {

}

export const SettingsDisplayRedux: React.FC<SettingsDisplayType> = (props) => {

    const stateMinValuePreset = useSelector<AppRootStateType, number>(state => state.minValuePreset)
    const stateMaxValuePreset = useSelector<AppRootStateType, number>(state => state.maxValuePreset)
    const dispatch = useDispatch()

    const callBackMaxValuePreset = (value: number) => {
        dispatch(changeMaxValuePresetAC(value))
    }

    const callBackMinValuePreset = (value: number) => {
        dispatch(changeMinValuePresetAC(value))
    }


    return (
        <div className={s.displaySettings}>
            <div className={s.displaySettingsText}>
                <span>max value:</span><span>start value:</span>
            </div>
            <div className={s.displaySettingsInput}>
                <Input callback={callBackMaxValuePreset}
                       value={stateMaxValuePreset}
                />
                <Input callback={callBackMinValuePreset}
                       value={stateMinValuePreset}
                />
            </div>
        </div>
    );
};

