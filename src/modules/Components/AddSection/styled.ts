import styled from 'styled-components';

export const AddSectionStyled = styled.div`
    
    .add-section-button {
        width: 100%;
        border:none;
        outline: none;
        background-color:white;
        display:flex;
        color: #dd4b39;
        height: 24px;
        align-items: center;
        opacity: 0;

        &:hover {
            opacity: 1;
        }
    
        &::before {
            content: "";
            display: block;
            height: 2px;
            -webkit-box-flex: 1;
            flex: 1 1 auto;
            opacity: .5;
            background-color: #dd4b39;
        }

        &::after {
            content: "";
            display: block;
            height: 2px;
            -webkit-box-flex: 1;
            flex: 1 1 auto;
            opacity: .5;
            background-color: #dd4b39;
        }

        .add-section-label {
            line-height: 1.4rem;
            margin:0 10px 4px;
            font-weight:500;
        }
    }    
`;