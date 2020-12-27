import React, {useState, useEffect,FunctionComponent} from 'react';
import {CreateTaskStyled} from './styled';
import TypeOfProjectList from 'Modules/Components/TypeOfProjectList';
import PriorityBox from 'Modules/Components/PriorityBox';
import Scheduler from 'Modules/Components/Scheduler';
import UpgradeForm from 'Modules/Components/UpgradeForm';
import {connect} from 'react-redux';
import {actToggleCreateTask,actCreateTaskRequest} from 'Modules/Actions';

export interface propsCreateTask {
    task?: {
        id? : string,
        taskContent?: string,
        status?: boolean,
        flag?: string,
        isSubTask?: boolean;
        day?: string;
    };
    editStatus?: boolean;
    isCreatingSubTask?: boolean;
    taskParent?: {
        id? : string,
        taskContent?: string,
        status?: boolean,
        flag?: string,
        isSubTask?: boolean;
        day?: string;
    };
    formValues?: {
        taskContent?: string;
        status?: boolean;
        id?: string;
        flag?: string;
        parentId?: string;
        isSubTask?: boolean;
        priority?: number;
        day?: string;
    };
    onHandleClick?: (formValues: any) => void;
    onHandleEditInput?: (formValues: any) => void;
    onHandleCreateSubTask?: (formValues: any) => void;
    onToggleCreateTask?: (any) => void;

    /* redux */
    onCreateTask?: (any) => void;
}

