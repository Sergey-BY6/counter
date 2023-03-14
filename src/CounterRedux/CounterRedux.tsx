import React from 'react';
import {Button} from './components/Button';
import {DisplayRedux} from './DisplayRedux';
import s from './CounterRedux.module.css'
import {SettingsDisplayRedux} from './SettingsDisplayRedux';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './ReduxCounter/store';
import {changeMinValueAC} from './ReduxCounter/minValueReducer';
import {changeMaxValueAC} from './ReduxCounter/maxValueReducer';
import {buttonSettingsDisabledAC} from './ReduxCounter/buttonSettingsDisabled';


export const CounterRedux = () => {

    const stateMinValue = useSelector<AppRootStateType, number>( state => state.minValue)
    const stateMaxValue = useSelector<AppRootStateType, number>( state => state.maxValue)
    const stateMinValuePreset = useSelector<AppRootStateType, number>( state => state.minValuePreset)
    const stateMaxValuePreset = useSelector<AppRootStateType, number>( state => state.maxValuePreset)
    const stateButtonSettingsDisabled = useSelector<AppRootStateType, boolean>( state => state.buttonSettingsDisabled)

    const dispatch = useDispatch()



    // const [minValue, setMinValue] = useState<number>(0)
    // const [maxValue, setMaxValue] = useState<number>(5)
    // const [minValuePreset, setMinValuePreset] = useState<number>(minValue)
    // const [maxValuePreset, setMaxValuePreset] = useState<number>(maxValue)
    // const [buttonSettingsDisabled, setButtonSettingsDisabled] = useState<boolean>(true)

    //
    // const buttonDisabledIncr = minValue >= maxValue || minValuePreset < 0 || minValuePreset >= maxValuePreset || !buttonSettingsDisabled
    // const buttonDisabledReset = minValue === 0 || minValuePreset < 0 || minValuePreset > maxValuePreset || minValuePreset === minValue || !buttonSettingsDisabled
    // const BtnSettingsDisbled = minValuePreset < 0 || minValuePreset >= maxValuePreset ? true : buttonSettingsDisabled


    const buttonDisabledIncr = stateMinValue >= stateMaxValue || stateMinValuePreset < 0 || stateMinValuePreset >= stateMaxValuePreset || !stateButtonSettingsDisabled
    const buttonDisabledReset = stateMinValue === 0 || stateMinValuePreset < 0 || stateMinValuePreset > stateMaxValuePreset || stateMinValuePreset === stateMinValue || !stateButtonSettingsDisabled
    const BtnSettingsDisbled = stateMinValuePreset < 0 || stateMinValuePreset >= stateMaxValuePreset ? true : stateButtonSettingsDisabled


    // useEffect(() => {
    //     let min = localStorage.getItem('minValueCounter')
    //     let max = localStorage.getItem('maxValueCounter')
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



    const incValue = () => {dispatch(changeMinValueAC(stateMinValue + 1))}
    const resetValue = () => {dispatch(changeMinValueAC(stateMinValuePreset))}


    const settingsMaxMinValueWrapper = () => {
        // localStorage.setItem('minValueCounter', JSON.stringify(stateMinValuePreset))
        // localStorage.setItem('maxValueCounter', JSON.stringify(stateMaxValuePreset))

        dispatch(changeMaxValueAC(stateMaxValuePreset))
        dispatch(changeMinValueAC(stateMinValuePreset))
        dispatch(buttonSettingsDisabledAC(true))
    }


    const displayValue = stateMinValuePreset < 0 || stateMinValuePreset >= stateMaxValuePreset ?
        <div className={s.displayIncorrected}>Incorrected value!</div> : (stateButtonSettingsDisabled ?
            <DisplayRedux/> :
            <div className={s.displayCorrected}>Enter values and press 'set'</div>)


    return (
        <div className={s.counterMainDiv}>
            <div className={s.counterMain}>
                <SettingsDisplayRedux/>
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

