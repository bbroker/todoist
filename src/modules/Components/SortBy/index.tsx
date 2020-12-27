import React, {FunctionComponent} from 'react';
import {SortByStyled} from './styled';

export interface propsSortBy {
    sortManager?: {
        type:string,
        visibleSortComponent: boolean
    };

    onHandleClickCloseButton?: (any) => void;
    onOpenCustomSort?: (any) => void;
}

const SortBy:FunctionComponent<propsSortBy> = props => {

    const handleNameSort = () => {
        switch (props.sortManager?.type) {
            case 'dueDate': return 'by due date';
            case 'priority': return 'by priority';
            case 'alphabet': return 'alphabetically';
            case 'assignee': return 'by assignee';
            default: return '';
        }
    };

    const onClickCloseButton = e => {
        typeof props.onHandleClickCloseButton === 'function' && props.onHandleClickCloseButton(true);
        e.stopPropagation();
    };

    const onOpenCustomSort = e => {
        typeof props.onOpenCustomSort === 'function' && props.onOpenCustomSort(true);
        e.stopPropagation();
    };

    return (
        <SortByStyled>
            <div className="sort-by-container">
                {
                    false && (
                        <button className="sort-by-up-arrow-button">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path d="M11.5 19a.5.5 0 00.5-.5V6.709l2.146 2.145a.502.502 0 00.708-.708l-3-3a.502.502 0 00-.708 0l-3 3a.502.502 0 00.708.708L11 6.707V18.5a.5.5 0 00.5.5z" fill="currentColor" fillRule="nonzero" />
                            </svg>
                            <div className="sort-by-arrow-hover-label">Reserve order</div>
                        </button>
                    )
                }
                {
                    true && (
                        <button className="sort-by-down-arrow-button">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12.5 5a.5.5 0 01.5.5v11.791l2.146-2.145a.502.502 0 01.708.708l-3 3a.502.502 0 01-.708 0l-3-3a.502.502 0 01.708-.708L12 17.293V5.5a.5.5 0 01.5-.5z" fill="currentColor" fillRule="nonzero" />
                            </svg>
                            <div className="sort-by-arrow-hover-label">Reserve order</div>
                        </button>
                    )
                }
                <button className="sort-by-content-button" onClick= {onOpenCustomSort}>
                    <span className="sort-by-text">Sorted {handleNameSort()}</span>
                    <div className="sort-by-content-hover-label">Change sorting options</div>
                </button>
                <button className="sort-by-close-button" onClick={onClickCloseButton}>
                    <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M8.854 8.146L12 11.293l3.146-3.147a.502.502 0 01.708.708L12.707 12l3.147 3.146a.502.502 0 01-.708.708L12 12.707l-3.146 3.147a.502.502 0 01-.708-.708L11.293 12 8.146 8.854a.502.502 0 01.708-.708z" fill="currentColor" fillRule="nonzero" />
                    </svg>
                    <div className="sort-by-close-hover-label">Reset sorting options</div>
                </button>
            </div>
            <div className="empty-container" />
        </SortByStyled>
    );
};

export default SortBy;
