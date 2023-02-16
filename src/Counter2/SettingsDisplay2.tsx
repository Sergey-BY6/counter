import React from 'react';
import s from "./Counter2.module.css"
import {Input2} from './components/Input2';


type SettingsDisplayType = {
    maxValue: number
    minValue: number
    setMaxValuePreset: (value: number) => void
    setMinValuePreset: (value: number) => void
    minValuePreset: number
    maxValuePreset: number
    setButtonSettingsDisabled: (value: boolean) => void

}

export const SettingsDisplay2: React.FC<SettingsDisplayType> = (props) => {


    return (
        <div className={s.displaySettings}>
            <div className={s.displaySettingsText}>
                <span>max value:</span><span>start value:</span>
            </div>
            <div className={s.displaySettingsInput}>
                <Input2 callback={props.setMaxValuePreset}
                        value={props.maxValuePreset}
                        valueClassNameMax={props.maxValuePreset}
                        valueClassNameMin={props.minValuePreset}
                        setButtonSettingsDisabled={props.setButtonSettingsDisabled}
                />
                <Input2 callback={props.setMinValuePreset}
                        value={props.minValuePreset}
                        valueClassNameMax={props.maxValuePreset}
                        valueClassNameMin={props.minValuePreset}
                        setButtonSettingsDisabled={props.setButtonSettingsDisabled}
                />
            </div>
        </div>
    );
};

