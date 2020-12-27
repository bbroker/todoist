import styled from 'styled-components';

export const OverdueBoxStyled = styled.div`

    .app-content-overdue-bar {
        width: 100%;
        height:31px;
        border-bottom: 1px solid rgba(219, 219, 219, 0.4);
        display: flex;
        justify-content: space-between;
        align-items:flex-end;
        font-weight: 600;
        font-size:1.4rem;

        .app-content-overdue-link {
            color: #d1453b;
            margin-right: 8px;

            &:hover {
                text-decoration: underline;
            }
        }
    }
        
`;