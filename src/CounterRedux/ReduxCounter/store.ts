import {combineReducers, legacy_createStore} from 'redux';
import {minValueReducer} from './minValueReducer';
import {buttonSettingsDisabledReducer} from './buttonSettingsDisabled';
import {maxValueReducer} from './maxValueReducer';
import {minValuePresetReducer} from './minValuePresetReducer';
import {maxValuePresetReducer} from './maxValuePresetReducer';
import {rootPreloaded, saveStateMax, saveStateMin} from '../../utils/localstorage-utilsCounterRedux';


const rootReducer = combineReducers({
    minValue: minValueReducer,
    maxValue: maxValueReducer,
    minValuePreset: minValuePresetReducer,
    maxValuePreset: maxValuePresetReducer,
    buttonSettingsDisabled: buttonSettingsDisabledReducer
})



// export const store = legacy_createStore(rootReducer)



// let preloadedStateMin
// const persistedTodosStringMin = localStorage.getItem("minValueCounter")
// if (persistedTodosStringMin) {
//     preloadedStateMin = JSON.parse(persistedTodosStringMin)
// }
//
// let preloadedStateMax
// const persistedTodosStringMax = localStorage.getItem("maxValueCounter")
// if (persistedTodosStringMax) {
//     preloadedStateMax = JSON.parse(persistedTodosStringMax)
// }

export const store = legacy_createStore(rootReducer,
    // {minValuePreset: preloadedStateMin, maxValuePreset: preloadedStateMax,
    //     minValue: preloadedStateMin, maxValue: preloadedStateMax
    // }
    rootPreloaded
)


store.subscribe(()=> {
    // localStorage.setItem('minValueCounter', JSON.stringify(store.getState().minValuePreset))
    // localStorage.setItem('maxValueCounter', JSON.stringify(store.getState().maxValuePreset))
    saveStateMin({
        minValuePreset: store.getState().minValuePreset,
    })
    saveStateMax({
        maxValuePreset: store.getState().maxValuePreset
    })
})





export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store
