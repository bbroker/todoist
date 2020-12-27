import React,{FunctionComponent} from 'react';

import {AddSectionStyled} from './styled';

export interface propsAddSection {

    onCloseAddSection?: (any) => void;
}

const AddSection:FunctionComponent<propsAddSection> = props => {

    const onClickAddSection = e => {
        typeof props.onCloseAddSection === 'function' && props.onCloseAddSection(true);
        e.stopPropagation();
    };

    return (
        <AddSectionStyled>
            <button className="add-section-button" onClick={onClickAddSection}>
                <span className="add-section-label">Add Section</span>
            </button>
        </AddSectionStyled>
    );
};

export default AddSection;