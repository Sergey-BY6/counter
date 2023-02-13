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


    const buttonDisabledIncr = minValue >= maxValue || minValuePreset < 0 || minValuePreset >= maxValuePreset || !buttonSettingsDisabled
    const buttonDisabledReset = minValue === 0 || minValuePreset < 0 || minValuePreset > maxValuePreset || minValuePreset === minValue || !buttonSettingsDisabled
    const BtnSettingsDisbled = minValuePreset < 0 || minValuePreset >= maxValuePreset ? true : buttonSettingsDisabled

    useEffect(()=> {
        let min = localStorage.getItem("minValueCounter")
        let max = localStorage.getItem("maxValueCounter")
        if (min) {
            setMinValue(JSON.parse(min))
            setMinValuePreset(JSON.parse(min))
        }
        if (max) {
            setMaxValue(JSON.parse(max))
            setMaxValuePreset(JSON.parse(max))
        }

    },[])


    useEffect (()=> {
        localStorage.setItem("minValueCounter", JSON.stringify(minValuePreset))
        localStorage.setItem("maxValueCounter", JSON.stringify(maxValuePreset))
    },[minValue, maxValue])


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


    const displayValue = minValuePreset < 0 || minValuePreset >= maxValuePreset ?  <div className={s.displayIncorrected} >Incorrected value!</div>  : ( buttonSettingsDisabled ? <Display minValue={minValue} maxValue={maxValue} /> : <div className={s.displayCorrected} >Enter values and press 'set'</div>)


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

