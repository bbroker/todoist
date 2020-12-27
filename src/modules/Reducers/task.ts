import * as Types from 'Modules/Constants/ActionsTypes';

const initialState = {};

const task = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_TASK_VALUES:
            state = action.task;
            return state;
        default: return state;
    }
};

export default task;