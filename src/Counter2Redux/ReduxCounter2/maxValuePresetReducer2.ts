import {initialStateMaxValueReducer2} from './maxValueReducer2';

const CHANGE_MAX_VALUE_PRESET2 = "CHANGE_MAX_VALUE_PRESET2"

const initialState = initialStateMaxValueReducer2

export const maxValuePresetReducer2 = (state: number = initialState, action: ActionType): number => {
    switch (action.type) {
        case CHANGE_MAX_VALUE_PRESET2: {
            let stateCopy = state
            stateCopy = action.payload.value
            return stateCopy
        }
        default: {
            return state
        }
    }
}

type ActionType = changeMaxValuePresetAC2Type


type changeMaxValuePresetAC2Type = ReturnType<typeof changeMaxValuePresetAC2>
export const changeMaxValuePresetAC2 = (value: number) => {
    return {
        type: CHANGE_MAX_VALUE_PRESET2,
        payload: {
            value
        }
    } as const
}