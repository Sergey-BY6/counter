const CHANGE_MAX_VALUE2 = "CHANGE_MAX_VALUE2"

export const initialStateMaxValueReducer2 = 5

export const maxValueReducer2 = (state: number = initialStateMaxValueReducer2, action: ActionType): number => {
    switch (action.type) {
        case CHANGE_MAX_VALUE2: {
            let stateCopy = state
            stateCopy = action.payload.value
            return stateCopy
        }
        default: {
            return state
        }
    }
}

type ActionType = changeMaxValueAC2Type


type changeMaxValueAC2Type = ReturnType<typeof changeMaxValueAC2>
export const changeMaxValueAC2 = (value: number) => {
    return {
        type: CHANGE_MAX_VALUE2,
        payload: {
            value
        }
    } as const
}