import * as Types from '../Constants/ActionsTypes';

interface stateTypes {
        id? : string,
        taskContent?: string,
        status?: boolean,
        flag?: string,
        isSubTask?: boolean,
        priority?:number,
        day?: string
} 

const initialState: stateTypes[] = [{}];

const taskList = (state = initialState,action ) => {
    
    switch (action.type) {
        case Types.FETCH_TASK_LIST:
            state = action.taskList;
            return [...state];
        case Types.CREATE_TASK:
            const tasks = state ? [...state] : [];
            const {id,taskContent,status,flag,priority,day} = action.formValues;
           
            id && taskContent && status && flag && priority && day && tasks.push(action.formValues);
            state = tasks;

            return [...state];
        default: return [...state];
    }
};

export default taskList;