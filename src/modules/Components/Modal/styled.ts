import styled from 'styled-components';

export const ModalStyled = styled.div`

    @keyframes growth {
        from {
            transform: scale(var(0.7));
        }
        to {
            transform: scale(var(1));
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

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
    background-color: rgba(0, 0, 0, 0.4);
    
    /* .modal-overlay {
        position: absolute;
        
    } */

    .modal-close {
        position: absolute;
        width: 100%;
        height: 100%;
        cursor: default;
    }
`;