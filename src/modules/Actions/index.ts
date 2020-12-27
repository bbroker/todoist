import * as Types from '../Constants/ActionsTypes';
import callApi from 'Modules/utils/apiCaller';

export const actToggleCreateTask = (toggleStatus) => {
    return {
        type: Types.OPEN_CREATE_TASK,
        toggleStatus
    };
};

export const actFetchTaskListRequest = () => {
    return dispatch => {
        return callApi('tasks','GET',null).then(res => {
            dispatch(actFetchTaskList(res.data));
        });
    };
};

export const actFetchTaskList = (taskList) => {
    return {
        type: Types.FETCH_TASK_LIST,
        taskList
    };
};

export const actCreateTaskRequest = (formValues) => {
    return (dispatch) => {
        return callApi('tasks','POST',formValues).then(res => {
            dispatch(actCreateTask(res.data));
        });
    };
};

export const actCreateTask = (formValues) => {
    return {
        type: Types.CREATE_TASK,
        formValues
    };
};

export const actOpenTaskForm = (status) => {
    return {
        type: Types.OPEN_TASK_FORM,
        status
    };
};

export const actCloseTaskForm = (status) => {
    return {
        type: Types.CLOSE_TASK_FORM,
        status
    };
};

export const actGetTaskValuesRequest = id => {
    return dispatch => {
        return callApi(`tasks/${id}`,'GET',null).then(res => {
            dispatch(actGetTaskValues(res.data));
        });
    };
};

export const actGetTaskValues = (task) => {
    return {
        type: Types.GET_TASK_VALUES,
        task
    };
};
