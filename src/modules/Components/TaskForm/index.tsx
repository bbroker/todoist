import React, {useState, useEffect,FunctionComponent} from 'react';
import {TaskFormStyled} from './styled';
import AddTask from 'Modules/Components/AddTask';
import CreateTask from 'Modules/Components/CreateTask';
import TypeOfProjectList from 'Modules/Components/TypeOfProjectList';
import PriorityBox from 'Modules/Components/PriorityBox';
import Scheduler from 'Modules/Components/Scheduler';
import UpgradeForm from 'Modules/Components/UpgradeForm';
import classNames from 'classnames';
import Task from 'Modules/Components/Task';
import DeleteWarningForm from 'Modules/Components/DeleteWarningForm';
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd';
import {connect} from 'react-redux';
import {actCloseTaskForm} from 'Modules/Actions/index';

export interface propsTaskForm {
    subTaskList?: Array<{
        id? : string,
        taskContent?: string,
        status?: boolean,
        flag?: string, 
        parentId?: string,
        isSubTask?:boolean,
        day?: string
    }>;
    taskType?: number;
    task?: {
        id? : string,
        taskContent?: string,
        status?: boolean,
        flag?: string,
        isSubTask?:boolean,
        day?:string
    };
    onHandleEditInput?:  (data:any) => void;
    onCloseForm?: (any) => void;
    onHandleCreateSubTask?: (data:any) => void;
    onHandleDeleteTask?: (any) => void;
    onGetPriorityColor?: (string) => void;
    onHandleEditSubTask?: (any) => void;
}

