import * as Types from '../Constants/ActionsTypes';

const initialState = {
    openCreateTaskStatus: false,
    openTaskFormStatus: false
};

const openStatusComponents = (state = initialState, action) => {
    switch (action.type) {
        case Types.OPEN_CREATE_TASK:
            state.openCreateTaskStatus = action.toggleStatus;
            return state;
        case Types.OPEN_TASK_FORM:      
            state.openTaskFormStatus = action.status;
            return state;
        case Types.CLOSE_TASK_FORM:
            state.openTaskFormStatus = action.status;
            return state;
        default: return state;
    }
};

export default openStatusComponents;
