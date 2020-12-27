import styled from 'styled-components';

export const TodayStyled = styled.div`
    padding: 20px;
    height: 100vh;
    font-size: 14px;
    background: #fff;
    overflow-y:scroll;
    overflow-x:visible;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        animation: fadeIn linear 0.1s;
        transition: opacity linear 0.2s;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
    }

    .app-content {
        margin: 0 12.5%;
        padding-left: 20px;
        padding-right: 20px;
        width:75%;

         .app-content-list {
                    

            .app-content-task-list {
                list-style: none;
                padding-left: 0;
            }
    
        }
    }  
`;

