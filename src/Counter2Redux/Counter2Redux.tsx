import React from 'react';
import {Button2} from './components/Button2';
import {Display2Redux} from './Display2Redux';
import s from './Counter2Redux.module.css'
import {SettingsDisplay2Redux} from './SettingsDisplay2Redux';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType2} from './ReduxCounter2/store2';
import {changeMinValueAC2} from './ReduxCounter2/minValueReducer2';
import {changeMaxValueAC2} from './ReduxCounter2/maxValueReducer2';
import {buttonSettingsDisabledAC2} from './ReduxCounter2/buttonsSettingsDisabledReducer2';
import {displayNowAC2} from './ReduxCounter2/displayNowReducer2';


export const Counter2Redux = () => {

    const minValue = useSelector<AppRootStateType2, number>(state => state.minValue)
    const maxValue = useSelector<AppRootStateType2, number>(state => state.maxValue)
    const minValuePreset = useSelector<AppRootStateType2, number>(state => state.minValuePreset)
    const maxValuePreset = useSelector<AppRootStateType2, number>(state => state.maxValuePreset)
    const buttonSettingsDisabled = useSelector<AppRootStateType2, boolean>(state => state.buttonSettingsDisabled)
    const displayNow = useSelector<AppRootStateType2, boolean>(state => state.displayNow)

    const dispatch = useDispatch()

    // const [minValue, setMinValue] = useState<number>(0)
    // const [maxValue, setMaxValue] = useState<number>(5)
    // const [minValuePreset, setMinValuePreset] = useState<number>(minValue)
    // const [maxValuePreset, setMaxValuePreset] = useState<number>(maxValue)
    // const [buttonSettingsDisabled, setButtonSettingsDisabled] = useState<boolean>(true)
    // const [displayNow, setDisplayNow] = useState(false)


    const buttonDisabledIncr = minValue >= maxValue || minValuePreset < 0 || minValuePreset >= maxValuePreset || !buttonSettingsDisabled

    const buttonDisabledReset = minValue === 0 || minValuePreset < 0 || minValuePreset > maxValuePreset || minValuePreset === minValue || !buttonSettingsDisabled

    const buttonDisabledSet = false

    const BtnSettingsDisbled = minValuePreset < 0 || minValuePreset >= maxValuePreset


    // useEffect(() => {
    //     let min = localStorage.getItem('minValueCounter2')
    //     let max = localStorage.getItem('maxValueCounter2')
    //     if (min) {
    //         setMinValue(JSON.parse(min))
    //         setMinValuePreset(JSON.parse(min))
    //     }
    //     if (max) {
    //         setMaxValue(JSON.parse(max))
    //         setMaxValuePreset(JSON.parse(max))
    //     }
    //
    // }, [])


    const incValue = () => {dispatch(changeMinValueAC2(minValue + 1))}
    const resetValue = () => {dispatch(changeMinValueAC2(minValuePreset))}


    const settingsMaxMinValueWrapper = () => {
        // localStorage.setItem('minValueCounter2', JSON.stringify(minValuePreset))
        // localStorage.setItem('maxValueCounter2', JSON.stringify(maxValuePreset))

        dispatch(changeMaxValueAC2(maxValuePreset))
        dispatch(changeMinValueAC2(minValuePreset))
        dispatch(buttonSettingsDisabledAC2(true))
        dispatch(displayNowAC2(!displayNow))
    }


    const displayValue = minValuePreset < 0 || minValuePreset >= maxValuePreset ?
        <div className={s.displayIncorrected}>Incorrected value!</div> : (buttonSettingsDisabled ?
            <Display2Redux/> :
            <div className={s.displayCorrected}>Enter values and press 'set'</div>)


    const goToSettings = () => {dispatch(displayNowAC2(!displayNow))}


    return (

        <div className={s.counterMainDiv}>
            {displayNow ?
                <div className={s.counterMain}>
                    <SettingsDisplay2Redux/>
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

