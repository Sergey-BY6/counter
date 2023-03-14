import {initialStateMinValueReducer2} from './minValueReducer2';

const CHANGE_MIN_VALUE_PRESET2 = "CHANGE_MIN_VALUE_PRESET2"

const initialState = initialStateMinValueReducer2

export const minValuePresetReducer2 = (state: number = initialState, action: ActionType): number => {
    switch (action.type) {
        case CHANGE_MIN_VALUE_PRESET2: {
            let stateCopy = state
            stateCopy = action.payload.value
            return stateCopy
        }
        default: {
            return state
        }
    }
}

type ActionType = changeMinValuePresetAC2Type


type changeMinValuePresetAC2Type = ReturnType<typeof changeMinValuePresetAC2>
export const changeMinValuePresetAC2 = (value: number) => {
    return {
        type: CHANGE_MIN_VALUE_PRESET2,
        payload: {
            value
        }
    } as const
}