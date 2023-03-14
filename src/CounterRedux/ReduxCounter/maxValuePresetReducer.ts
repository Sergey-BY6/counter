import {initialStateMaxValueReducer} from './maxValueReducer';

const CHANGE_MAX_VALUE_PRESET = "CHANGE_MAX_VALUE_PRESET"

const initialState = initialStateMaxValueReducer

// type InitialStateType = typeof initialState

type ActionType = changeMaxValuePresetACType

export const maxValuePresetReducer = (state: number = initialState, action: ActionType): number => {
    switch (action.type) {
        case CHANGE_MAX_VALUE_PRESET: {
            let stateCopy = state
            stateCopy = action.payload.value
            return stateCopy
        }
        default: {
            return state
        }
    }
}





type changeMaxValuePresetACType = ReturnType<typeof changeMaxValuePresetAC>
export const changeMaxValuePresetAC = (value: number) => {
    return {
        type: CHANGE_MAX_VALUE_PRESET,
        payload: {
            value
        }

    } as const
}