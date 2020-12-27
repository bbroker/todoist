import React,{FunctionComponent} from 'react';
import {ModalStyled} from './styled';
import TaskForm from 'Modules/Components/TaskForm';

export interface propsModal {
    taskType?: number;
    task?: {
        id? : string,
        taskContent?: string,
        status?: boolean,
        flag?: string,
        isSubTask?: boolean;
    };
    subTaskList?: Array<{
        id? : string,
        taskContent?: string,
        status?: boolean,
        flag?: string, 
        parentId?: string,
        isSubTask?: boolean;
    }>; 
    
    onHandleEditInput?: (data: any) => void;
    onHandleCreateSubTask?: (data: any) => void;
    onHandleDeleteTask?: (any) => void;
    onSetPriorityColor?: (string) => void;
    onHandleEditSubTask?: (any) => void;
}

const Modal:FunctionComponent<propsModal> = (props) => {

    const onHandleEditInput = data => {
        typeof props.onHandleEditInput === 'function' && props.onHandleEditInput(data);
    };

    const onHandleCreateSubTask = data => {
        typeof props.onHandleCreateSubTask === 'function' && props.onHandleCreateSubTask(data);
    };

    const onHandleDeleteTask = data => {
        typeof props.onHandleDeleteTask === 'function' && props.onHandleDeleteTask(data);
    };

    const onGetPriorityColor = taskUpdated => {
        typeof props.onSetPriorityColor === 'function' && props.onSetPriorityColor(taskUpdated);
    };

    const onHandleEditSubTask = data => {
        typeof props.onHandleEditSubTask === 'function' && props.onHandleEditSubTask(data);
    };

    return (
        <ModalStyled>
            <TaskForm 
                onHandleEditInput = {onHandleEditInput} 
                onHandleCreateSubTask = {onHandleCreateSubTask} 
                onHandleDeleteTask = {onHandleDeleteTask}
                onGetPriorityColor = {onGetPriorityColor}
                onHandleEditSubTask = {onHandleEditSubTask}
                taskType = {props.taskType} 
                subTaskList = {props.subTaskList} 
            />
        </ModalStyled>
    );
};

Modal.defaultProps = {
    task: {},
    taskType: 0,
    subTaskList: []
};

export default Modal;