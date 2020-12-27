import styled from 'styled-components';

export const ContentHeaderStyled = styled.div`

    .app-content-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        position: relative;

        .app-content-header-name-and-date-wrapper {
            .app-content-header-name {
                font-size: 2rem;
                font-weight: 600;
            }

            .app-content-header-date {
                font-size: 1.1rem;
                color: #666;
                margin-left: 4px;
            }
        }

        .app-content-header-btn-sort {
            background-color: white;
            border: none;
            font-weight: 300;
            color: #888;
            outline: none;
            position: relative;

            &:hover svg path {
                fill: #444;
            }

            &:hover .app-content-header-sort-hover-label {
                display: block;
            }

            .app-content-header-sort-hover-label {
                position: absolute;
                top: 26px;
                left: -2px;
                font-size: 1.3rem;
                background-color:rgba(0, 0, 0, 0.7);
                border-radius: 3px;
                color: white;
                padding: 4px 8px;
                display: none;
            }
        }

        .app-content-header-sort-table {
            position: absolute;
            background-color: white;
            border-radius: 3px;
            top: 26px;
            right: -110px;
            width: 250px;
            border: 1px solid #eee;
            z-index: 1;

            .app-content-header-sort-option {
                padding: 4px 16px;
                color: #202020;
                font-size:1.2rem;
                cursor: pointer;
                display:flex;
                align-items: center;

                &:hover {
                    background-color: #f3f3f3;
                }

                .app-content-header-sort-option-icon {
                    margin-right: 16px;
                }

                .app-content-header-check-icon {
                    margin-left: auto;
                }
            }

            
        }         
    }
`;