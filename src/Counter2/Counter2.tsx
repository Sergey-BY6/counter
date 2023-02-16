import React, {useEffect, useState} from 'react';
import {Button2} from './components/Button2';
import {Display2} from './Display2';
import s from './Counter2.module.css'
import {SettingsDisplay2} from './SettingsDisplay2';


export const Counter2 = () => {

    const [minValue, setMinValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [minValuePreset, setMinValuePreset] = useState<number>(minValue)
    const [maxValuePreset, setMaxValuePreset] = useState<number>(maxValue)
    const [buttonSettingsDisabled, setButtonSettingsDisabled] = useState<boolean>(true)
    const [displayNow, setDisplayNow] = useState(false)


    const buttonDisabledIncr = minValue >= maxValue || minValuePreset < 0 || minValuePreset >= maxValuePreset || !buttonSettingsDisabled

    const buttonDisabledReset = minValue === 0 || minValuePreset < 0 || minValuePreset > maxValuePreset || minValuePreset === minValue || !buttonSettingsDisabled

    const buttonDisabledSet = false


    const BtnSettingsDisbled = minValuePreset < 0 || minValuePreset >= maxValuePreset


    useEffect(() => {
        let min = localStorage.getItem('minValueCounter2')
        let max = localStorage.getItem('maxValueCounter2')
        if (min) {
            setMinValue(JSON.parse(min))
            setMinValuePreset(JSON.parse(min))
        }
        if (max) {
            setMaxValue(JSON.parse(max))
            setMaxValuePreset(JSON.parse(max))
        }

    }, [])


    // useEffect (()=> {
    //     localStorage.setItem("minValueCounter", JSON.stringify(minValuePreset))
    //     localStorage.setItem("maxValueCounter", JSON.stringify(maxValuePreset))
    // },[minValue, maxValue])


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
        localStorage.setItem('minValueCounter2', JSON.stringify(minValuePreset))
        localStorage.setItem('maxValueCounter2', JSON.stringify(maxValuePreset))
        setDisplayNow(!displayNow)
    }


    const displayValue = minValuePreset < 0 || minValuePreset >= maxValuePreset ?
        <div className={s.displayIncorrected}>Incorrected value!</div> : (buttonSettingsDisabled ?
            <Display2 minValue={minValue} maxValue={maxValue}/> :
            <div className={s.displayCorrected}>Enter values and press 'set'</div>)


    const goToSettings = () => {
        setDisplayNow(!displayNow)
    }


    return (

        <div className={s.counterMainDiv}>
            {displayNow ?
                <div className={s.counterMain}>
                    <SettingsDisplay2 maxValue={maxValue}
                                      minValue={minValue}
                                      setMaxValuePreset={setMaxValuePreset}
                                      setMinValuePreset={setMinValuePreset}
                                      minValuePreset={minValuePreset}
                                      maxValuePreset={maxValuePreset}
                                      setButtonSettingsDisabled={setButtonSettingsDisabled}
                    />
                    <div className={s.buttonMain}>
                        <Button2 name={'set'}
                                 callback={settingsMaxMinValueWrapper}
                                 disabled={BtnSettingsDisbled}
                        />
                    </div>
                </div>
                : <div className={s.counterMain}>
                    {displayValue}
                    <div className={s.buttonMain}>
                        <Button2 name={'inc'} callback={incValue} disabled={buttonDisabledIncr}/>
                        <Button2 name={'reset'} callback={resetValue} disabled={buttonDisabledReset}/>
                        <Button2 name={'set'} callback={goToSettings} disabled={buttonDisabledSet}/>
                    </div>
                </div>
            }
        </div>
    );
};

