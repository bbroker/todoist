import styled from 'styled-components';

export const CreateSectionStyled = styled.div`

    .create-section-input {
        width: 100%;
        font-size: 1.4rem;
        font-weight: 500;
        height: 38px;
    }

    .create-section-actions {
        margin-top: 10px;
        font-size: 1.3rem;
        .create-section-actions-add-btn {
            outline: none;
            background-color: #db4c3f;
            border: none;
            padding: 4px 8px;
            opacity: 0.5;
            color: white;
            border-radius: 3px;
            
        }

        .create-section-actions-cancel-btn {
            outline: none;
            background-color: white;
            border: none;
            border-radius: 3px;
            padding: 4px 8px;
            margin-left: 6px;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;