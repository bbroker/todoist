import styled from 'styled-components';

export const AddTaskStyled = styled.div`
    .app-content-list-item {
        cursor: pointer;
        border-bottom: 1px solid rgba(219, 219, 219, 0.4);
        padding: 8px 0;
        border:none !important;
    }

    .app-content-list-item-add-item {
        display: flex;
        align-items: center;
        position: relative;

        &:hover .app-content-list-item-add-btn {
            color: #dd4b39;
        }

        &:hover .app-content-list-item-icon-add-label {
            fill: white;
            color: white;
            background-color: rgba(221, 75, 57);
            border: 1px solid #dd4b39;;
        }

        &:hover .app-content-list-item-icon-add path {
            fill: white;
        }


        .app-content-list-item-add-btn {
            display: flex;
            background-color:white;
            border: none;
            outline: none;
            cursor: pointer;
            color: #888;
            font-size:1.4rem;
            padding: 0;

            .app-content-list-item-icon-add-label {
                margin-right:12px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 20px;
                height: 20px;
                border: 1px solid white;
                border-radius: 50%;
            }
        }
    }
`;