const CHANGE_MIN_VALUE = "CHANGE_MIN_VALUE"

export const initialStateMinValueReducer = 0

// type InitialStateType = typeof initialState

type ActionType = changeMinValueACType

export const minValueReducer = (state: number = initialStateMinValueReducer, action: ActionType): number => {
    switch (action.type) {
        case CHANGE_MIN_VALUE: {
            let stateCopy = state
            stateCopy = action.payload.value
            return stateCopy
        }
        default: {
            return state
        }
    }
}





type changeMinValueACType = ReturnType<typeof changeMinValueAC>
export const changeMinValueAC = (value: number) => {
    return {
        type: CHANGE_MIN_VALUE,
        payload: {
            value
        }
    } as const
}