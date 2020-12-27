import styled from 'styled-components';

export const TypeOfProjectListStyled = styled.div`
    position: absolute;
    left: -128px;
    top: 38px;
    width:280px;
    border-radius: 4px;
    border: 1px solid #ccc;
    z-index: 1;
    background-color: white;


    &::before {
        content: "";
        border: 6px solid transparent;
        border-bottom-color: #eee;
        position: absolute;
        top: -13px;
        left: 134px;
    }

    .dropdown-select-input-box {
        border-bottom: 1px solid #eee;
        margin: 2px 0;
        
        .dropdown-select-input {
            width: 100%;
            outline: none;
            border: none;
        }

    }
    .dropdown-select-type-of-project-box {
        overflow-y:scroll;

        .dropdown-select-type-of-project-title {
            padding: 4px 10px;
            display: flex;
            align-items: center;
            cursor: pointer;

            &:hover {
                background-color: #eee;
            }

            .dropdown-select-type-of-project-text {
                flex:1;
                margin: 0 10px;
            }


            .dropdown-select-type-of-project-title-icon {
                width: 16px;
                height: 16px;
            }
        }

        .dropdown-select-type-of-project-item {
            padding: 4px 20px;
            display: flex;
            cursor: pointer;

            &:hover {
                background-color: #eee;
            }

            .dropdown-select-type-of-project-text {
                flex:1;
                margin: 0 10px;
            }
        }
    }
`;