import React,{useEffect} from 'react';
import {TypeOfProjectListStyled} from './styled';

const TypeOfProjectList = () => {

    useEffect(() => {
    document.getElementById('input')?.focus();
    },[]);

    const onHandleClick = (e) => {
        e.stopPropagation();
    };

    const onBlur = e => {
        e.stopPropagation();
    };

    return (
        <TypeOfProjectListStyled>
            <div className="dropdown-select-input-box" >
                <input id={'input'} type="text" className="dropdown-select-input" placeholder = "Type a project" onChange = {onHandleClick} onClick={onBlur} />
            </div>
            <div className="dropdown-select-type-of-project-box">
                <div className="dropdown-select-type-of-project-title">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="dropdown-select-type-of-project-inbox-icon">
                        <g fill="#246fe0" fillRule="nonzero">
                            <path d="M10 14.5a2 2 0 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z" opacity="0.1" />
                            <path d="M8.062 4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z" />
                        </g>
                    </svg>
                    <div className="dropdown-select-type-of-project-text">Inbox</div> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" className="dropdown-select-type-of-project-checkmark-icon">
                        <path fill="#dd4b39" fillRule="evenodd" d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z" />
                    </svg>
                </div>
                <div className="dropdown-select-type-of-project-title">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="project_icon" style={{color:' #b8b8b8'}}>
                        <path d="M12 7a5 5 0 110 10 5 5 0 010-10z" fill="currentColor" />
                    </svg>
                    <div className="dropdown-select-type-of-project-text">Welcome&nbsp;
                        <img className="dropdown-select-type-of-project-title-icon" src="https://twemoji.maxcdn.com/v/latest/svg/1f44b.svg" />
                    </div>
                </div>
                <div className="dropdown-select-type-of-project-item">
                    <svg data-svgs-path="sm1/section.svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="grey" fillRule="nonzero" d="M17.5 20c.276 0 .5.224.5.5s-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h11zM16 8c1.105 0 2 .895 2 2v5c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2v-5c0-1.105.895-2 2-2h8zm0 1H8c-.513 0-.936.386-.993.883L7 10v5c0 .513.386.936.883.993L8 16h8c.513 0 .936-.386.993-.883L17 15v-5c0-.513-.386-.936-.883-.993L16 9zm1.5-5c.276 0 .5.224.5.5s-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h11z" />
                    </svg>
                    
                    <div className="dropdown-select-type-of-project-text">Welcome! Lets get started</div>
                </div>
                <div className="dropdown-select-type-of-project-item">
                    <svg data-svgs-path="sm1/section.svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="grey" fillRule="nonzero" d="M17.5 20c.276 0 .5.224.5.5s-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h11zM16 8c1.105 0 2 .895 2 2v5c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2v-5c0-1.105.895-2 2-2h8zm0 1H8c-.513 0-.936.386-.993.883L7 10v5c0 .513.386.936.883.993L8 16h8c.513 0 .936-.386.993-.883L17 15v-5c0-.513-.386-.936-.883-.993L16 9zm1.5-5c.276 0 .5.224.5.5s-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h11z" />
                    </svg>
                    
                    <div className="dropdown-select-type-of-project-text">To go further</div>
                </div>
                <div className="dropdown-select-type-of-project-title">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="project_icon" style={{color: '#b8b8b8'}}>
                        <path d="M12 7a5 5 0 110 10 5 5 0 010-10z" fill="currentColor" />
                    </svg>
                    
                    <div className="dropdown-select-type-of-project-text">Try boards</div>
                </div>
                <div className="dropdown-select-type-of-project-item">
                    <svg data-svgs-path="sm1/section.svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="grey" fillRule="nonzero" d="M17.5 20c.276 0 .5.224.5.5s-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h11zM16 8c1.105 0 2 .895 2 2v5c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2v-5c0-1.105.895-2 2-2h8zm0 1H8c-.513 0-.936.386-.993.883L7 10v5c0 .513.386.936.883.993L8 16h8c.513 0 .936-.386.993-.883L17 15v-5c0-.513-.386-.936-.883-.993L16 9zm1.5-5c.276 0 .5.224.5.5s-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h11z" />
                    </svg>
                    
                    <div className="dropdown-select-type-of-project-text">To do</div>
                </div>
            </div>
        </TypeOfProjectListStyled>
    );
};

export default TypeOfProjectList;