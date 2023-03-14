import {combineReducers, legacy_createStore} from 'redux';
import {minValueReducer2} from './minValueReducer2';
import {maxValueReducer2} from './maxValueReducer2';
import {maxValuePresetReducer2} from './maxValuePresetReducer2';
import {minValuePresetReducer2} from './minValuePresetReducer2';
import {buttonSettingsDisabledReducer2} from './buttonsSettingsDisabledReducer2';
import {displayNowReducer2} from './displayNowReducer2';


const rootReducer2 = combineReducers({
    minValue: minValueReducer2,
    maxValue: maxValueReducer2,
    minValuePreset: minValuePresetReducer2,
    maxValuePreset: maxValuePresetReducer2,
    buttonSettingsDisabled: buttonSettingsDisabledReducer2,
    displayNow: displayNowReducer2
})



export const store2 = legacy_createStore(rootReducer2)

export type AppRootStateType2 = ReturnType<typeof rootReducer2>
// @ts-ignore
window.store2 = store2