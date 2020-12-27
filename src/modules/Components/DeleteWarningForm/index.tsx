import React, {FunctionComponent} from 'react';
import {DeleteWarningFormStyled} from './styled';

export interface propsDeleteWarningForm {
    taskDeleteItem?: {
        id? : string,
        taskContent?: string,
        status?: boolean,
        flag?: string,
        isSubTask?: boolean;
    };

    onHandleCancelDeleteForm?: (any) => void;
    onHandleDeleteTask?: (any) => void;
}

const DeleteWarningForm:FunctionComponent<propsDeleteWarningForm> = (props) => {

    const onHandleClick = e => {
        e.stopPropagation();
    };
    
    const onClickCancelButton = e => {
        typeof props.onHandleCancelDeleteForm === 'function' 
        && props.onHandleCancelDeleteForm({
            isCloseDeleteForm: true
        });
        e.stopPropagation();
    };

    const onClickDeleteButton = (e) => {
        typeof props.onHandleDeleteTask === 'function' 
        && props.onHandleDeleteTask({
            isConfirmDeleteTask: true
        });
        e.stopPropagation();
    };

    return (
        <DeleteWarningFormStyled>
            <div className="modal">
                <div className="delete-form" onClick ={onHandleClick}>
                    <section className="delete-form-body">
                        <div className="delete-form-warning-icon">
                            <svg width="28" height="28">
                                <path fill="#777" fillRule="nonzero" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm.5 6a.5.5 0 0 1 .5.5V15h1a.5.5 0 1 1 0 1h-3a.5.5 0 1 1 0-1h1v-4h-1a.5.5 0 1 1 0-1h1.5zm-.16-2.68a.84.84 0 1 1 0 1.68.84.84 0 0 1 0-1.68z" />
                            </svg>
                        </div>
                        <div className="delete-form-notice">
                            Are you sure you want to delete <span className="delete-form-task-content">{props.taskDeleteItem?.taskContent}</span>?
                        </div>
                    </section>
                    <footer className="delete-form-footer">
                        <button className="delete-form-footer-button cancel-btn" onClick = {onClickCancelButton}>Cancel</button>
                        <button className="delete-form-footer-button delete-btn" onClick = {onClickDeleteButton}>Delete</button>
                    </footer>
                </div>
            </div>
        </DeleteWarningFormStyled>
    );
};

export default DeleteWarningForm;