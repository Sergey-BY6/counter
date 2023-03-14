import {combineReducers, legacy_createStore} from 'redux';
import {minValueReducer} from './minValueReducer';
import {buttonSettingsDisabledReducer} from './buttonSettingsDisabled';
import {maxValueReducer} from './maxValueReducer';
import {minValuePresetReducer} from './minValuePresetReducer';
import {maxValuePresetReducer} from './maxValuePresetReducer';


const rootReducer = combineReducers({
    minValue: minValueReducer,
    maxValue: maxValueReducer,
    minValuePreset: minValuePresetReducer,
    maxValuePreset: maxValuePresetReducer,
    buttonSettingsDisabled: buttonSettingsDisabledReducer
})



export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store