const TaskForm:FunctionComponent<propsTaskForm> = (props) => {

    const [isClickAddButton, setOpenCreateTaskView] = useState(false);
    const [isClickTaskContent, setOpenTaskForm] = useState(false);
    const [isClickTypeOfProjectButton,setOpenTypeOfProjectList] = useState(false);
    const [isClickFlagButton, setOpenPriorityBox] = useState(false);
    const [isClickScheduleButton, setOpenScheduler] = useState(false);
    const [isClickUpgradeButton, setOpenUpgradeForm] = useState(false);
    const [isClick3DotsButton, setOpenMoreTaskAction] = useState(false);
    const [isClickTaskFormSubTask, setOpenTaskFormSubTask] = useState(true);
    const [isClickTaskFormComment, setOpenTaskFormComment] = useState(false);
    const [isClickTaskFormActivity, setOpenTaskFormActivity] = useState(false);
    const [addTaskOpening, setAddTaskOpening] = useState(true);
    const [isDeleteWarningFormOpenning, setDeleteWarningFormOpenning] = useState(false);
    const [isUpgradeFormOpeningFromCommentBox, setUpgradeFormOpeningFromCommentBox] = useState(false);
    const [isCopiedBoxOpening, setCopiedBoxOpening] = useState(false);
    const [subTaskListInsideTask, setSubTaskListInsideTask] = useState(() => {
        const subTasks = props.subTaskList?.filter((subTask) =>{
            return subTask.parentId === props.task?.id;
        });

        return subTasks;
    });

    useEffect(() => {
        if (props?.taskType && props?.taskType === 1) {
            setOpenTaskFormComment(true);
            setOpenTaskFormSubTask(false);
            setOpenTaskFormActivity(false);
        }
        window.addEventListener('click',closeTab);
        return () => {
            window.removeEventListener('click',closeTab);
        };
    },[props.taskType]);

    useEffect(() => {
    },[]); 

    const closeTab = () => {
        setOpenTypeOfProjectList(false);
        setOpenPriorityBox(false);
        setOpenScheduler(false);
        setOpenUpgradeForm(false);
        setOpenMoreTaskAction(false);
        setUpgradeFormOpeningFromCommentBox(false);
    };

    const onCloseForm = () => {
        typeof props.onCloseForm === 'function' && props.onCloseForm(false);
    };

    const onCloseTaskForm = (data) => {
        setOpenTaskForm(data.open);
    };

    const onClickAddTask = () => {
        setOpenCreateTaskView(true);
        setAddTaskOpening(false);
    };

    const onHandleClickCreateTask = () => {
        setAddTaskOpening(true);
        setOpenCreateTaskView(false);
    };

    const onClickTaskContent = () => {
        setOpenTaskForm(true);
    };

    const onOpenTypeOfProjectList = e => {
        setOpenTypeOfProjectList(!isClickTypeOfProjectButton);
        e.stopPropagation();    
    };

    const onOpenPriorityBox = e => {
        setOpenPriorityBox(!isClickFlagButton);
        e.stopPropagation();
    };

    const onOpenScheduler = e => {
        setOpenScheduler(!isClickScheduleButton);
        e.stopPropagation();
    };

    const onOpenUpgradeForm = e => {
        setOpenUpgradeForm(!isClickUpgradeButton);
        e.stopPropagation();
    };

    const onOpenMoreActionBar = e => {
        setOpenMoreTaskAction(!isClick3DotsButton);
        e.stopPropagation();
    };
    
    const onClickTaskFormSubTask = () => {
        setOpenTaskFormSubTask(true);
        setOpenTaskFormComment(false);
        setOpenTaskFormActivity(false);
    };

    const onClickTaskFormComment = () => {
        setOpenTaskFormComment(true);
        setOpenTaskFormSubTask(false);
        setOpenTaskFormActivity(false);
    };

    const onClickTaskFormActivity = () => {
        setOpenTaskFormActivity(true);
        setOpenTaskFormSubTask(false);
        setOpenTaskFormComment(false);
    };

    const onHandleCreateSubTask = data => {
        const subTaskCurrent = subTaskListInsideTask ? [...subTaskListInsideTask] : [];

        subTaskCurrent.push(data);
        typeof props.onHandleCreateSubTask === 'function' && props.onHandleCreateSubTask(data);
        setSubTaskListInsideTask(subTaskCurrent);

    };

    const subTaskElements = subTaskListInsideTask?.map((subTask, index) => {
        return (
            <Draggable key={subTask.id} draggableId={subTask.id} index={index}>
                {
                    (provided) => (<Task provided ={provided} subTask={subTask} />) 
                }
            </Draggable>               
        );
    });

    const onDeleteTaskatTaskForm = e => {
        setOpenMoreTaskAction(false);
        setDeleteWarningFormOpenning(true);   
        e.stopPropagation();
    };

    const onOpenEditTask = e => {
        setOpenMoreTaskAction(false);
        setOpenTaskForm(true);
        e.stopPropagation();
    };

    const onOpenCommentBox = e => {
        setUpgradeFormOpeningFromCommentBox(true);
        setOpenMoreTaskAction(false);
        e.stopPropagation();
    };

    const onCopyToClipboard = () => {
        setOpenMoreTaskAction(false);
        setCopiedBoxOpening(true);
        const dummy = document.createElement('input');
        let url = window.location.href;
        
        document.body.appendChild(dummy);
        dummy.value = url;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
    };

    const onCloseCopiedBox = () => {
        setCopiedBoxOpening(false);
    };

    const handleOnDragEnd = (result) => {
        if (!result.destination) {return}

        const items = subTaskListInsideTask ? [...subTaskListInsideTask] : [];
        
        const [reorderedItem] = items && items.splice(result.source.index, 1);

        items && items.splice(result.destination.index, 0, reorderedItem);
        typeof props.onHandleEditSubTask === 'function' && props.onHandleEditSubTask(items);

        setSubTaskListInsideTask(items);
    };

    const task = props.task;

    return (
        <TaskFormStyled>
            <div className="task-form-inbox" >
                <div className="task-form-inbox-left-box">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="">
                        <g fill="#246fe0">
                            <path d="M13.5 9.5V12a1.5 1.5 0 01-1.5 1.5H4A1.5 1.5 0 012.5 12V9.5h3.75a1.75 1.75 0 003.5 0h3.75z" opacity="0.1" />
                            <path d="M10.491 2a2 2 0 011.923 1.45l1.509 5.28a2 2 0 01.077.55V12a2 2 0 01-2 2H4a2 2 0 01-2-2V9.28a2 2 0 01.077-.55l1.509-5.28A2 2 0 015.509 2h4.982zm0 1H5.51a1 1 0 00-.962.725l-1.509 5.28A1 1 0 003 9.28V12a1 1 0 001 1h8a1 1 0 001-1V9.28a1 1 0 00-.038-.275l-1.51-5.28a1 1 0 00-.96-.725zM6.25 9a.5.5 0 01.5.5 1.25 1.25 0 002.5 0 .5.5 0 01.5-.5h1.75a.5.5 0 110 1h-1.306a2.25 2.25 0 01-4.388 0H4.5a.5.5 0 010-1z" />
                        </g>
                    </svg>
                    <div className="task-form-inbox-left-box-text">Inbox</div>
                </div>
                <svg viewBox="0 0 24 24" className="task-form-inbox-icon_close" width="24" height="24" onClick={onCloseForm}>
                    <path fill="currentColor" fillRule="nonzero" d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z" />
                </svg>
            </div>
            {
                !isClickTaskContent && (
                    <div className="task-form-header" >
                        <button type="button" className="task-form-header-check-btn" style = {{borderColor: props.task?.flag ? props.task?.flag : '', borderWidth: props.task?.flag !== 'grey' ? '2px' : '1px'}} >
                            <svg className="task-form-header-check-icon" style={{top: '-3px', left: '-4px'}} width="24" height="24">
                                <path fill={props.task?.flag} d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z" />
                            </svg>
                        </button>
                        <div className="task-form-header-main">
                            <div className="task-form-task-content" onClick={onClickTaskContent}>{task?.taskContent}</div>
                            
                            <div className="task-form-date-box">
                                <button className="task-form-date-box-btn" type="button" onClick={onOpenScheduler}>
                                    <svg data-svgs-path="sm1/calendar_small.svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                        <path fill="currentColor" fillRule="nonzero" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.25 7a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm.75-5a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1h7z" />
                                    </svg>
                                    <div className="task-form-date-box--text">{task?.day}</div>
                                </button>
                                {
                                    isClickScheduleButton && (
                                        <div className="position-scheduler">
                                            <Scheduler />
                                        </div>
                                    )
                                }
                            </div>
                            <div className="task-form-action-bar">
                                <div className="task-form-action-bar-btn-wrapper">
                                    <button className="task-form-action-bar-btn" onClick={onOpenTypeOfProjectList}>
                                        <svg data-svgs-path="sm1/project.svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="#808080" fillRule="nonzero" d="M10.5 17h9a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1zm0-6h9a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1zm0-6h9a.5.5 0 1 1 0 1h-9a.5.5 0 1 1 0-1zM5.75 18.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm0-6a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zm0-6a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
                                        </svg>
                                        <div className= "task-form-action-bar-label">
                                            Select a project
                                            <span className= "task-form-action-bar-label-text">#</span>
                                        </div>
                                    </button>

                                    {
                                        isClickTypeOfProjectButton && (
                                            <TypeOfProjectList />
                                        )
                                    }

                                    <button className="task-form-action-bar-btn" onClick={onOpenUpgradeForm}>
                                        <svg data-svgs-path="sm1/label_outline.svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="#808080" fillRule="nonzero" d="M3.914 11.086l6.5-6.5A2 2 0 0 1 11.828 4H18a2 2 0 0 1 2 2v6.172a2 2 0 0 1-.586 1.414l-6.5 6.5a2 2 0 0 1-2.828 0l-6.172-6.172a2 2 0 0 1 0-2.828zm.707.707a1 1 0 0 0 0 1.414l6.172 6.172a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 0 0 .293-.707V6a1 1 0 0 0-1-1h-6.172a1 1 0 0 0-.707.293l-6.5 6.5zM14.75 10.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
                                        </svg>
                                        <div className= "task-form-action-bar-label">
                                            Add label(s)
                                            <span className= "task-form-action-bar-label-text">@</span>
                                        </div>
                                    </button>

                                    {
                                        isClickUpgradeButton && (
                                            <UpgradeForm />
                                        )
                                    }

                                    <button className="task-form-action-bar-btn" onClick={onOpenPriorityBox}>
                                        <svg data-svgs-path="sm1/priority_flag.svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill={task?.flag} fillRule="nonzero" d="M5 13.777V19.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.82 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0 1 20 4.5V13a.5.5 0 0 1-.223.416c-1.09.727-2.519 1.084-4.277 1.084-1.113 0-1.92-.196-3.658-.776C10.204 13.18 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777zm0-1.123C5.965 12.216 7.133 12 8.5 12c1.113 0 1.92.196 3.658.776 1.638.545 2.371.724 3.342.724 1.45 0 2.614-.262 3.5-.777V5.346c-.965.438-2.133.654-3.5.654-1.113 0-1.92-.196-3.658-.776C10.204 4.68 9.47 4.5 8.5 4.5c-1.45 0-2.614.262-3.5.777v7.377z" />
                                        </svg>
                                        <div className= "task-form-action-bar-label-3">
                                            Add label(s)
                                            <span className= "task-form-action-bar-label-3-text">p1</span>,
                                            <span className= "task-form-action-bar-label-3-text">p2</span>,
                                            <span className= "task-form-action-bar-label-3-text">p3</span>,
                                            <span className= "task-form-action-bar-label-3-text">p4</span>
                                        </div>
                                    </button>

                                    {
                                        isClickFlagButton && (
                                            <PriorityBox />
                                        )
                                    }

                                    <button className="task-form-action-bar-btn" onClick={onOpenUpgradeForm}>
                                        <svg data-svgs-path="sm1/reminder.svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="#808080" fillRule="nonzero" d="M6.355 17.438a7.5 7.5 0 1 1 11.29 0l1.709 1.708a.5.5 0 0 1-.708.708l-1.708-1.709A7.471 7.471 0 0 1 12 20c-1.891 0-3.619-.7-4.938-1.855l-1.708 1.709a.5.5 0 0 1-.708-.708l1.709-1.708zM12 19a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0-7h2.5a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5V8a.5.5 0 1 1 1 0v4zm4.604-6.896a.5.5 0 0 1-.708-.708l.336-.335a2.5 2.5 0 0 1 3.536 0l.671.671a2.5 2.5 0 0 1 0 3.536l-.335.336a.5.5 0 0 1-.708-.708l.336-.335a1.5 1.5 0 0 0 0-2.122l-.671-.671a1.5 1.5 0 0 0-2.122 0l-.335.336zM4.605 7.898a.5.5 0 0 1-.707.707l-.337-.337a2.5 2.5 0 0 1 0-3.536l.671-.671a2.5 2.5 0 0 1 3.536 0l.337.337a.5.5 0 0 1-.707.707l-.337-.337a1.5 1.5 0 0 0-2.122 0l-.671.671a1.5 1.5 0 0 0 0 2.122l.337.337z" />
                                        </svg>
                                        <div className= "task-form-action-bar-label">
                                            Add reminder(s)
                                        </div>
                                    </button>

                                    {
                                        isClickUpgradeButton && (
                                            <UpgradeForm />
                                        )
                                    }

                                    <button className="task-form-action-bar-btn" onClick = {onOpenMoreActionBar} >
                                        <svg width="15" height="3">
                                            <path d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#808080" fillRule="evenodd" />
                                        </svg>
                                        <div className= "task-form-action-bar-label">
                                            More task actions
                                        </div>
                                    </button>

                                    {
                                        isClick3DotsButton && (
                                            <div className="task-form-action-bar-more">
                                                <div className="task-form-bar-more-item" onClick = {onOpenEditTask}>
                                                    <svg className="task-form-bar-more-item-icon" width="24" height="24">
                                                        <g fill="none" fillRule="evenodd">
                                                            <path fill="currentColor" d="M9.5 19h10a.5.5 0 110 1h-10a.5.5 0 110-1z" />
                                                            <path stroke="currentColor" d="M4.42 16.03a1.5 1.5 0 00-.43.9l-.22 2.02a.5.5 0 00.55.55l2.02-.21a1.5 1.5 0 00.9-.44L18.7 7.4a1.5 1.5 0 000-2.12l-.7-.7a1.5 1.5 0 00-2.13 0L4.42 16.02z" />
                                                        </g>
                                                    </svg>
                                                    <span className= "task-form-bar-more-item-text">Rename task</span>
                                                </div>
                                                <div className="task-form-bar-more-item" onClick = {onOpenCommentBox}>
                                                    <svg className="task-form-bar-more-item-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M6 6h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H6zm10.7 1.6a.5.5 0 0 1 .6.8L12 13.1 6.7 9.4a.5.5 0 1 1 .6-.8l4.7 3.3 4.7-3.3z" />
                                                    </svg>
                                                    <span className= "task-form-bar-more-item-text">Add comments via email </span>
                                                </div>
                                                <div className="task-form-bar-more-item" onClick = {onCopyToClipboard}>
                                                    <svg className="task-form-bar-more-item-icon" width="24" height="24">
                                                        <path fill="currentColor" d="M7.39 12.339l.706.707-1.768 1.768a2 2 0 1 0 2.829 2.828l3.535-3.535a2 2 0 0 0 0-2.829l.707-.707a3 3 0 0 1 0 4.243l-3.535 3.535a3 3 0 0 1-4.243-4.242l1.768-1.768zm8.838-.354l-.707-.707 1.768-1.768a2 2 0 1 0-2.829-2.828l-3.535 3.536a2 2 0 0 0 0 2.828l-.707.707a3 3 0 0 1 0-4.243l3.535-3.535a3 3 0 0 1 4.243 4.243l-1.768 1.767z" />
                                                    </svg>
                                                    <span className= "task-form-bar-more-item-text">Copy link to task</span>
                                                </div>
                                                <div className="task-form-bar-more-item">
                                                    <svg className="task-form-bar-more-item-icon" width="24" height="24" viewBox="0 0 24 24">
                                                        <path fill="currentColor" d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-1a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.9-11.4a.5.5 0 0 1 .7.8l-6 6a.5.5 0 0 1-.7 0l-2.5-2.5a.5.5 0 0 1 .7-.8l2.1 2.2L16 8.6z" />
                                                    </svg>
                                                    <span className= "task-form-bar-more-item-text">Hide completed sub-tasks</span>
                                                </div>

                                                <div className="task-form-bar-more-separator" />

                                                <div className="task-form-bar-more-item" onClick = {onDeleteTaskatTaskForm}>
                                                    <svg className="task-form-bar-more-item-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                                        <g fill="none" fillRule="evenodd">
                                                            <path d="M0 0h24v24H0z" />
                                                            <rect width="14" height="1" x="5" y="6" fill="currentColor" rx=".5" />
                                                            <path fill="currentColor" d="M10 9h1v8h-1V9zm3 0h1v8h-1V9z" /><path stroke="currentColor" d="M17.5 6.5h-11V18A1.5 1.5 0 0 0 8 19.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0 0 14 3.5h-4A1.5 1.5 0 0 0 8.5 5v1.5z" />
                                                        </g>
                                                    </svg>
                                                    <span className= "task-form-bar-more-item-text">Delete task</span>
                                                </div>
                                            </div>

                                        )
                                    }

                                </div>
        
                            </div>
        
                        </div>
                    </div>
                )
            }

            {
                isClickTaskContent && (
                    <CreateTask onHandleClick={ onCloseTaskForm } task={props.task} />
                )
            }

            <div className="task-form-body" >
                <div className="task-form-body-header">
                    <div className={classNames('task-form-body-header-item',isClickTaskFormSubTask ? 'active-task-form-item' : '')} onClick={onClickTaskFormSubTask}>Sub-tasks</div>
                    <div className={classNames('task-form-body-header-item',isClickTaskFormComment ? 'active-task-form-item' : '')} onClick = {onClickTaskFormComment}>Comments</div>
                    <div className={classNames('task-form-body-header-item',isClickTaskFormActivity ? 'active-task-form-item' : '')} onClick={onClickTaskFormActivity}>Activity</div>
                </div>
                {
                    isClickTaskFormSubTask && (
                        <div className="task-form-body-container-sub-tasks">
                            <DragDropContext onDragEnd={handleOnDragEnd}>
                                <Droppable droppableId="characters">
                                    {(provided) => (
                                        <ul className="characters task-form-body-container-sub-tasks-list" {...provided.droppableProps} ref={provided.innerRef}>
                                            {
                                                subTaskElements
                                            }
                                        </ul>
                                    )}
                                </Droppable>
                         
                            </DragDropContext>    
                            {
                                addTaskOpening && (
                                    <AddTask onHandleClick={onClickAddTask} />
                                )
                            }

                            {
                                isClickAddButton && (
                                    <CreateTask onHandleClick={onHandleClickCreateTask} onHandleCreateSubTask = {onHandleCreateSubTask} isCreatingSubTask = {true} taskParent={props.task}  />
                                )
                            }

                        </div>

                    )
                }
                {
                    isClickTaskFormComment && (
                        <div className="task-form-body-container-comments">
                            <div className="task-form-body-container-comments-img">

                                <svg  data-svgs-path="theme_todoist/task_comments.svg" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" clipRule="evenodd" viewBox="0 0 220 200">
                                    <g transform="translate(-2550 -740)">
                                        <g id="TaskComments">
                                            <path fill="none" d="M1800-100h300v300h-300z" transform="matrix(.73333 0 0 .66667 1230 806.667)" />
                                            <g transform="translate(-180.016 -875.42)">
                                                <g id="TaskCommentsA">
                                                    <path fill="#f9e4e2" d="M2920 3494h-40c1.07 7.5 2.81 26.35 0 35h20l5 10 5-10h10c2.09-10.98 1.83-22.74 0-35z" transform="matrix(1.3419 0 -.1491 1.3419 -505.166 -3059.6)" />
                                                    <path fill="#fae5e3" stroke="#fff" strokeWidth="1.63" d="M15739.5 990.429c7 1.038 14.3.248 21.4.334" transform="matrix(1.41211 -.0411 .02507 1.02017 -19400.4 1284.71)" />
                                                    <path fill="#fae5e3" stroke="#fff" strokeWidth="1.63" d="M15739.5 990.429c7 1.038 14.3.248 21.4.334" transform="matrix(1.41237 -.02664 .01233 1.02048 -19391.7 1062.83)" />
                                                    <path fill="#eca19a" stroke="#eca19a" strokeWidth="3.16" d="M2850 3514l-2.84-15.28h-90.15L2760 3514c4.6 26 8.19 52.15 0 80h90c7.33-24.72 4.55-52.12 0-80z" transform="matrix(.74894 0 -.13916 .65532 1208.59 -601.671)" />
                                                    <path fill="#fff" fillOpacity=".523" stroke="#e57f78" strokeOpacity=".523" strokeWidth="2.91" d="M16642.6 1390h104.4" transform="matrix(.53973 0 0 .80708 -6191.27 580.634)" />
                                                    <path fill="none" stroke="#f9e4e2" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="11.001" d="M2799.9 1719.881l10.068 14.175 26.33-20.877" />
                                                    <path fill="#fff" stroke="#f9e4e2" strokeWidth="2.29" d="M2920 3494h-40c1.07 7.5 1.78 24.21 0 35h20l5 10 5-10h10c2.09-10.98 1.83-22.74 0-35z" transform="matrix(.92309 0 -.10257 .92309 434.481 -1521.06)" />
                                                    <path fill="#fff" stroke="#f9e4e2" strokeWidth="2.02" d="M15739.5 990.429c7 1.038 14.3.248 21.4.334" transform="matrix(1.094 -.02973 .02372 .87278 -14501.8 1321.65)" />
                                                    <path fill="#fff" stroke="#f9e4e2" strokeWidth="2.02" d="M15739.5 990.429c7 1.038 14.3.248 21.4.334" transform="matrix(1.094 -.02973 .02372 .87278 -14501.8 1327.07)" /><path fill="none" stroke="#da4c3f" strokeWidth="2.001" d="M2903.821 1741.11c-7.984-10.408-11.76-18.63-20.822-16.865-3.416.662-6.353 2.717-9.223 4.585-5.345 3.46-9.099 6.118-14.817 9.02" />
                                                    <path fill="none" stroke="#da4c3f" strokeWidth="2.001" d="M2876.851 1738.223c2.051-1.129 4.906-2.897 7.327-2.815 5.618.19 10.72 13.272 14.626 19.21" />
                                                    <g transform="matrix(.52087 -.01125 -.04444 .49114 1556.3 23.085)">
                                                        <path fill="#fff" d="M2843.93 3578.3c-1.2-7.46-2.67-15.03-4.28-22.72l-93.39-1.58c1.74 34.73-11.28 61.21-6.26 100l24.83.29 5.79 24.06 14.67-22.24L2840 3654c4.69-17.12 6.24-32.97 6.26-51.88" />
                                                        <clipPath id="_clip1">
                                                            <path d="M2843.93 3578.3c-1.2-7.46-2.67-15.03-4.28-22.72l-93.39-1.58c1.74 34.73-11.28 61.21-6.26 100l24.83.29 5.79 24.06 14.67-22.24L2840 3654c4.69-17.12 6.24-32.97 6.26-51.88" />
                                                        </clipPath>
                                                        <g clipPath="url(#_clip1)">
                                                            <path fill="#f9e4e2" d="M2852.69 3588.68c25.27-2.68 16.64 23.19 48.32 25.19l3.86 5.86-10.87 24.17c-11.89-1.5-22.65-2.15-22.65-2.15s-7.33-23.62-33.81-25.27l-10.53-10.13" transform="matrix(1.63217 -.2528 .4754 1.97699 -3615.82 -2818.34)" />
                                                        </g>
                                                        <path fill="none" stroke="#eca19a" strokeWidth="4.18" d="M2843.93 3578.3c-1.2-7.46-2.67-15.03-4.28-22.72l-93.39-1.58c1.74 34.73-11.28 61.21-6.26 100l24.83.29 5.79 24.06 14.67-22.24L2840 3654c4.69-17.12 6.24-32.97 6.26-51.88" />
                                                    </g>
                                                    <path fill="none" stroke="#eca19a" strokeWidth="1.75" d="M15739.5 990.429c7 1.038 14.3.248 21.4.334" transform="matrix(1.36056 -.03813 .02575 .87272 -18602.9 1496.02)" />
                                                    <path fill="none" stroke="#eca19a" strokeWidth="1.75" d="M15739.5 990.429c7 1.038 14.3.248 21.4.334" transform="matrix(1.36056 -.03813 .02575 .87272 -18603 1501.43)" />
                                                    <path fill="none" stroke="#da4c3f" strokeWidth="4.18" d="M2787.12 3554.8l-40.86-.8c.59 11.67-.5 22.42-2 33.01" transform="matrix(.52087 -.01125 -.04444 .49114 1556.3 23.085)" />
                                                    <path fill="none" stroke="#da4c3f" strokeWidth="2.001" d="M2897.977 1753.267c-2.004 1.515-5.197 1.528-7.504.968-6.953-1.691-12.376-6.783-18.85-9.52-6.482-2.735-11.763-1.129-7.874 2.72 6.723 6.672 31.788 26.795 48.296 34.03 4.27 1.87 13.444 5.987 20.454 9.141M2896.342 1750.397c.867 1.588 2.46 4.359 3.234 5.535M2896.243 1726.305c5.31-.93 7.907 2.588 10.371 6.392 1.454 2.244 4.307 6.944 5.56 9.005" />
                                                    <path fill="none" stroke="#da4c3f" strokeWidth="2.001" d="M2905.587 1726.64c2.2.123 4.77 1.654 6.03 3.432.76 1.074 4.955 8.964 7.354 12.94" />
                                                    <path fill="none" stroke="#da4c3f" strokeWidth="2.61" d="M2991.47 3539.47c8.89.44 11.94 19.06 14.88 27.49 4.52 12.96 10.83 21.44 20.91 27.39" transform="matrix(.74198 -.12277 .12775 .77208 243.061 -630.181)" /><path fill="none" stroke="#da4c3f" strokeWidth="2.001" d="M2886.982 1736.933c-2.109 4.14-2.262 9.052-3.493 13.482" />
                                                    <path fill="none" stroke="#da4c3f" strokeWidth="3.15" d="M2920.23 3609.25c-1.75 3.41-2.91 7.1-4.83 10.41" transform="matrix(.57738 -.09553 .11114 .67175 804.692 -402.96)" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>

                            <div className="task-form-body-container-comments-empty-state">
                                <div className="task-form-body-container-comments-empty-title">
                                    Add notes, file uploads, and voice memos to your tasks, so you always have the information you need right when you need it.
                                </div>
                                <div className="task-form-body-container-comments-empty-button">
                                    <button type="button" className="task-form-body-container-comments-empty-premium-btn">Go Premium</button>
                                    <a href="https://get.todoist.help/hc/fr/articles/205348311" target="_blank" rel="noreferrer">Learn more</a>
                                </div>
                            </div>

                            <div className="task-form-body-container-comment-box">
                                <textarea className="task-form-body-container-comment-box-textarea" placeholder="Write a comment" />
                                <div className="task-form-body-container-comment-box-action-bar">
                                    <div className="task-form-body-container-comment-box-action-bar-left-wrapper">
                                        <div className="task-form-body-container-comment-box-action-bar-btn">
                                            <svg width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="#888" fillRule="nonzero" d="M12.796 8.796l-4.325 4.325a2.162 2.162 0 0 0 3.058 3.058l6.825-6.825a3.328 3.328 0 0 0-4.708-4.708l-8.175 8.175a4.495 4.495 0 0 0 6.358 6.358l5.675-5.675a.5.5 0 0 0-.708-.708l-5.675 5.675A3.495 3.495 0 1 1 6.18 13.53l8.175-8.175a2.328 2.328 0 1 1 3.292 3.292l-6.825 6.825A1.162 1.162 0 0 1 9.18 13.83l4.325-4.325a.5.5 0 0 0-.708-.708z" />
                                            </svg>
                                        </div>
                                        <div className="task-form-body-container-comment-box-action-bar-btn">
                                            <svg width="24" height="24">
                                                <path fill="#888" fillRule="nonzero" d="M17.5 10a.5.5 0 0 1 .492.41l.008.09V12a6 6 0 0 1-5.5 5.98V20h3a.5.5 0 0 1 .492.41l.008.09a.5.5 0 0 1-.41.492L15.5 21h-7a.5.5 0 0 1-.09-.992L8.5 20h3v-2.02a6 6 0 0 1-5.495-5.745L6 12v-1.5a.5.5 0 0 1 .992-.09L7 10.5V12a5 5 0 0 0 9.995.217L17 12v-1.5a.5.5 0 0 1 .5-.5zM12 3a4 4 0 0 1 4 4v5a4 4 0 1 1-8 0V7a4 4 0 0 1 4-4zm0 1a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V7a3 3 0 0 0-3-3z" />
                                            </svg>
                                        </div>
                                        <div className="task-form-body-container-comment-box-action-bar-btn">
                                            <svg width="24" height="24">
                                                <path fill="#888" fillRule="nonzero" d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 1a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm2.45 8a.5.5 0 0 1 .49.6 3 3 0 0 1-5.88 0 .5.5 0 0 1 .49-.6h4.9zm.05-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                            </svg>
                                        </div>
                                    </div>

                                    <button className="task-form-body-container-comment-box-action-bar-add-comment">Add comment</button>
                                </div>
                            </div>
                        </div>
                    )
                }

                {
                    isClickTaskFormActivity && (
                        <div className="task-form-body-container-activity">
                            <div className="task-form-activity-history-tab">
                                Added on 3 dec 15:42
                            </div>
                            <div className="task-form-activity-empty-state">
                                <div className="task-form-activity-illustration">
                                    <svg data-svgs-path="theme_todoist/activity.svg" clipRule="evenodd" fillRule="evenodd" strokeMiterlimit="1.5" viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(.733333 0 0 .666667 -1320 66.67)">
                                        <path d="m1800-100h300v300h-300z" fill="none" />
                                        <path d="m1172.86 2682.78c.21-.68.65-1.11 1.14-1.11s.93.43 1.14 1.11c1.74 5.8 4.86 16.22 4.86 16.22h-12s3.12-10.42 4.86-16.22z" fill="#f9e4e2" transform="matrix(-1.36363805578 0 0 .9750022941 3574.194474 -2557.6225226)" />
                                        <path d="m1280 2768.25c0-6.21-2.96-11.25-6.62-11.25h-16.76c-3.66 0-6.62 5.04-6.62 11.25v22.5c0 6.21 2.96 11.25 6.62 11.25h16.76c3.66 0 6.62-5.04 6.62-11.25z" fill="#f9e4e2" transform="matrix(-1.69987900563 0 0 1.1000022624 4129.564601 -2961.800417)" />
                                        <g fill="#f0b7b2">
                                            <path d="m1225.19 2687.16c2.18.24 2.18 3.99 1.32 7.01-1.96 6.88-6.1 12.94-8.6 20.05-1.84 5.28-3.39 10.67-4.74 16.1 0 0-.29.92-1.02.9-.92-.01-.94-1.3-.65-2.43 2.74-10.74 6.99-20.97 11.55-31.14 1.22-2.72 2.52-5.61 1.83-8.41 0 0-4.6 4.46-7.6 10.41-12.84 25.46-15.51 54.96-16.59 82.92-.48 12.42-.65 24.84-.51 37.24 0 0 .03.9-.55 1.19-.59.3-1.34-.12-1.44-.88-.5-37.2-.81-74.24 12.36-109.92 2.59-7.03 5.49-14.15 10.12-19.86 1.28-1.59 2.62-3.27 4.52-3.18z" transform="matrix(1.36363805578 0 0 1.5000027963 171.850151779 -4072.10027012)" />
                                            <path d="m1223.73 2686.3c3.5.13 4.05 5.63 2.45 9.72-.28.73-.59 1.44-.92 2.14-4.75 10.13-9.16 20.33-12.09 32.16 0 0-.15.62-.6.82-.93.41-1.45-.87-1.07-2.35 1.75-6.88 3.73-13.76 6.45-20.28 2.78-6.68 8.58-13.3 7.14-18.77-.5-1.9-2.26-.99-2.59-2.15-.18-.66.37-1.29 1.23-1.29z" transform="matrix(1.36363805578 0 0 1.5000027963 178.520750779 -4072.10027012)" />
                                            <path d="m1223.73 2686.3c3.47.13 4.05 5.61 2.45 9.72-2.28 5.89-5.77 11.24-7.95 17.32-2 5.55-3.64 11.24-5.06 16.99 0 0-2.81 2.93-1.67-1.54 2.79-10.92 7.13-21.22 11.95-31.47 1.17-2.52 2.6-5.29 1.56-7.83-.54-1.31-1.59-.96-2.15-1.37-.7-.53-.36-1.82.87-1.82z" transform="matrix(1.36363805578 0 0 1.5000027963 185.191349779 -4072.10027012)" />
                                            <path d="m1256.14 2739.01c2.42.51-.94 6.14-4.78 10.55-7.97 9.15-20.05 13.4-24.52 26.94-1.9 5.75-2.38 12.02-1.75 17.96 0 0-.19 1.13-1.03 1.1-1.44-.05-1.16-2.84-1.17-5.19-.08-12.4 4.78-24.37 16.07-32.8 6.16-4.59 12.58-9.37 15.63-16.56 0 0-2.58-.01-2.58-.01-.69.01-.82.04-1.21.12-5.98 1.22-8.88 8.54-15.61 10.47-4.44 1.28-9.48-.71-11.9-5.16 0 0-.47-1.07.33-1.49 1.68-.89 2.63 3.91 6.41 4.9 5.42 1.42 10.17-4.05 15.23-8.04 1.93-1.51 4.21-2.77 6.74-2.8h4c.05 0 .09.01.14.01z" transform="matrix(1.36363805578 0 0 1.5000027963 171.850151779 -4072.10027012)" />
                                            <path d="m1224.98 2687.16c-3.75.2-6.11 5.19-8.74 10.13-13.86 26.11-16.45 56.69-17.55 85.21-.48 12.44-.65 24.9-.5 37.34 0 0 .8 2.15 1.79.88.48-.62.19-1.9.18-3.02-.26-40.1-.6-81.85 16.66-117.14 1.94-3.94 3.93-8.17 7.17-10.8.33-.27.89-.56.89-.56 1.35 5.11-2.96 10.75-5.32 15.71-3.76 7.94-6.23 16.45-8.33 24.94 0 0 1.08 3.89 2.2-.57 2.91-11.37 8.1-21.78 12.4-33.08.94-2.49 1.65-5.2.92-7.73 0 0-.39-1.32-1.77-1.31z" transform="matrix(-1.36363805578 0 0 1.5000027963 3716.842668 -4072.10027012)" />
                                            <path d="m1223.56 2686.3c-1.18.08-1.32 1.7.24 2.01 2.03.48 1.48 4.33.73 6.44-.17.47-.36.93-.56 1.39-4.54 10.58-9.59 20.9-12.74 33.71 0 0-.16.81.35 1.18.79.59 1.54-.52 1.85-1.75 1.76-6.86 3.72-13.73 6.44-20.19 2.25-5.34 5.93-10.14 7.14-15.73.66-3.01.07-7.16-3.45-7.06z" transform="matrix(-1.36363805578 0 0 1.5000027963 3710.172069 -4072.10027012)" />
                                            <path d="m1223.56 2686.3c-1.19.08-1.29 1.75.21 2.01 2.02.41 1.52 4.31.76 6.44-.17.47-.36.93-.56 1.39-4.47 10.47-9.46 20.63-12.64 33.3 0 0-.4.99.15 1.51.72.69 1.62-.34 1.95-1.67 2.56-9.99 5.99-19.65 10.73-28.89 2.42-4.74 5.49-11.5.73-13.8-.41-.2-.67-.31-1.33-.29z" transform="matrix(-1.36363805578 0 0 1.5000027963 3703.50147 -4072.10027012)" />
                                            <path d="m1254.52 2741.17c-3.29 7.53-10.89 12.72-16.97 17.49-9.79 7.66-15.8 20.53-14.49 35.67 0 0 .94 2.11 1.85.81.3-.43.14-1.07.09-1.7-.78-11.44 2.35-23.41 11.67-31.48 7.19-6.22 16.19-11.06 19.9-20.51.81-2.08.2-2.4-.57-2.45h-4c-7.76.08-11.82 9.49-18.06 10.85-3.49.76-7.14-1.07-8.96-4.5 0 0-1.56-1.08-1.86.25-.54 2.35 3.75 5.77 7.18 6.35 8.38 1.41 14.65-10.87 21.71-10.95 0 0 2.78-.46 2.51.17z" transform="matrix(-1.36363805578 0 0 1.5000027963 3716.842668 -4072.10027012)" />
                                        </g>
                                        <path d="m1189.99 2692.35c-15.99-2.4-28.21-15.23-28.21-30.69 0-17.15 15.06-31.08 33.61-31.08s33.61 13.93 33.61 31.08c0 15.87-12.88 28.97-29.48 30.86l-3.59 7.78c-.21.44-.65.73-1.14.73s-.93-.29-1.13-.73z" fill="#da4c3f" transform="matrix(1.36363805578 0 0 1.5000027963 313.126768 -4034.60027963)" />
                                        <path d="m1180 2660 12 12 19.4-19.4" fill="none" stroke="#fff" strokeWidth="6.5" transform="matrix(1.36363805578 0 0 1.5000027963 313.126768 -4034.60027963)" />
                                        <path d="m1280 2767c0-5.52-3.36-10-7.5-10h-15c-4.14 0-7.5 4.48-7.5 10v25c0 5.52 3.36 10 7.5 10h15c4.14 0 7.5-4.48 7.5-10z" fill="#f9e4e2" transform="matrix(1.8181829341 0 0 1.5000027963 -391.391111 -4064.60008142)" />
                                        <path d="m1180.09 2749c1.88.25.82 1.96-.09 2h-20c-.57-.03-.62-.18-.77-.36-.49-.59-.13-1.6.77-1.64 6.7 0 13.4-.29 20.09 0z" fill="#f0b7b2" transform="matrix(1.36363805578 0 0 1.5000027963 313.126768 -4031.60020415)" />
                                        <path d="m1180.09 2749c1.7.25.8 1.96-.09 2h-20c-1.78-.08-.98-1.95 0-2 6.69 0 13.4-.31 20.09 0z" fill="#f0b7b2" transform="matrix(1.43182012961 0 0 1.5000027963 305.087841 -4034.60027963)" />
                                        <path d="m1180.09 2749c.98.14 1.15 1.94-.09 2h-20c-1.01-.05-1.31-1.94 0-2 6.69 0 13.4-.31 20.09 0z" fill="#f0b7b2" transform="matrix(1.43182012961 0 0 1.5000027963 305.087841 -4022.60029538)" />
                                        <path d="m1180.09 2749c1.9.26.97 1.95-.09 2h-20c-2.22-.1-1.07-1.95 0-2 6.7 0 13.4-.29 20.09 0z" fill="#f0b7b2" transform="matrix(1.36363805578 0 0 1.5000027963 313.126768 -4019.6002199)" />
                                        <path d="m1180.09 2749c1.9.26.97 1.95-.09 2h-20c-2.22-.1-1.07-1.95 0-2 6.7 0 13.4-.29 20.09 0z" fill="#f0b7b2" transform="matrix(1.36363805578 0 0 1.5000027963 313.126768 -4007.60023565)" />
                                        <path d="m1172.86 2682.78c.21-.68.65-1.11 1.14-1.11s.93.43 1.14 1.11c1.74 5.8 4.86 16.22 4.86 16.22h-12s3.12-10.42 4.86-16.22z" fill="#f9e4e2" transform="matrix(1.36363805578 0 0 .9750022941 310.390112 -2557.6225226)" />
                                        <path d="m1361.4 2741.03c-.97.35-1.13 1.54.62 2.17 9.61 3.52 18.39 9.52 23.26 19.27 3.94 7.89 3.35 17.61.39 25.98-2.8 7.92-7.29 15.19-7.42 24.19-.12 7.59 4.66 14.34 6.07 22.12.66 3.62.68 7.34.2 10.98 0 0 .52 1.92 1.57 1.12.4-.3.42-.89.49-1.43.96-8.13-1.58-16.09-4.58-24.15-2.94-7.94-.91-17.27 3.33-26.71 5-11.22 6.91-24.41.68-34.93-5.16-8.73-13.53-14.7-22.93-18.19-.62-.22-1.24-.49-1.68-.42z" fill="#f9e4e2" transform="matrix(-1.36363805578 0 0 1.5000027963 3714.961217 -4072.10027012)" />
                                        <path d="m1295.37 2738.85c15.82.01 31.7-.15 47.43.03 9.07.14 18.29 1.07 26.55 4.79 1.51.68 1.3.87 1.18 1.41-.3 1.39-3.05-.1-5.1-.83-10.35-3.65-21.71-3.38-32.7-3.36-27.36.02-54.84-.15-82.09.11-6.18.09-12.39.92-18.07 3.41 0 0-1.21.15-1.38-.72-.26-1.34 2.25-1.86 4.29-2.51 7.34-2.31 15.16-2.18 23.01-2.23 12.28-.07 24.54-.1 36.88-.1z" fill="#f9e4e2" transform="matrix(1.36363805578 0 0 1.5000027963 171.846902 -4072.10027012)" />
                                        <path d="m1369.59 2743.86c2.86.2 9.19 5.1 12.8 10.59 0 0-.21 3.26-1.94.68-2.81-4.08-6.83-7.22-11.33-9.36 0 0-.99-1.91.47-1.91z" fill="#f9e4e2" transform="matrix(1.36363805578 0 0 1.5000027963 171.846902 -4072.10027012)" />
                                        <path d="m1233.47 2720.33c9.18.09 17.86 5.35 21.97 14.16.85 1.83 1.77 3.65 1.56 5.61 0 0-.26.86-1 .9h-5.03c-6.15-.38-6.77-11.32-15.86-11.74-7.55-.35-14.33 7.96-10.13 16.1 0 0-.72 3.09-1.99.5-3.2-6.7-.01-15.83 7.36-18.04 5.54-1.66 11.43.52 15.32 5.73 1.67 2.24 3.2 5.28 5.35 5.45h3.99c-.23-2.35-1.6-4.34-2.81-6.4-5.28-9.01-18.62-13.72-27.1-8.21-.82.53-.54.39-.67.43-.96.34-2.15-.98-.42-2.11 2.74-1.78 6.21-2.39 9.46-2.38z" fill="#f0b7b2" transform="matrix(1.36363805578 0 0 1.5000027963 171.846902 -4072.10027012)" />
                                        <path d="m1234.17 2727.24c-8.67.2-15.53 10.03-11.02 18.94 0 0 2.9 1.37 1.65-1.19-2.73-5.7-.07-13.45 6.22-15.28 3.83-1.11 8.16-.2 10.99 2.61 3.21 3.19 4.78 8.42 8.96 8.68h5.03c1.54-.09 1-3.1.15-4.95-3.93-8.59-11.45-15.38-22.07-15.71-3.71-.12-7.71.46-10.6 2.75 0 0-.69 2.94 1.43 1.42 7.71-5.33 20.78-1.28 26.21 6.4 1.82 2.57 3.61 5.69 3.88 8.03 0 0-3.2.45-4.61-.08-4.44-1.64-6.09-9.79-12.84-11.31-1.11-.24-2.25-.32-3.38-.31z" fill="#f0b7b2" transform="matrix(-1.36363805578 0 0 1.5000027963 3716.842668 -4072.10027012)" />
                                        <path d="m1381.81 2754.03c1.39.5 2.09 2.63 3.1 4.19 6.18 9.61 6.36 22.15 1.56 33.71-3.13 7.56-7.17 15.01-6.09 23.37 1.06 8.21 6.22 15.6 6.47 24.41.05 2.1-.07 4.21-.35 6.3 0 0-.12.81-.69 1-1.74.59-.84-4.18-.97-7.56-.44-10.75-7.92-19.83-6.23-31.39 1.77-12.14 10.56-22.33 9.28-36.27-.53-5.76-3.62-10.9-6.89-15.82 0 0-1.09-2.25.81-1.94z" fill="#f9e4e2" transform="matrix(1.36363805578 0 0 1.5000027963 171.846902 -4072.10027012)" />
                                        <circle cx="1293.5" cy="2706.5" fill="#da4c3f" r="3.5" transform="matrix(1.36363805578 0 0 1.5000027963 147.388039 -4021.85027651)" />
                                        <circle cx="1293.5" cy="2706.5" fill="#f9e4e2" r="3.5" transform="matrix(1.36363805578 0 0 1.5000027963 61.525457 -3988.89487304)" />
                                        <circle cx="1293.5" cy="2706.5" fill="#f9e4e2" r="3.5" transform="matrix(1.36363805578 0 0 1.5000027963 65.117318 -3935.93165996)" />
                                        <circle cx="1293.5" cy="2706.5" fill="#f9e4e2" r="3.5" transform="matrix(1.36363805578 0 0 1.5000027963 69.735425 -3914.843518214)" />
                                        <circle cx="1293.5" cy="2706.5" fill="#f9e4e2" r="3.5" transform="matrix(1.36363805578 0 0 1.5000027963 298.930365 -3988.40629658)" />
                                        <circle cx="1293.5" cy="2706.5" fill="#f9e4e2" r="3.5" transform="matrix(1.36363805578 0 0 1.5000027963 296.022668 -3937.8827891)" />
                                        <circle cx="1293.5" cy="2706.5" fill="#da4c3f" r="3.5" transform="matrix(1.36363805578 0 0 1.5000027963 178.175419 -4021.85027651)" />
                                        <circle cx="1293.5" cy="2706.5" fill="#da4c3f" r="3.5" transform="matrix(1.36363805578 0 0 1.5000027963 210.331127 -4021.85027651)" />
                                    </g>
                                    </svg>
                                </div>

                                <div className="task-form-activity-empty-content-box">
                                    <div className="task-form-activity-empty-content-text">
                                        See all changes that have been made to this task, by you or a collaborator.
                                    </div>
                                    <div className="task-form-activity-empty-content-button">
                                        <button type="button" className="task-form-activity-empty-content-premium-button">Go Premium</button>
                                        <a className="task-form-activity-empty-content-learn-more" href="https://get.todoist.help/hc/articles/209430045" target="_blank" rel="noreferrer">Learn more</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }
            </div>

            {
                isCopiedBoxOpening && (
                    <div className="copied-to-clipboard-form">
                        <span>link copied!</span>
                        <button className="copied-to-clipboard-form-btn" onClick = {onCloseCopiedBox}>
                            <svg viewBox="0 0 24 24" width="14" height="14">
                                <path fill="#888" fillRule="nonzero" d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z" />
                            </svg>
                        </button>
                    </div>
                )
            }

            {
                isDeleteWarningFormOpenning && (
                    <DeleteWarningForm />
                )
            }

            {
                isUpgradeFormOpeningFromCommentBox && (
                    <UpgradeForm />
                )
            }

        </TaskFormStyled>
    );
};

TaskForm.defaultProps = {
    subTaskList : [],
    task: {},
    taskType: 0 
};

const mapStateToProps = (state) => ({
    task: state.task
});

const mapDispatchToProps = (dispatch) => ({
    onCloseForm: (status) => dispatch(actCloseTaskForm(status))
});

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);