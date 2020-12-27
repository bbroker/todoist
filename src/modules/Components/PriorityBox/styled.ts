import styled from 'styled-components';

export const PriorityBoxStyled = styled.div`
    .priority-box {
        background-color: white;
        border-radius: 4px;
        border: 1px solid #eee;
        position:absolute;
        width: 280px;
        top: 26px;
        left:-56px;
        z-index: 2;
                                
        .priority-box-item {
            display: flex;
            padding: 4px 10px;
            align-items: center;

            &:hover {
            background-color: #eee;
        }

            .priority-box-item-text {
                flex:1;
                margin: 0 10px;
            }
        }
    }
                
`;