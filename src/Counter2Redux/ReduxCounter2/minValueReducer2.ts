const CHANGE_MIN_VALUE2 = "CHANGE_MIN_VALUE2"

export const initialStateMinValueReducer2 = 0

export const minValueReducer2 = (state: number = initialStateMinValueReducer2, action: ActionType): number => {
    switch (action.type) {
        case CHANGE_MIN_VALUE2: {
            let stateCopy = state
            stateCopy = action.payload.value
            return stateCopy
        }
        default: {
            return state
        }
    }
}

type ActionType = changeMinValueAC2Type


type changeMinValueAC2Type = ReturnType<typeof changeMinValueAC2>
export const changeMinValueAC2 = (value: number) => {
    return {
        type: CHANGE_MIN_VALUE2,
        payload: {
            value
        }
    } as const
}