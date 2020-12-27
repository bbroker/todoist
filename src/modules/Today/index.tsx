import React, {FunctionComponent,useState,useEffect} from 'react';
import Task from 'Modules/Components/Task';
import {TodayStyled} from './styled';
import CreateTask from 'Modules/Components/CreateTask';
import AddTask from 'Modules/Components/AddTask';
import OverdueBox from 'Modules/Components/OverdueBox';
import ContentHeader from 'Modules/Components/ContentHeader';
import Modal from 'Modules/Components/Modal';
import SortBy from 'Modules/Components/SortBy';
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd';
import CustomSort from 'Modules/Components/CustomSort';
import classNames from 'classnames';
import AddSection from 'Modules/Components/AddSection';
import CreateSection from 'Modules/Components/CreateSection';
import {connect} from 'react-redux';
import {actToggleCreateTask,actFetchTaskListRequest,actOpenTaskForm} from '../Actions';

export interface propsToday {
    taskList?: Array<{
        id? : string,
        taskContent?: string,
        status?: boolean,
        flag?: string,
        isSubTask?: boolean,
        priority?:number,
        day?: string
    }>;
    subTaskList?: Array<{
        id? : string,
        taskContent?: string,
        status?: boolean,
        flag?: string, 
        parentId?: string,
        isSubTask?: boolean,
        day?: string
    }>;
    openCreateTaskStatus?: boolean; 
    openTaskFormStatus?: boolean;

    onToggleCreateTask?: (any) => void;
    fetchAllTaskList?: () => void;
    onOpenTaskForm?: (any) => void;
}

const Today:FunctionComponent<propsToday> = props => {

    const [taskList, setTasks] = useState(() => {
        try {
            const lcTasks = window.localStorage.getItem('tasks');

            return lcTasks ? JSON.parse(lcTasks) : props.taskList; 
        }
        catch (error) {
            return props.taskList;
        }
    });

    const [sortManager, setSortManager] = useState({
        type: '',
        visibleSortComponent: false
    });
    const [isOpenCustomSort, setOpenCustomSort] = useState(false);
    const [isOverlayed, setOverlay] = useState(false);
    const [isOpenCreateSection, setOpenCreateSection] = useState(false);
    const [isVisibleAddSection, setVisibleAddSection] = useState(true);

    useEffect(() => {
        window.addEventListener('click', onCloseTab);
        typeof props.fetchAllTaskList === 'function' && props.fetchAllTaskList();
        return () => {
            window.removeEventListener('click', onCloseTab);
        };
    },[]);

    const onCloseTab = () => {
        setOverlay(false);
    };

    const onClickAddTask = ()=> {
        typeof props.onToggleCreateTask === 'function' && props.onToggleCreateTask(true);
    };

    const handleOnDragEnd = (result) => {
        if (!result.destination) {return}
        const items = Array.from(taskList && taskList);
        const [reorderedItem] = items.splice(result.source.index, 1);

        items.splice(result.destination.index, 0, reorderedItem);

        setTasks(items);
        
    };

    const onSort = sortBy => {
        const tasks = taskList ? [...taskList] : [];

        if (sortBy === 'priority') {
            
            tasks?.sort((a,b) => {
                return a.priority - b.priority;
            }); 
            setTasks(tasks);
            setSortManager({
                type: sortBy,
                visibleSortComponent: true
            }); 
        }

        if (sortBy === 'alphabet') {
            tasks?.sort((a,b) => {
                if (a.taskContent > b.taskContent) {return 1}
                else if (a.taskContent < b.taskContent) {return -1}
                else {return 0}
            });  
            setTasks(tasks);
            setSortManager({
                type: sortBy,
                visibleSortComponent: true
            });         
        }
        
        if (sortBy === 'custom') {
            setOpenCustomSort(true);
            setSortManager({
                type: sortBy,
                visibleSortComponent: false
            });
        }
      
    };

    const onHandleClickCloseButton = data => {
        setSortManager({
            type: '',
            visibleSortComponent: data ? !data : true
        });
    };

    const onCloseCustomSort = data => {
        data && setOpenCustomSort(!data);
    };

    const onOpenCustomSort = data => {
        setOpenCustomSort(data ? data : false);
    };

    const onOpenModal = data => {
        setOverlay(data);
    };

    const onCloseAddSection = data => {
        setOpenCreateSection(data);
        setVisibleAddSection(!data);
    };

    const onCloseCreateSection = data => {
        setOpenCreateSection(!data);
        setVisibleAddSection(data);
    };

    const onCreateSection = section => {
        section && setOpenCreateSection(false);
        setVisibleAddSection(true);
    };

    const {openCreateTaskStatus, openTaskFormStatus} = props;

    return (
        <TodayStyled>
            <div className={classNames(isOverlayed ? 'modal-overlay' : '')} />
            <div className="app-content">
                
                <ContentHeader onSort = {onSort} sortManager = {sortManager} />
                {
                    sortManager.visibleSortComponent && (
                        <SortBy sortManager = {sortManager} onHandleClickCloseButton = {onHandleClickCloseButton} onOpenCustomSort = {onOpenCustomSort} />
                    )
                }
                {
                    isOpenCustomSort && (
                        <CustomSort onCloseCustomSort = {onCloseCustomSort} />               
                    )
                }
                <OverdueBox />
                <div className="app-content-main-wrapper">
                    <div className="app-content-list">
                        <DragDropContext onDragEnd={handleOnDragEnd}>
                            <Droppable droppableId="characters">
                                {(provided) => (
                                    <ul className="characters app-content-task-list" {...provided.droppableProps} ref={provided.innerRef}>
                                        {
                                        props.taskList?.map((task,index) => {
                                            return (
                                                <Draggable key={task.id + 'abc'} draggableId={index.toString()} index={index}>
                                                    {
                                                        (provided) => (
                                                            <Task
                                                                provided ={provided}
                                                                task = {task} 
                                                                onOpenModal = {onOpenModal} 
                                                            />
                                                        )
                                                    }
                                                </Draggable>
                                            );                                 

                                        })
                                        
                                        }   
                                    </ul>
                                )}
                            </Droppable>
             
                        </DragDropContext>                   
                    
                        {
                            openTaskFormStatus && (
                                <Modal />
                            ) 
                        }

                        {
                            openCreateTaskStatus ? (
                                <CreateTask  />
                            ) : (
                                <AddTask onHandleClick={onClickAddTask} />
                            )
                        }
                    </div>
                    <div style={{visibility: isVisibleAddSection === false ? 'hidden' : 'visible'}}>
                        <AddSection onCloseAddSection = {onCloseAddSection} />
                    </div>

                    {
                        isOpenCreateSection && (
                            <CreateSection onCloseCreateSection = {onCloseCreateSection} onCreateSection = {onCreateSection} />
                        )
                    }
                </div>
                <div />
            </div>
            
        </TodayStyled>
    );
};

const mapStateToProps = (state) => ({
    openCreateTaskStatus : state.openStatusComponents.openCreateTaskStatus,
    openTaskFormStatus: state.openStatusComponents.openTaskFormStatus,
    taskList: state.taskList
});

const mapDispatchToProps = (dispatch) => ({
    onToggleCreateTask: (toggleStatus) => dispatch(actToggleCreateTask(toggleStatus)),
    fetchAllTaskList:() => dispatch(actFetchTaskListRequest()),
    onOpenTaskForm: (status) => dispatch(actOpenTaskForm(status))
});

export default connect(mapStateToProps,mapDispatchToProps)(Today);
