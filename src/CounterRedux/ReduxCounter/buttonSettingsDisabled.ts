const BUTTON_SETTINGS_DISABLED = "BUTTON_SETTINGS_DISABLED"

const initialState = true

// type InitialStateType = typeof initialState

type ActionType = buttonSettingsDisabledACType

export const buttonSettingsDisabledReducer = (state: boolean = initialState, action: ActionType): boolean => {
    switch (action.type) {
        case BUTTON_SETTINGS_DISABLED: {
            let stateCopy = state
            stateCopy = action.payload.value
            return stateCopy
        }
        default: {
            return state
        }
    }
}





type buttonSettingsDisabledACType = ReturnType<typeof buttonSettingsDisabledAC>
export const buttonSettingsDisabledAC = (value: boolean) => {
    return {
        type: BUTTON_SETTINGS_DISABLED,
        payload: {
            value
        }
    } as const
}