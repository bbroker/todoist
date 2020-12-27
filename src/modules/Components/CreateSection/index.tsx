import React,{FunctionComponent,useEffect,useState} from 'react';
import {CreateSectionStyled} from './styled';

export interface propsCreateSection {

    onCloseCreateSection?: (any) => void;
    onCreateSection?: (any) => void;
}

const CreateSection:FunctionComponent<propsCreateSection> = (props) => {

    const [sectionName, setSectionName] = useState('');

    useEffect(() => {
        document.getElementById('create-section-input')?.focus();
    },[]);

    const onClickCancelButton = e => {
        typeof props.onCloseCreateSection === 'function' && props.onCloseCreateSection(true);
        e.stopPropagation();
    };

    const onHandleInputChange = e => {
        const target = e.target;
        const value = target.value;

        setSectionName(value);
    };
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000 ).toString(16).substring(1);
    };

    const generateId = () => {
        return  s4() +  s4() + '-' +  s4() +  s4() + '-' +  s4() + s4() + '-' +  s4();

    };

    const onClickAddButton = e => {
        const section = {
            id: generateId(),
            sectionName: sectionName
        };
        
        typeof props.onCreateSection === 'function' && props.onCreateSection(section);
        e.stopPropagation();
    };

    return (
        <CreateSectionStyled>
            <input id="create-section-input" className="create-section-input" type="text" placeholder="Name this section" onChange={onHandleInputChange} />
            <div className="create-section-actions">
                <button className="create-section-actions-add-btn" onClick={onClickAddButton}>Add section</button>
                <button className="create-section-actions-cancel-btn" onClick={onClickCancelButton}>Cancel</button>
            </div>
        </CreateSectionStyled>
    );
};

export default CreateSection;