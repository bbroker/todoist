import React,{FunctionComponent} from 'react';
import {AddTaskStyled} from './styled'; 

export interface propsAddTask {
    onHandleClick?: (any) => void;
    
}

const AddTask:FunctionComponent<propsAddTask> = (props) => {

    const onClickOpen = () => {
        typeof props.onHandleClick === 'function' && props.onHandleClick({
            open: true
        });
    };

    return (
        <AddTaskStyled>
            <div className="app-content-list-item app-content-list-item-add-item" onClick={onClickOpen} >
                <button type="button" className="app-content-list-item-add-btn">
                    <span className="app-content-list-item-icon-add-label">
                        <svg className="app-content-list-item-icon-add" width={13} height={13}>
                            <path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="#dd4b39" fillRule="evenodd" />
                        </svg>
                    </span>
                    Add task
                </button>                       
            </div>
        </AddTaskStyled>
    );
};

export default AddTask;