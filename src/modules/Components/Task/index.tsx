import React, {useState, useEffect,FunctionComponent} from 'react';
import {TaskStyled} from './styled';
import MoreTaskAction from 'Modules/Components/MoreTaskAction';
import classNames from 'classnames';
import Scheduler from 'Modules/Components/Scheduler';
import CreateTask from 'Modules/Components/CreateTask';
import DeleteWarningForm from 'Modules/Components/DeleteWarningForm';
import {connect} from 'react-redux';
import {actOpenTaskForm,actGetTaskValuesRequest} from 'Modules/Actions/index';

export interface propsTask {
    task?: {
        id? : string,
        taskContent?: string,
        status?: boolean,
        flag?: string,
        isSubTask?: boolean,
        day?: string
    };
    subTask? :{
        id? : string,
        taskContent?: string,
        status?: boolean,
        flag?: string, 
        parentId?: string,
        isSubTask?: boolean,
        day?: string
    };

    provided?: any;
    onOpenTask?: (any) => void;
    onDelete?: (any) => void;
    onOpenModal?: (any) => void;
    onOpenSubTask?: (any) => void;
    onOpenTaskForm?: (any) => void;

    // Redux
    onGetTaskValues?: (any) => void;
    onToggleCreateTask?: (boolean) => void;
}

