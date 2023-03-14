const CHANGE_MAX_VALUE = "CHANGE_MAX_VALUE"

export const initialStateMaxValueReducer = 5

// type InitialStateType = typeof initialState

type ActionType = changeMaxValueACType

export const maxValueReducer = (state: number = initialStateMaxValueReducer, action: ActionType): number => {
    switch (action.type) {
        case CHANGE_MAX_VALUE: {
            let stateCopy = state
            stateCopy = action.payload.value
            return stateCopy
        }
        default: {
            return state
        }
    }
}





type changeMaxValueACType = ReturnType<typeof changeMaxValueAC>
export const changeMaxValueAC = (value: number) => {
    return {
        type: CHANGE_MAX_VALUE,
        payload: {
            value
        }
    } as const
}