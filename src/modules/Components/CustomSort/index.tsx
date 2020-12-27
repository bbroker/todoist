import React,{useState,useEffect,FunctionComponent} from 'react';
import {CustomSortStyled} from './styled';

export interface propsCustomSort {

    onCloseCustomSort?: (any) => void;
}

const CustomSort:FunctionComponent<propsCustomSort> = props => {
    const [isOpenGroupByDropdown, setOpenGroupByDropdown] = useState(false);
    const [isOpenSortByDropdown, setOpenSortByDropdown] = useState(false);
    const [isOpenOderDropdown, setOpeOrderDropdown] = useState(false);
    const [isOpenAssignedToDropdown, setOpeAssignedToDropdown] = useState(false);
    const [groupBy, setGroupBy] = useState({
        type:'Default'
    });
    const [sortBy, setSortBy] = useState({
        type:'Default'
    });
    const [order, setOrder] = useState('Ascending');
    const [assignedTo, setAssignedTo] = useState('Anyone');

    useEffect(() => {
        window.addEventListener('click',closeTab);
        return () => {
            window.removeEventListener('click',closeTab);
        };
    },[]);

    const closeTab = () => {
        setOpenGroupByDropdown(false);
        setOpenSortByDropdown(false);
        setOpeOrderDropdown(false);
        setOpeAssignedToDropdown(false);
    };

    const onDisplayGroupByDropDown = (e) => {
        setOpenGroupByDropdown(!isOpenGroupByDropdown);
        e.stopPropagation();
        setOpenSortByDropdown(false);
        setOpeOrderDropdown(false);
        setOpeAssignedToDropdown(false);
    };

    const onDisplaySortByDropDown = (e) => {
        setOpenSortByDropdown(!isOpenSortByDropdown);
        e.stopPropagation();
        setOpenGroupByDropdown(false);
        setOpeOrderDropdown(false);
        setOpeAssignedToDropdown(false);
    };

    const onDisplayOrderDropDown = (e) => {
        setOpeOrderDropdown(!isOpenOderDropdown);
        setOpenGroupByDropdown(false);
        setOpeAssignedToDropdown(false);
        setOpenSortByDropdown(false);
        e.stopPropagation();
    };

    const onDisplayAssignedToDropDown = (e) => {
        setOpeAssignedToDropdown(!isOpenAssignedToDropdown);
        setOpenGroupByDropdown(false);
        setOpenSortByDropdown(false);
        setOpeOrderDropdown(false);
        e.stopPropagation();
    };

    const groupByItem = [
        'Default',
        'Due date',
        'Assignee',
        'Date added',
        'Priority',
        'Label',
        'Project'
    ];

    const onClickGroupByItem = (item) => {
        setGroupBy({type: item});
    };

    const onClickSortByItem = (item) => {
        setSortBy({type: item});
    };

    const onClickOrder = (type) => {
        setOpeOrderDropdown(false);
        setOrder(type);
    };

    const onClickAssignedToItem = (type) => {
        setAssignedTo(type);
    };

    const onCloseCustomSort = () => {
        typeof props.onCloseCustomSort === 'function' && props.onCloseCustomSort(true);
    };

    const liGroupByElements = () => {
        return (
            groupByItem.map((item,index) => {
                return (
                    <li className="custom-sort-form-field-item" key={index} onClick={() => onClickGroupByItem(item)}>
                        {item}
                        {
                            groupBy.type === item && (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" className="property_dropdown_select__checkmark">
                                    <path fill="currentColor" fillRule="evenodd" d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z" />
                                </svg>
                            )
                        }
                    </li>
                );
            })
        );
    };

    const liSortByElements = () => {
        return (
            groupByItem.map((item,index) => {
                return (
                    <li className="custom-sort-form-field-item" key={index} onClick={() => onClickSortByItem(item)}>
                        {item}
                        {
                            sortBy.type === item && (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" className="property_dropdown_select__checkmark">
                                    <path fill="currentColor" fillRule="evenodd" d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z" />
                                </svg>
                            )
                        }
                    </li>
                );
            })
        );
    };

    const assignTypes = [
        'Anyone',
        'No one',
        'Only me'
    ];

    const liAssignedToElements = () => {
        return (
            assignTypes.map((item,index) => {
                return (
                    <li className="custom-sort-form-field-item" key={index} onClick={() => onClickAssignedToItem(item)}>
                        {item}
                        {
                            assignedTo === item && (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" className="property_dropdown_select__checkmark">
                                    <path fill="currentColor" fillRule="evenodd" d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z" />
                                </svg>
                            )
                        }
                    </li>
                );
            })
        );
    };

    return (
        <CustomSortStyled>
            <div className="modal">
                <div className="custom-sort-form">
                    <header className="custom-sort-header">
                        <h3>Custom sort</h3>
                    </header>
                    <div className="custom-sort-body">
                        <div className="custom-sort-form-field">
                            <div className="custom-sort-form-field-label">Group by</div>
                            <button className="custom-sort-form-field-content" onClick = {onDisplayGroupByDropDown}>
                                <span className="custom-sort-form-field-text">{groupBy.type}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <g fill="none" fillRule="evenodd">
                                        <path stroke="#666" strokeLinecap="round" strokeLinejoin="round" d="M16 10l-4 4-4-4" />
                                    </g>
                                </svg>
                            </button>
                            {
                                isOpenGroupByDropdown && (

                                    <div className="custom-sort-form-field-dropdown">
                                        <ul className="custom-sort-form-field-list">
                                            {liGroupByElements()}                                              
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                        <div className="custom-sort-form-field">
                            <div className="custom-sort-form-field-label">Sort by</div>
                            <button className="custom-sort-form-field-content" onClick = {onDisplaySortByDropDown}>
                                <span className="custom-sort-form-field-text">{sortBy.type}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <g fill="none" fillRule="evenodd">
                                        <path stroke="#666" strokeLinecap="round" strokeLinejoin="round" d="M16 10l-4 4-4-4" />
                                    </g>
                                </svg>
                            </button>
                            {
                                isOpenSortByDropdown && (

                                    <div className="custom-sort-form-field-dropdown">
                                        <ul className="custom-sort-form-field-list">
                                            {liSortByElements()}                                              
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                        <div className="custom-sort-form-field">
                            <div className="custom-sort-form-field-label">Order</div>
                            <button className="custom-sort-form-field-content" onClick = {onDisplayOrderDropDown}>
                                <span className="custom-sort-form-field-text">{order}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <g fill="none" fillRule="evenodd">
                                        <path stroke="#666" strokeLinecap="round" strokeLinejoin="round" d="M16 10l-4 4-4-4" />
                                    </g>
                                </svg>
                            </button>
                            {
                                isOpenOderDropdown && (

                                    <div className="custom-sort-form-field-dropdown">
                                        <ul className="custom-sort-form-field-list">
                                            <li className="custom-sort-form-field-item"  onClick={() => onClickOrder('Ascending')}>
                                                Ascending
                                                {
                                                    order === 'Ascending' && (
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" className="property_dropdown_select__checkmark">
                                                            <path fill="currentColor" fillRule="evenodd" d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z" />
                                                        </svg>
                                                    )
                                                }
                                            </li>
                                            <li className="custom-sort-form-field-item"  onClick={() => onClickOrder('Descending')}>
                                                Descending
                                                {
                                                    order === 'Descending' && (
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" className="property_dropdown_select__checkmark">
                                                            <path fill="currentColor" fillRule="evenodd" d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z" />
                                                        </svg>
                                                    )
                                                }
                                            </li>                                           
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                        <div className="custom-sort-form-field">
                            <div className="custom-sort-form-field-label">Assigned to</div>
                            <button className="custom-sort-form-field-content" onClick={onDisplayAssignedToDropDown}>
                                <span className="custom-sort-form-field-text">{assignedTo}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                    <g fill="none" fillRule="evenodd">
                                        <path stroke="#666" strokeLinecap="round" strokeLinejoin="round" d="M16 10l-4 4-4-4" />
                                    </g>
                                </svg>
                            </button>
                            {
                                isOpenAssignedToDropdown && (

                                    <div className="custom-sort-form-field-dropdown">
                                        <ul className="custom-sort-form-field-list">
                                            {liAssignedToElements()}                                              
                                        </ul>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="custom-sort-footer">
                        <button className="custom-sort-footer-cancel-button" onClick= {onCloseCustomSort}>Cancel</button>
                        <button className="custom-sort-footer-sort-button">Sort</button>
                    </div>
                </div>
            </div>
        </CustomSortStyled>
    );
};

export default CustomSort;