const CreateTask:FunctionComponent<propsCreateTask> = (props) => {

    const [isClickTypeOfProjectButton, setOpenTypeOfProjectList] = useState(false);
    const [isClickFlagButton, setOpenPriorityBox] = useState(false);
    const [isClickScheduleButton, setOpenScheduler] = useState(false);
    const [isClickUpgradeButton, setOpenUpgradeForm] = useState(false);
    // const [isEditing, setEditingStatus] = useState(false);
    // const [isCreatingSubTask, setCreatingSubTaskStatus] = useState(false);
    const [value, setValue] = useState('');
    const [task, setCreateTask] = useState({
        content: '',
        priority: 4,
        flag:'GREY'
    });
    const [isBordered, setBorder] = useState(true);

    useEffect(() => {
        window.addEventListener('click',closeTab);
        return () => {
            window.removeEventListener('click',closeTab);
        };
    },[]);

    useEffect(() => {
        if (props.task) {
            const {taskContent = ''} = props.task;

            taskContent && setValue(taskContent);
        }
    },[props.task]);

    useEffect(() => {
        document.getElementById('create-task-input')?.focus();
    },[]);

    const closeTab = () => {
        setOpenTypeOfProjectList(false);
        setOpenPriorityBox(false);
        setOpenScheduler(false);
        setOpenUpgradeForm(false);
    };

    const onClickCancel = () => {
        typeof props.onToggleCreateTask === 'function' && props.onToggleCreateTask(false);
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

    const onHandleInputChange = e => {
        const target = e.target;
        const value = target.value;

        setValue(value);

        setCreateTask({...task, content: value});
        e.stopPropagation();
    };

    const onClickAddButton = () => {
        const formValues = {
            taskContent: task.content,
            status: true,
            flag: task.flag,
            priority: task.priority ? task.priority : 4,
            day: (new Date()).toLocaleDateString() 
        };

        // redux
        typeof props.onCreateTask === 'function' && props.onCreateTask(formValues);
        typeof props.onToggleCreateTask === 'function' && props.onToggleCreateTask(false);

        typeof props.onHandleEditInput === 'function' && props.onHandleEditInput(formValues);
        typeof props.onHandleCreateSubTask === 'function' && props.onHandleCreateSubTask(formValues);
    };

    const onGetPriorityColor = (color,orderNumber) =>{
        setCreateTask({...task, flag: color, priority: orderNumber});
    };

    const onBlurFunction = () => {
        setBorder(false);
    };

    const onFocusFunction = () => {
        setBorder(true);
    };

    return (
        <CreateTaskStyled>
            <div className="app-content-list-item ">
                <div className="app-content-list-item-open-add-task">
                    <div className="app-content-list-item-open-add-task-body" style={{borderColor: isBordered ? '#666' : '#ddd'}}>
                        <input id="create-task-input" type="text" className="app-content-list-item-open-add-task-content" placeholder="e.g. Family lunch on Sunday at 11am #Personal" name='content' value={value} onChange={onHandleInputChange} onBlur = {onBlurFunction} onFocus = {onFocusFunction} />
                        <div className="app-content-list-item-add-task-extra-field">
                            <div className="app-content-list-item-add-task-schedule-and-inbox-wrapper" >
                                <button type="button" className="app-content-list-item-add-task-schedule-inbox-btn" onClick={onOpenScheduler}>
                                    <svg data-svgs-path="sm1/calendar_small.svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                        <path fill="#555" fillRule="nonzero" d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.25 7a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm.75-5a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1h7z" />
                                    </svg>
                                    <div>Schedule</div>
                                </button>

                                {
                                    isClickScheduleButton && (
                                        <div className="position-scheduler">
                                            <Scheduler />
                                        </div>
                                    )
                                }

                                <button type="button" className="app-content-list-item-add-task-schedule-inbox-btn" onClick = {onOpenTypeOfProjectList}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" className="project_icon projectSectionPill--icon project_icon_inbox">
                                        <g fill="#246fe0">
                                            <path d="M13.5 9.5V12a1.5 1.5 0 01-1.5 1.5H4A1.5 1.5 0 012.5 12V9.5h3.75a1.75 1.75 0 003.5 0h3.75z" opacity="0.1" />
                                            <path d="M10.491 2a2 2 0 011.923 1.45l1.509 5.28a2 2 0 01.077.55V12a2 2 0 01-2 2H4a2 2 0 01-2-2V9.28a2 2 0 01.077-.55l1.509-5.28A2 2 0 015.509 2h4.982zm0 1H5.51a1 1 0 00-.962.725l-1.509 5.28A1 1 0 003 9.28V12a1 1 0 001 1h8a1 1 0 001-1V9.28a1 1 0 00-.038-.275l-1.51-5.28a1 1 0 00-.96-.725zM6.25 9a.5.5 0 01.5.5 1.25 1.25 0 002.5 0 .5.5 0 01.5-.5h1.75a.5.5 0 110 1h-1.306a2.25 2.25 0 01-4.388 0H4.5a.5.5 0 010-1z" />
                                        </g>
                                    </svg>
                                    <div>Inbox</div>
                                </button>
                                {
                                    isClickTypeOfProjectButton && (
                                        <div className="positon-tyofprojectlist">
                                            <TypeOfProjectList />
                                        </div>
                                    )
                                }
                            </div>
                            <div className="app-content-list-item-add-task-action-wrapper" >
                                <div className="app-content-list-item-add-task-action-btn" onClick={onOpenUpgradeForm}>
                                    <svg className="app-content-list-item-add-task-action-icon" data-svgs-path="sm1/label_outline.svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#888" fillRule="nonzero" d="M3.914 11.086l6.5-6.5A2 2 0 0 1 11.828 4H18a2 2 0 0 1 2 2v6.172a2 2 0 0 1-.586 1.414l-6.5 6.5a2 2 0 0 1-2.828 0l-6.172-6.172a2 2 0 0 1 0-2.828zm.707.707a1 1 0 0 0 0 1.414l6.172 6.172a1 1 0 0 0 1.414 0l6.5-6.5a1 1 0 0 0 .293-.707V6a1 1 0 0 0-1-1h-6.172a1 1 0 0 0-.707.293l-6.5 6.5zM14.75 10.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
                                    </svg>
                                </div>
                                {
                                    isClickUpgradeButton && (
                                        <div>
                                            <UpgradeForm />
                                        </div>                                        
                                    )
                                }
                                <div className="app-content-list-item-add-task-action-btn" onClick={onOpenPriorityBox}>
                                    <svg className="app-content-list-item-add-task-action-icon" data-svgs-path="sm1/priority_flag.svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill={task.flag} fillRule="nonzero" d="M5 13.777V19.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.82 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0 1 20 4.5V13a.5.5 0 0 1-.223.416c-1.09.727-2.519 1.084-4.277 1.084-1.113 0-1.92-.196-3.658-.776C10.204 13.18 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777zm0-1.123C5.965 12.216 7.133 12 8.5 12c1.113 0 1.92.196 3.658.776 1.638.545 2.371.724 3.342.724 1.45 0 2.614-.262 3.5-.777V5.346c-.965.438-2.133.654-3.5.654-1.113 0-1.92-.196-3.658-.776C10.204 4.68 9.47 4.5 8.5 4.5c-1.45 0-2.614.262-3.5.777v7.377z" />
                                    </svg>
                                </div>

                                {
                                    isClickFlagButton && (
                                        <div className="position-prioritybox">
                                            <PriorityBox onGetPriorityColor={onGetPriorityColor} color={task.flag} />
                                        </div>
                                    )
                                }

                                <div className="app-content-list-item-add-task-action-btn" onClick={onOpenUpgradeForm}>
                                    <svg className="app-content-list-item-add-task-action-icon" data-svgs-path="sm1/reminder.svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#888" fillRule="nonzero" d="M6.355 17.438a7.5 7.5 0 1 1 11.29 0l1.709 1.708a.5.5 0 0 1-.708.708l-1.708-1.709A7.471 7.471 0 0 1 12 20c-1.891 0-3.619-.7-4.938-1.855l-1.708 1.709a.5.5 0 0 1-.708-.708l1.709-1.708zM12 19a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13zm0-7h2.5a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5V8a.5.5 0 1 1 1 0v4zm4.604-6.896a.5.5 0 0 1-.708-.708l.336-.335a2.5 2.5 0 0 1 3.536 0l.671.671a2.5 2.5 0 0 1 0 3.536l-.335.336a.5.5 0 0 1-.708-.708l.336-.335a1.5 1.5 0 0 0 0-2.122l-.671-.671a1.5 1.5 0 0 0-2.122 0l-.335.336zM4.605 7.898a.5.5 0 0 1-.707.707l-.337-.337a2.5 2.5 0 0 1 0-3.536l.671-.671a2.5 2.5 0 0 1 3.536 0l.337.337a.5.5 0 0 1-.707.707l-.337-.337a1.5 1.5 0 0 0-2.122 0l-.671.671a1.5 1.5 0 0 0 0 2.122l.337.337z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="app-content-list-item-open-add-task-footer">
                        <button className="app-content-list-item-open-add-task-add-btn" onClick= {onClickAddButton} style={{backgroundColor: task.content ? '#db4c3f' : ''}}>Add task</button>
                        <button className="app-content-list-item-open-add-task-cancel-btn" onClick={onClickCancel} >Cancel</button>
                    </div>
                </div>
            </div>                   
        </CreateTaskStyled>
    );
};

CreateTask.defaultProps = {
};

// const mapStateToProps = (state) => ({

// });

const mapDispatchToProps = (dispatch) => ({
    onToggleCreateTask: (toggleStatus) => dispatch(actToggleCreateTask(toggleStatus)),
    onCreateTask: (formValues) => dispatch(actCreateTaskRequest(formValues))
}); 

export default connect(null,mapDispatchToProps)(CreateTask);