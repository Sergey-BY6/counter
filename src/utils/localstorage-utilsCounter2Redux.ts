

export const loadStateMin2 = () => {
    try {
        const serializedState = localStorage.getItem('minValueCounter2');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined;
    }
};
export const loadStateMax2 = () => {
    try {
        const serializedState = localStorage.getItem('maxValueCounter2');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
export const saveStateMin2 = (state: {minValuePreset: number}) => {
    try {
        const serializedState = JSON.stringify(state.minValuePreset);
        localStorage.setItem('minValueCounter2', serializedState);
    } catch {
        // ignore write errors
    }
};
export const saveStateMax2 = (state: {maxValuePreset: number}) => {
    try {
        const serializedState = JSON.stringify(state.maxValuePreset);
        localStorage.setItem('maxValueCounter2', serializedState);
    } catch {
        // ignore write errors
    }
};


export let rootPreloaded2 = {
    minValuePreset: loadStateMin2(),
    maxValuePreset: loadStateMax2(),
    minValue: loadStateMin2(),
    maxValue: loadStateMax2(),
}

