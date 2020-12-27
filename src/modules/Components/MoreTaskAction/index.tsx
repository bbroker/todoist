import React,{FunctionComponent} from 'react';
import {MoreTaskActionStyled} from './styled';
import classNames from 'classnames';

export interface propsMoreTaskAction {
    task?: {
        id? : string,
        taskContent?: string,
        status?: boolean,
        flag?: string,
        isSubTask?: boolean;
    };

    onHandleEditInputMTA?:((any) => void) | null;
    onHandleDeleteMTA?: (any) => void;
    onGetPriorityColor?: (any) => void;
}

const MoreTaskAction:FunctionComponent<propsMoreTaskAction> = props => {

    const onOpenEditTask = (e) => {
        typeof props.onHandleEditInputMTA === 'function' 
        && props.onHandleEditInputMTA({
            isCloseMoreTaskAction: true,
            isCloseCurrentTask: true,
            isCloseOverlay: true
        });
        e.stopPropagation();
    };

    const onDeleteTaskMTA = (e) => {
        typeof props.onHandleDeleteMTA === 'function' 
        && props.onHandleDeleteMTA({
            isCloseMoreTaskAction: true,
            isOpenDeleteWarningForm: true
        });
        e.stopPropagation();
    };

    const onSetPriority = (color) => {
        typeof props.onGetPriorityColor === 'function' 
        && props.onGetPriorityColor({
            color: color,
            isCloseMoreTaskAction: true
        });
    };

    return (
        <MoreTaskActionStyled>
            <div className="app-content-list-item-more-task-action-list">
                <div className="app-content-list-item-more-task-action-item" onClick = {onOpenEditTask}>
                    <svg className="app-content-list-item-more-task-action-icon" width="24" height="24">
                        <g fill="none" fillRule="evenodd">
                            <path fill="#808080" d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z" />
                            <path stroke="#808080" d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z" />
                        </g>
                    </svg>
                                Edit Task
                </div>
                <div className="app-content-list-item-more-task-action-item">
                    <svg className="app-content-list-item-more-task-action-icon" width="24" height="24">
                        <path fill="#808080" d="M10 11.5c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7a.5.5 0 0 1-.5-.5zm0-8c0-.3.2-.5.5-.5h7c.3 0 .5.2.5.5s-.2.5-.5.5h-7a.5.5 0 0 1-.5-.5zm-4 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                                Go to project
                </div>
                <div className="app-content-list-item-more-task-action-line" />
                <div className="app-content-list-item-more-task-action-selection-menu">
                    <div className="app-content-list-item-more-task-action-menu-name">Schedule</div>
                    <div className="app-content-list-item-more-task-action-menu-item">
                        <button className="app-content-list-item-more-task-action-btn">
                            <svg width="28" height="28" viewBox="0 0 28 28" className="scheduler-suggestions-item-icon--today" aria-hidden="true" focusable="false">
                                <g fill="#058527" fillRule="nonzero"><path d="M6 3.5h16A2.5 2.5 0 0 1 24.5 6v2.5h-21V6A2.5 2.5 0 0 1 6 3.5z" opacity=".1" />
                                    <path d="M22 3a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16zm0 1H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-.5 4a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1z" />
                                    <text fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" fontSize="11" transform="translate(4 2)" fontWeight="500">
                                        <tspan x="9.5" y="18" textAnchor="middle">02</tspan>
                                    </text>
                                </g>
                            </svg>
                        </button>
                        <button className="app-content-list-item-more-task-action-btn">
                            <svg width="28" height="28" viewBox="0 0 28 28" className="scheduler-suggestions-item-icon--tomorrow" aria-hidden="true" focusable="false">
                                <g fill="#ad6200" fillRule="nonzero"><path d="M14 19a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" opacity=".1" />
                                    <path d="M10.939 21.391a.5.5 0 0 1 .27.653L9.68 25.74a.5.5 0 1 1-.924-.383l1.53-3.695a.5.5 0 0 1 .654-.271zm6.776.27l1.53 3.696a.5.5 0 0 1-.923.383l-1.531-3.696a.5.5 0 0 1 .924-.382zM14 8a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm-7.391 9.061a.5.5 0 0 1-.27.654l-3.696 1.53a.5.5 0 0 1-.383-.923l3.696-1.531a.5.5 0 0 1 .653.27zm15.435-.27l3.696 1.53a.5.5 0 0 1-.383.924l-3.695-1.53a.5.5 0 1 1 .382-.924zM14 9a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2.643 8.755l3.695 1.53a.5.5 0 1 1-.382.924L2.26 9.68a.5.5 0 1 1 .383-.924zm23.367.27a.5.5 0 0 1-.27.653l-3.696 1.531a.5.5 0 0 1-.382-.924l3.695-1.53a.5.5 0 0 1 .653.27zM9.678 2.26l1.531 3.696a.5.5 0 0 1-.924.382l-1.53-3.695a.5.5 0 1 1 .923-.383zm9.297-.27a.5.5 0 0 1 .27.653l-1.53 3.695a.5.5 0 1 1-.924-.382l1.53-3.696a.5.5 0 0 1 .654-.27z" />
                                </g>
                            </svg>
                        </button>
                        <button className="app-content-list-item-more-task-action-btn">
                            <svg width="28" height="28" viewBox="0 0 28 28" className="scheduler-suggestions-item-icon--weekend" aria-hidden="true" focusable="false">
                                <path fill="#246fe0" d="M19.3 6c2 0 3.7 1.6 3.7 3.7V11a2.5 2.5 0 013 2.4v5c0 1.4-1 2.5-2.4 2.5H21v.5a.5.5 0 01-1 0V21H8v.5a.5.5 0 01-1 0V21H4.5A2.5 2.5 0 012 18.5v-5a2.5 2.5 0 013-2.4V9.7C5 7.7 6.6 6 8.7 6h10.6zm4.2 6c-.8 0-1.4.6-1.5 1.4V17H6v-3.5a1.5 1.5 0 00-3-.1v5.1c0 .8.6 1.4 1.4 1.5h19.1c.8 0 1.4-.6 1.5-1.3v-5.2c0-.8-.7-1.5-1.5-1.5zm-4.2-5H8.7A2.7 2.7 0 006 9.5v2c.6.5 1 1.2 1 2V16h14v-2.5c0-.8.4-1.5 1-2V9.7C22 8.3 20.9 7 19.5 7h-.2z" />
                            </svg>
                        </button>
                        <button className="app-content-list-item-more-task-action-btn">
                            <svg width="28" height="28" viewBox="0 0 28 28" className="scheduler-suggestions-item-icon--next-week" aria-hidden="true" focusable="false">
                                <g fill="#692fc2" fillRule="nonzero">
                                    <path d="M6 3.5h16A2.5 2.5 0 0 1 24.5 6v2.5h-21V6A2.5 2.5 0 0 1 6 3.5z" opacity=".1" />
                                    <path d="M22 3a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16zm0 1H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-3.109 12.188l.007.01-.004-.005-.003-.005zM21.5 8a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zM19 16.52a.504.504 0 0 1-.023.131l-.015.04a.494.494 0 0 1-.05.093l-.014.018a.503.503 0 0 1-.033.04l-3.511 3.512a.5.5 0 0 1-.765-.638l.057-.07L17.292 17H9.5a.5.5 0 0 1-.492-.41L9 16.5a.5.5 0 0 1 .41-.492L9.5 16h7.792l-2.646-2.646a.5.5 0 0 1 .638-.765l.07.057 3.511 3.513.017.019.009.01-.027-.03.03.035.029.04a.52.52 0 0 1 .066.162l.008.052v.007l-.002-.026.005.072v.02z" />
                                </g>
                            </svg>
                        </button>
                        <button className="app-content-list-item-more-task-action-btn">
                            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path fill="grey" fillRule="nonzero" d="M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </button>
                        <button className="app-content-list-item-more-task-action-btn">
                            <svg width="28" height="28" viewBox="0 0 28 28">
                                <path fill="grey" d="M21 11.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-7 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-7 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm14 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="app-content-list-item-more-task-action-selection-menu">
                    <div className="app-content-list-item-more-task-action-menu-name">Priority</div>
                    <div className="app-content-list-item-more-task-action-menu-item">
                        <button className={classNames('app-content-list-item-more-task-action-btn',props.task?.flag?.toUpperCase() === '#D1453B' ? 'active-priority' : '')} onClick ={(e) => {e.stopPropagation(); onSetPriority('#D1453B')}}>
                            <svg width="24" height="24">
                                <g fill="#DE4C4A">
                                    <path d="M5 5.5L6 5v14.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-14z" />
                                    <path stroke="#DE4C4A" d="M5.5 13.58s2.42-1.32 6.5.02 7.5.03 7.5.03l-.02-7.95c.01-.05-3.4 1.26-7.48-.08s-6.5-.02-6.5-.02v7.93" />
                                </g>
                            </svg>
                        </button>
                        <button className={classNames('app-content-list-item-more-task-action-btn',props.task?.flag?.toUpperCase() === '#EB8909' ? 'active-priority' : '')} onClick ={(e) => {e.stopPropagation(); onSetPriority('#EB8909')}}>
                            <svg width="24" height="24">
                                <g fill="#F49C18"><path d="M5 5.5L6 5v14.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-14z" />
                                    <path stroke="#F49C18" d="M5.5 13.58s2.42-1.32 6.5.02 7.5.03 7.5.03l-.02-7.95c.01-.05-3.4 1.26-7.48-.08s-6.5-.02-6.5-.02v7.93" />
                                </g>
                            </svg>
                        </button>
                        <button className={classNames('app-content-list-item-more-task-action-btn',props.task?.flag?.toUpperCase() === '#246FE0' ? 'active-priority' : '')} onClick ={(e) => {e.stopPropagation(); onSetPriority('#246FE0')}}>
                            <svg width="24" height="24">
                                <g fill="#4073d6">
                                    <path d="M5 5.5L6 5v14.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-14z" />
                                    <path stroke="#4073d6" d="M5.5 13.58s2.42-1.32 6.5.02 7.5.03 7.5.03l-.02-7.95c.01-.05-3.4 1.26-7.48-.08s-6.5-.02-6.5-.02v7.93" />
                                </g>
                            </svg>
                        </button>
                        <button className={classNames('app-content-list-item-more-task-action-btn',props.task?.flag?.toUpperCase() === 'GREY' ? 'active-priority' : '')} onClick ={(e) => {e.stopPropagation(); onSetPriority('GREY')}}>
                            <svg width="24" height="24">
                                <g fill="#808080">
                                    <path d="M5 5.5L6 5v14.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-14z" />
                                    <path d="M5 13.51V5.29l.26-.15c.17-.09.46-.21.88-.33 1.62-.47 3.65-.46 6.02.31a11.9 11.9 0 0 0 6.91.15l.21-.06.09-.02.1-.01c.18-.05.18-.05.51.5l.01 8.29-.32.12c-.2.08-.58.2-1.09.31a12.7 12.7 0 0 1-6.74-.33 9.2 9.2 0 0 0-5.43-.3 3.66 3.66 0 0 0-.67.25.5.5 0 0 1-.74-.47.5.5 0 0 1 0-.04zm1.14-.7a10.2 10.2 0 0 1 6.02.31 11.72 11.72 0 0 0 6.83.15V6.32a12.63 12.63 0 0 1-.47.11c-2.08.43-4.34.4-6.68-.36A9.2 9.2 0 0 0 6 5.91v6.94l.14-.04z" />
                                </g>
                            </svg>
                        </button>
                    </div>
                                
                </div>
                <div className="app-content-list-item-more-task-action-line" />
                <div className="app-content-list-item-more-task-action-item">
                    <svg className="app-content-list-item-more-task-action-icon" width="24" height="24">
                        <path fill="#808080" fillRule="nonzero" d="M6.355 17.438a7.5 7.5 0 1 1 11.29 0l1.709 1.708a.5.5 0 0 1-.708.708l-1.708-1.709A7.471 7.471 0 0 1 12 20c-1.891 0-3.619-.7-4.938-1.855l-1.708 1.709a.5.5 0 0 1-.708-.708l1.709-1.708zM12 19a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0-7h2.5a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5V8a.5.5 0 1 1 1 0v4zm4.604-6.896a.5.5 0 0 1-.708-.708l.336-.335a2.5 2.5 0 0 1 3.536 0l.671.671a2.5 2.5 0 0 1 0 3.536l-.335.336a.5.5 0 0 1-.708-.708l.336-.335a1.5 1.5 0 0 0 0-2.122l-.671-.671a1.5 1.5 0 0 0-2.122 0l-.335.336zM4.605 7.898a.5.5 0 0 1-.707.707l-.337-.337a2.5 2.5 0 0 1 0-3.536l.671-.671a2.5 2.5 0 0 1 3.536 0l.337.337a.5.5 0 0 1-.707.707l-.337-.337a1.5 1.5 0 0 0-2.122 0l-.671.671a1.5 1.5 0 0 0 0 2.122l.337.337z" />
                    </svg>
                                Reminder
                </div>

                <div className="app-content-list-item-more-task-action-line" />

                <div className="app-content-list-item-more-task-action-item">
                    <svg className="app-content-list-item-more-task-action-icon" width="24" height="24">
                        <g fill="none" transform="translate(4 4)">
                            <circle cx="8" cy="8" r="7.5" stroke="#808080" />
                            <path fill="#808080" d="M10.11 7.82L8.15 5.85a.5.5 0 1 1 .7-.7l2.83 2.82a.5.5 0 0 1 0 .71l-2.83 2.83a.5.5 0 1 1-.7-.7l1.98-1.99H4.5a.5.5 0 1 1 0-1h5.61z" />
                        </g>
                    </svg>
                                Move to project
                </div>
                <div className="app-content-list-item-more-task-action-item">
                    <svg className="app-content-list-item-more-task-action-icon" width="24" height="24">
                        <g fill="none">
                            <path fill="#808080" d="M11 13h2.5c.3 0 .5.2.5.5s-.2.5-.5.5H11v2.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V14H7.5a.5.5 0 0 1-.5-.5c0-.3.2-.5.5-.5H10v-2.5c0-.3.2-.5.5-.5s.5.2.5.5V13z" />
                            <rect width="12" height="12" x="4.5" y="7.5" stroke="#808080" rx="2" />
                            <path fill="#808080" d="M19 16.7V6a1 1 0 0 0-1-1H7.3c.2-.3.4-.6.7-.7.3-.2.7-.3 1.6-.3h7.8c1 0 1.3 0 1.6.3.3.1.6.4.7.7.2.3.3.7.3 1.6v7.8c0 1 0 1.3-.3 1.6-.1.3-.4.5-.7.7zm-1.6.3H9.6h7.8z" />
                        </g>
                    </svg>
                                Duplicate
                </div>
                <div className="app-content-list-item-more-task-action-item">
                    <svg className="app-content-list-item-more-task-action-icon" width="24" height="24">
                        <path fill="#808080" d="M7.39 12.339l.706.707-1.768 1.768a2 2 0 1 0 2.829 2.828l3.535-3.535a2 2 0 0 0 0-2.829l.707-.707a3 3 0 0 1 0 4.243l-3.535 3.535a3 3 0 0 1-4.243-4.242l1.768-1.768zm8.838-.354l-.707-.707 1.768-1.768a2 2 0 1 0-2.829-2.828l-3.535 3.536a2 2 0 0 0 0 2.828l-.707.707a3 3 0 0 1 0-4.243l3.535-3.535a3 3 0 0 1 4.243 4.243l-1.768 1.767z" />
                    </svg>
                                Copy link to task
                </div>

                <div className="app-content-list-item-more-task-action-line" />

                <div className="app-content-list-item-more-task-action-item" onClick={onDeleteTaskMTA}>
                    <svg className="app-content-list-item-more-task-action-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <g fill="none" fillRule="evenodd">
                            <path d="M0 0h24v24H0z" />
                            <rect width="14" height="1" x="5" y="6" fill="#808080" rx=".5" />
                            <path className="delete-btn-path1" fill="#808080" d="M10 9h1v8h-1V9zm3 0h1v8h-1V9z" />
                            <path className="delete-btn-path2" stroke="#808080" d="M17.5 6.5h-11V18A1.5 1.5 0 0 0 8 19.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0 0 14 3.5h-4A1.5 1.5 0 0 0 8.5 5v1.5z" />
                        </g>
                    </svg>
                                Delete task
                </div>
                            
            </div>
                    
        </MoreTaskActionStyled>
    );
};

export default MoreTaskAction;