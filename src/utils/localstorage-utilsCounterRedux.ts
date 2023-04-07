

export const loadStateMin = () => {
    try {
        const serializedState = localStorage.getItem('minValueCounter');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined;
    }
};
export const loadStateMax = () => {
    try {
        const serializedState = localStorage.getItem('maxValueCounter');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
export const saveStateMin = (state: {minValuePreset: number}) => {
    try {
        const serializedState = JSON.stringify(state.minValuePreset);
        localStorage.setItem('minValueCounter', serializedState);
    } catch {
        // ignore write errors
    }
};
export const saveStateMax = (state: {maxValuePreset: number}) => {
    try {
        const serializedState = JSON.stringify(state.maxValuePreset);
        localStorage.setItem('maxValueCounter', serializedState);
    } catch {
        // ignore write errors
    }
};


export let rootPreloaded = {
    minValuePreset: loadStateMin(),
    maxValuePreset: loadStateMax(),
    minValue: loadStateMin(),
    maxValue: loadStateMax(),
}

