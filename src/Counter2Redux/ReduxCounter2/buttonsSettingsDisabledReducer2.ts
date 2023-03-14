const BUTTON_SETTINGS_DISABLED2 = "BUTTON_SETTINGS_DISABLED2 "

const initialState = true

export const buttonSettingsDisabledReducer2 = (state: boolean = initialState, action: ActionType): boolean => {
    switch (action.type) {
        case BUTTON_SETTINGS_DISABLED2: {
            let stateCopy = state
            stateCopy = action.payload.value
            return stateCopy
        }
        default: {
            return state
        }
    }
}

type ActionType = buttonSettingsDisabledAC2Type


type buttonSettingsDisabledAC2Type = ReturnType<typeof buttonSettingsDisabledAC2>
export const buttonSettingsDisabledAC2 = (value: boolean) => {
    return {
        type: BUTTON_SETTINGS_DISABLED2,
        payload: {
            value
        }
    } as const
}