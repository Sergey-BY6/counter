import {combineReducers, legacy_createStore} from 'redux';
import {minValueReducer2} from './minValueReducer2';
import {maxValueReducer2} from './maxValueReducer2';
import {maxValuePresetReducer2} from './maxValuePresetReducer2';
import {minValuePresetReducer2} from './minValuePresetReducer2';
import {buttonSettingsDisabledReducer2} from './buttonsSettingsDisabledReducer2';
import {displayNowReducer2} from './displayNowReducer2';
import {rootPreloaded, saveStateMax, saveStateMin} from '../../utils/localstorage-utilsCounterRedux';
import {rootPreloaded2, saveStateMax2, saveStateMin2} from '../../utils/localstorage-utilsCounter2Redux';
import {store} from '../../CounterRedux/ReduxCounter/store';


const rootReducer2 = combineReducers({
    minValue: minValueReducer2,
    maxValue: maxValueReducer2,
    minValuePreset: minValuePresetReducer2,
    maxValuePreset: maxValuePresetReducer2,
    buttonSettingsDisabled: buttonSettingsDisabledReducer2,
    displayNow: displayNowReducer2
})



// export const store2 = legacy_createStore(rootReducer2)



export const store2 = legacy_createStore(rootReducer2,
    // {minValuePreset: preloadedStateMin, maxValuePreset: preloadedStateMax,
    //     minValue: preloadedStateMin, maxValue: preloadedStateMax
    // }
    rootPreloaded2
)


store2.subscribe(()=> {
    // localStorage.setItem('minValueCounter', JSON.stringify(store.getState().minValuePreset))
    // localStorage.setItem('maxValueCounter', JSON.stringify(store.getState().maxValuePreset))
    saveStateMin2({
        minValuePreset: store2.getState().minValuePreset,
    })
    saveStateMax2({
        maxValuePreset: store2.getState().maxValuePreset
    })
})



export type AppRootStateType = ReturnType<typeof rootReducer2>
// @ts-ignore
window.store = store




















export type AppRootStateType2 = ReturnType<typeof rootReducer2>
// @ts-ignore
window.store2 = store2