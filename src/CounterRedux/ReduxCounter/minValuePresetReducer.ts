import {initialStateMinValueReducer} from './minValueReducer';

const CHANGE_MIN_VALUE_PRESET = "CHANGE_MIN_VALUE_PRESET"

const initialState = initialStateMinValueReducer

// type InitialStateType = typeof initialState

type ActionType = changeMinValuePresetACType

export const minValuePresetReducer = (state: number = initialState, action: ActionType): number => {
    switch (action.type) {
        case CHANGE_MIN_VALUE_PRESET: {
            let stateCopy = state
            stateCopy = action.payload.value
            return stateCopy
        }
        default: {
            return state
        }
    }
}





type changeMinValuePresetACType = ReturnType<typeof changeMinValuePresetAC>
export const changeMinValuePresetAC = (value: number) => {
    return {
        type: CHANGE_MIN_VALUE_PRESET,
        payload: {
            value
        }

    } as const
}