const Task:FunctionComponent<propsTask> = (props) => {

    const [isOpenMoreTaskAction, setOpenMoreTaskAction] = useState(false);
    const [isVisibleActionButtonMore, setVisibleActionButtonMore] = useState(false);
    const [isVisibleActionSchedulerButton, setVisibleActionSchedulerButton] = useState(false);
    const [isClickScheduleButton, setOpenScheduler] = useState(false);
    const [isClickEditButton, setOpenEditTask] = useState(false);
    const [isUnderTaskBoxVisible, setStatusUnderTaskBox] = useState(true);
    const [isOpenDeleteWarningForm, setOpenDeleteWarningForm] = useState(false);
    const [isOpenSecondScheduler, setOpenSecondScheduler] = useState(false);

    useEffect(() => {
        props.subTask?.isSubTask && setStatusUnderTaskBox(!props.subTask?.isSubTask);
        window.addEventListener('click',closeTab);
        return () => {
            window.removeEventListener('click',closeTab);
        };
    },[]);

    const closeTab = () => {
        setOpenMoreTaskAction(false);
        setOpenScheduler(false);
        setVisibleActionButtonMore(false);
        setVisibleActionSchedulerButton(false);
        setOpenDeleteWarningForm(false);
        setOpenSecondScheduler(false);
    }; 

    const onOpenTask = id => {
        
        typeof props.onGetTaskValues === 'function' && props.onGetTaskValues(id);

        typeof props.onOpenTaskForm === 'function' && props.onOpenTaskForm(true);

        typeof props.onOpenSubTask === 'function' && props.onOpenSubTask({
            status: true,
            subTask: props.subTask
        });
    }; 

    const onOpenMoreTaskAction = (event) => {
        setOpenMoreTaskAction(!isOpenMoreTaskAction);
        setVisibleActionButtonMore(!isVisibleActionButtonMore);
        event.stopPropagation();

        typeof props.onOpenModal === 'function' && props.onOpenModal(true);
    };
    
    const onOpenScheduler = e => {
        setOpenScheduler(!isClickScheduleButton);
        setVisibleActionSchedulerButton(!isVisibleActionSchedulerButton);
        typeof props.onOpenModal === 'function' && props.onOpenModal(true);
        e.stopPropagation();
    };

    const onOpenEditTask = e => {
        
        e.stopPropagation();
    };

    const onHandleClick = () => {
        setOpenEditTask(false);
    };

    const onClickFinishButton = (e) => {
        typeof props.onDelete === 'function' && props.onDelete(props.task);
        e.stopPropagation();
    };

    const onClickCommentButton = e => {
        typeof props.onOpenTask === 'function' &&
        props.onOpenTask({
            status: true,
            task: props.task,
            taskItem: 1
        });
        e.stopPropagation();
    };

    const onOpenSecondScheduler = (e) => {
        setOpenSecondScheduler(!isOpenSecondScheduler);
        e.stopPropagation();
    };

    const flag = props.task?.flag;

    const id = props.task?.id;

    return (
        <TaskStyled>

            {
                !isClickEditButton && (
                    <li className="app-content-list-item" onClick={(e) => {onOpenTask(id); e.stopPropagation()}} ref={props.provided.innerRef} {...props.provided.draggableProps} >
                        <div className="app-content-list-item-container">
                            <div className="app-content-list-item-circle-move-and-text-wrapper">
                                <span className="app-content-list-item-move-item" {...props.provided.dragHandleProps}>
                                    <svg width={24} height={24}>
                                        <path fill="currentColor" d="M14.5 15.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 15.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 15.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 10.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 10.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 5.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 5.5z" />
                                    </svg>
                                </span>
                                <button className="app-content-list-item-circle" style={{borderColor: flag !== 'GREY' ? flag : 'GREY', borderWidth: (flag?.toUpperCase() === '#246FE0' || flag?.toUpperCase() === '#D1453B' || flag?.toUpperCase() === '#EB8909')  ? '2px' : '1px'}}  type="button" role="checkbox" onClick={onClickFinishButton}>
                                    <svg className="app-content-list-item-circle-check-icon"  width={24  } height={24}>
                                        <path fill={flag !== 'black' ? flag : 'black' } d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z" />
                                    </svg>
                                </button>
                                <div className="app-content-list-item-text">{props.task?.taskContent || props.subTask?.taskContent}</div>
                            </div>
                            
                            <div className="app-content-list-item-action-bar" >
                                <button type="button" className="app-content-list-item-action-bar-btn" onClick={onOpenEditTask}>
                                    <svg width={24} height={24}>
                                        <g fill="none" fillRule="evenodd">
                                            <path fill="currentColor" d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z" />
                                            <path stroke="currentColor" d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z" />
                                        </g>
                                    </svg>
                                    <div className="app-content-list-item-action-bar-btn-label-1">
                                        Edit&nbsp;&nbsp;
                                        <span className="app-content-list-item-action-bar-btn-label-1-text-1" >alt</span>
                                        <span className="app-content-list-item-action-bar-btn-label-1-text-2" >click</span>
                                    </div>
                                </button>
                                <button type="button" className={classNames('app-content-list-item-action-bar-btn',isVisibleActionSchedulerButton ? 'activeScheduler' : '')} onClick={onOpenScheduler}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" data-reach-tooltip-trigger>
                                        <path fill="currentColor" fillRule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm10 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 8h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z" />
                                    </svg>
                                    <div className="app-content-list-item-action-bar-btn-label-2-3">
                                        Schedule
                                    </div>
                                </button>

                                {
                                    isClickScheduleButton && (
                                        <div className={classNames('position-scheduler','app-content-list-item-action-bar-btn',isVisibleActionSchedulerButton ? 'activeScheduler' : '')} >
                                            <Scheduler />
                                        </div>
                                    )
                                }

                                <button type="button" className="app-content-list-item-action-bar-btn" onClick={onClickCommentButton}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} data-svgs-path="sm1/comments.svg">
                                        <path fill="currentColor" fillRule="nonzero" d="M11.707 20.793A1 1 0 0 1 10 20.086V18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4.5l-2.793 2.793zM11 20.086L14.086 17H19a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6v3.086z" />
                                    </svg>
                                    <div className="app-content-list-item-action-bar-btn-label-2-3">
                                        Comment
                                    </div>
                                </button>
                                <button type="button" className={classNames('app-content-list-item-action-bar-btn','app-content-list-item-action-bar-etc-btn',isVisibleActionButtonMore)} onClick = {onOpenMoreTaskAction}>
                                    <svg width={15} height={3}>
                                        <path d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" fillRule="evenodd" />
                                    </svg>
                                    <div className="app-content-list-item-action-bar-btn-label-4">
                                        More Task Actions
                                    </div>
                                </button>
                                {
                                    isOpenMoreTaskAction && (
                                        <div className={classNames('more-task-action-position',isVisibleActionButtonMore ? 'activeMoreTaskAction' : '')}>
                                            <MoreTaskAction task ={props.task} />
                                        </div>

                                    )
                                }
                            </div>
                        </div>
                        {
                            isUnderTaskBoxVisible && (
                                <div className="app-content-list-item-under-task-box">
                                    <div className="app-content-list-item-under-task-box-date" onClick={onOpenSecondScheduler}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" className="app-content-list-item-under-task-box-calendar_icon">
                                            <path fill="currentColor" fillRule="nonzero" d="M9.5 1A1.5 1.5 0 0 1 11 2.5v7A1.5 1.5 0 0 1 9.5 11h-7A1.5 1.5 0 0 1 1 9.5v-7A1.5 1.5 0 0 1 2.5 1h7zm0 1h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5zM8 7.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM8.5 4a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z" />
                                        </svg>
                                        {props.task?.day === (new Date()).toLocaleDateString() ? 'Today' : props.task?.day}
                                    </div>
                                    {
                                        isOpenSecondScheduler && (
                                            <div className="under-task-box-scheduler-position">
                                                <Scheduler />
                                            </div>
                                        )
                                    }
                                    <div className="app-content-list-item-inbox">
                                        <div className="app-content-list-item-inbox-text">
                                        inbox
                                        </div>
                                        <div className="app-content-list-item-inbox-icon">
                                            <svg width={12} height={12} viewBox="0 0 16 16" className="project_icon project_icon_inbox">
                                                <g fill="currentColor">
                                                    <path d="M13.5 9.5V12a1.5 1.5 0 01-1.5 1.5H4A1.5 1.5 0 012.5 12V9.5h3.75a1.75 1.75 0 003.5 0h3.75z" opacity="0.1" />
                                                    <path d="M10.491 2a2 2 0 011.923 1.45l1.509 5.28a2 2 0 01.077.55V12a2 2 0 01-2 2H4a2 2 0 01-2-2V9.28a2 2 0 01.077-.55l1.509-5.28A2 2 0 015.509 2h4.982zm0 1H5.51a1 1 0 00-.962.725l-1.509 5.28A1 1 0 003 9.28V12a1 1 0 001 1h8a1 1 0 001-1V9.28a1 1 0 00-.038-.275l-1.51-5.28a1 1 0 00-.96-.725zM6.25 9a.5.5 0 01.5.5 1.25 1.25 0 002.5 0 .5.5 0 01.5-.5h1.75a.5.5 0 110 1h-1.306a2.25 2.25 0 01-4.388 0H4.5a.5.5 0 010-1z" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                            )

                        }
                    </li>

                )
            }

            {
                isClickEditButton && (
                    <div>
                        <CreateTask onHandleClick= {onHandleClick} task ={props.task} />
                    </div>
                )
            }

            {
                isOpenDeleteWarningForm && (
                    <DeleteWarningForm taskDeleteItem = {props.task} />

                )
            }
                    
        </TaskStyled>
    );
};

Task.defaultProps = {
    task:{},
    subTask:{}
};

const mapDispatchToProps = (dispatch) => ({
    onOpenTaskForm: (status) => dispatch(actOpenTaskForm(status)),
    onGetTaskValues: id => dispatch(actGetTaskValuesRequest(id))
});

export default connect(null,mapDispatchToProps)(Task);