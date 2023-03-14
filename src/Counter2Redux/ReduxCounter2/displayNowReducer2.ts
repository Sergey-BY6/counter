const DISPLAY_NOW = "DISPLAY_NOW"

const initialState = false

export const displayNowReducer2 = (state: boolean = initialState, action: ActionType): boolean => {
    switch (action.type) {
        case DISPLAY_NOW: {
            let stateCopy = state
            stateCopy = action.payload.value
            return stateCopy
        }
        default: {
            return state
        }
    }
}

type ActionType = displayNowAC2Type


type displayNowAC2Type = ReturnType<typeof displayNowAC2>
export const displayNowAC2 = (value: boolean) => {
    return {
        type: DISPLAY_NOW,
        payload: {
            value
        }
    } as const
}