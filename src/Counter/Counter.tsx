import React, {useEffect, useState} from 'react';
import {Button} from './components/Button';
import {Display} from './Display';
import s from './Counter.module.css'
import {SettingsDisplay} from './SettingsDisplay';


export const Counter = () => {


    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [minValuePreset, setMinValuePreset] = useState<number>(minValue)
    const [maxValuePreset, setMaxValuePreset] = useState<number>(maxValue)
    const [buttonSettingsDisabled, setButtonSettingsDisabled] = useState<boolean>(true)


    const buttonDisabledIncr = minValue >= maxValue
    const buttonDisabledReset = minValue === 0
    const BtnSettingsDisbled = minValuePreset < 0 || minValuePreset >= maxValuePreset ? true : buttonSettingsDisabled



    const incValue = () => {
        setMinValue(minValue + 1)
    }
    const resetValue = () => {
        setMinValue(minValuePreset)
    }


    const settingsMaxMinValueWrapper = () => {
        setMaxValue(maxValuePreset)
        setMinValue(minValuePreset)
        setButtonSettingsDisabled(true)
    }

    // const displayValue = minValuePreset < 0 || minValuePreset >= maxValuePreset ?  <div className={s.displayIncorrected} >Incorrected value!</div> : (minValuePreset > 0 || minValuePreset < maxValuePreset  ? <div className={s.displayCorrected} >Enter values and press 'set'</div> : <Display minValue={minValue} maxValue={maxValue}/>)


    const displayValue = minValuePreset < 0 || minValuePreset >= maxValuePreset ?  <div className={s.displayIncorrected} >Incorrected value!</div>  : <Display minValue={minValue} maxValue={maxValue}/>



    return (

        <div className={s.counterMainDiv}>
            <div className={s.counterMain}>
                <SettingsDisplay maxValue={maxValue}
                                 minValue={minValue}
                                 setMaxValuePreset={setMaxValuePreset}
                                 setMinValuePreset={setMinValuePreset}
                                 minValuePreset={minValuePreset}
                                 maxValuePreset={maxValuePreset}
                                 setButtonSettingsDisabled={setButtonSettingsDisabled}
                />
                <div className={s.buttonMain}>
                    <Button name={'set'} callback={settingsMaxMinValueWrapper} disabled={BtnSettingsDisbled}/>
                </div>
            </div>

            <div className={s.counterMain}>
                {displayValue}
                <div className={s.buttonMain}>
                    <Button name={'inc'} callback={incValue} disabled={buttonDisabledIncr}/>
                    <Button name={'reset'} callback={resetValue} disabled={buttonDisabledReset}/>
                </div>
            </div>
        </div>
    );
};

