import React, {useState, useEffect,FunctionComponent} from 'react';
import {ContentHeaderStyled} from './styled';

export interface propsContentHeader {
    sortManager?: {
        type:string,
        visibleSortComponent: boolean
    };

    onSort?: (any) => void;
}

const ContentHeader:FunctionComponent<propsContentHeader> = props => {

    const [isActiveSortTable, setOpenSortTable] = useState(false);
    const [typeOfSort, setTypeOfSort] = useState('');

    useEffect(() => {
        window.addEventListener('click',closeTab);
        return () => {
            window.removeEventListener('click',closeTab);
        };
    },[]);

    useEffect(() => {
        if (props.sortManager?.visibleSortComponent === false) {
            setTypeOfSort('');
        }
    },[props.sortManager]);

    const closeTab = () => {
        setOpenSortTable(false);
    };

    const onHanldeSort = e => {
        setOpenSortTable(!isActiveSortTable);
        e.stopPropagation();
    };

    const onSort = (sortBy, status) => {
        setOpenSortTable(status ? !status : status);
        setTypeOfSort(sortBy ? sortBy : '' );
        typeof props.onSort === 'function' && props.onSort(sortBy);
    }; 

    return (
        <ContentHeaderStyled>
            <div className="app-content-header">
                <div className="app-content-header-name-and-date-wrapper">
                    <span className="app-content-header-name">
                        Today
                    </span>
                    <span className="app-content-header-date">
                        {(new Date()).toLocaleDateString()}
                    </span>
                </div>
                <button className="app-content-header-btn-sort" type="button" onClick={onHanldeSort}>
                    <svg className="app-content-header-sort-option-icon" width={24} height={24} viewBox="0 0 24 24">
                        <path fill="#808080" d="M16.854 5.146l3 3a.502.502 0 01-.708.708L17 6.707V18.5a.5.5 0 01-1 0V6.707l-2.146 2.147a.502.502 0 01-.708-.708l3-3a.502.502 0 01.708 0zM7.5 5a.5.5 0 01.5.5v11.791l2.146-2.145a.502.502 0 01.708.708l-3 3a.502.502 0 01-.708 0l-3-3a.502.502 0 01.708-.708L7 17.293V5.5a.5.5 0 01.5-.5z" />
                    </svg>
                    <div className="app-content-header-sort-hover-label">Sort</div>
                </button>

                {
                    isActiveSortTable && (
                        <div className="app-content-header-sort-table">
                            <div className="app-content-header-sort-option" onClick = {(e) => {onSort('dueDate',true); e.stopPropagation()}}>
                                <svg className="app-content-header-sort-option-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#808080" fillRule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm10 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM7 8h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z" />
                                </svg>
                                Sort by due date
                                {
                                    typeOfSort === 'dueDate' && (
                                        <svg className = "app-content-header-check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" data-testid="sort_menu__priority_checkmark">
                                            <path fill="#444" fillRule="evenodd" d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z" />
                                        </svg>
                                    )
                                }
                            </div>
                            <div className="app-content-header-sort-option" onClick = {(e) => {onSort('priority',true); e.stopPropagation()}}>
                                <svg className="app-content-header-sort-option-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-svgs-path="sm1/priority_flag.svg">
                                    <g fill="none" fillRule="evenodd">
                                        <path d="M0 0h24v24H0z" />
                                        <g fill="#808080">
                                            <path d="M5 5.5L6 5v14.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-14z" />
                                            <path fillRule="nonzero" d="M5 13.51V5.29l.26-.15c.17-.09.46-.21.88-.33 1.62-.47 3.65-.46 6.02.31a11.9 11.9 0 0 0 6.91.15l.21-.06.09-.02.1-.01c.18-.05.18-.05.51.5l.01 8.29-.32.12c-.2.08-.58.2-1.09.31a12.7 12.7 0 0 1-6.74-.33 9.2 9.2 0 0 0-5.43-.3 3.66 3.66 0 0 0-.67.25.5.5 0 0 1-.74-.47.5.5 0 0 1 0-.04zm1.14-.7a10.2 10.2 0 0 1 6.02.31 11.72 11.72 0 0 0 6.83.15V6.32a12.63 12.63 0 0 1-.47.11c-2.08.43-4.34.4-6.68-.36A9.2 9.2 0 0 0 6 5.91v6.94l.14-.04z" />
                                        </g>
                                    </g>
                                </svg>
                                Sort by priority
                                {
                                    typeOfSort === 'priority' && (
                                        <svg className = "app-content-header-check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" data-testid="sort_menu__priority_checkmark">
                                            <path fill="#444" fillRule="evenodd" d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z" />
                                        </svg>
                                    )
                                }
                            </div>
                            <div className="app-content-header-sort-option" onClick = {(e) => {onSort('alphabet',true); e.stopPropagation()}}>
                                <svg className="app-content-header-sort-option-icon" width="24" height="24">
                                    <path fill="#808080" d="M11.67 17l-1-2.82H6.76L5.76 17H4.47l3.64-9.86h1.22L12.96 17h-1.29zm-3-8.27l-1.55 4.4h3.2l-1.55-4.4h-.1zm7.97 7.37c1.21 0 2.1-.8 2.1-1.85v-.68l-1.97.13c-1.12.08-1.62.47-1.62 1.2 0 .76.64 1.2 1.5 1.2zm-.22 1.03c-1.42 0-2.48-.85-2.48-2.2 0-1.31.97-2.07 2.68-2.17l2.13-.14v-.67c0-.9-.57-1.4-1.67-1.4-.88 0-1.5.33-1.66.91h-1.2c.17-1.18 1.33-1.96 2.9-1.96 1.8 0 2.8.92 2.8 2.45V17H18.8v-1.09h-.1a2.55 2.55 0 0 1-2.28 1.22z" />
                                </svg>
                                Sort alphabetically
                                {
                                    typeOfSort === 'alphabet' && (
                                        <svg className = "app-content-header-check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" data-testid="sort_menu__priority_checkmark">
                                            <path fill="#444" fillRule="evenodd" d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z" />
                                        </svg>
                                    )
                                }
                            </div>
                            <div className="app-content-header-sort-option" onClick = {(e) => {onSort('assignee',true); e.stopPropagation()}}>
                                <svg className="app-content-header-sort-option-icon"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                                    <path fill="#808080" fillRule="nonzero" d="M8 8.5c2.93 0 4.87.838 5.819 2.515a2 2 0 0 1-1.592 2.98l-.149.005H3.922a2 2 0 0 1-1.74-2.985C3.13 9.338 5.07 8.5 8 8.5zm0 1c-2.604 0-4.204.691-4.948 2.008a1 1 0 0 0 .741 1.484l.129.008h8.156a1 1 0 0 0 .87-1.492C12.204 10.19 10.604 9.5 8 9.5zm0-8a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 1.037a1.963 1.963 0 1 0 0 3.926 1.963 1.963 0 0 0 0-3.926z" />
                                </svg>
                                Sort by assignee
                                {
                                    typeOfSort === 'assignee' && (
                                        <svg className = "app-content-header-check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" data-testid="sort_menu__priority_checkmark">
                                            <path fill="#444" fillRule="evenodd" d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z" />
                                        </svg>
                                    )
                                }
                            </div>
                            <div className="app-content-header-sort-option" onClick = {(e) => {onSort('custom',true); e.stopPropagation()}}>
                                <svg className="app-content-header-sort-option-icon" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="#808080" d="M13.529 3a1 1 0 01.998.941l.075 1.283a7.206 7.206 0 011.921 1.156l1.193-.598a1 1 0 011.314.394l1.529 2.648a1 1 0 01-.317 1.335l-1.204.793a7.291 7.291 0 01-.026 2.078l1.23.811a1 1 0 01.317 1.335l-1.529 2.648a1 1 0 01-1.314.394l-1.345-.674a7.18 7.18 0 01-1.757 1.027l-.087 1.488a1 1 0 01-.998.941H10.47a1 1 0 01-.998-.941L9.39 18.65a7.203 7.203 0 01-1.883-1.045l-1.223.613a1 1 0 01-1.314-.394l-1.529-2.648a1 1 0 01.317-1.335l1.05-.692a7.213 7.213 0 01-.029-2.318l-1.021-.672a1 1 0 01-.317-1.335L4.97 6.176a1 1 0 011.314-.394l1.068.536a7.205 7.205 0 012.05-1.173l.071-1.204A1 1 0 0110.471 3h3.058zm0 1H10.47l-.09 1.539a.499.499 0 01-.349.447 6.188 6.188 0 00-2.273 1.3.5.5 0 01-.558.075l-1.365-.685-1.528 2.648 1.294.852c.17.112.255.316.216.515a6.242 6.242 0 00.034 2.58.5.5 0 01-.213.528l-1.331.877 1.528 2.648 1.51-.758a.5.5 0 01.548.066c.624.529 1.346.93 2.127 1.178a.5.5 0 01.348.448L10.471 20h3.058l.106-1.81a.5.5 0 01.333-.443 6.185 6.185 0 002.007-1.174.5.5 0 01.552-.07l1.637.82 1.528-2.647-1.506-.992a.499.499 0 01-.215-.52 6.284 6.284 0 00.032-2.364.498.498 0 01.217-.506l1.472-.97-1.528-2.648-1.494.75a.502.502 0 01-.563-.08 6.204 6.204 0 00-2.15-1.297.501.501 0 01-.334-.442L13.53 4zM12 8.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 1a2.5 2.5 0 000 5 2.5 2.5 0 000-5z" />
                                </svg>
                                Custom sort
                                {
                                    typeOfSort === 'custom' && (
                                        <svg className = "app-content-header-check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" data-testid="sort_menu__priority_checkmark">
                                            <path fill="#444" fillRule="evenodd" d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z" />
                                        </svg>
                                    )
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </ContentHeaderStyled>
    );
};

export default ContentHeader;