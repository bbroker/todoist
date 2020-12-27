import styled from 'styled-components';

export const SortByStyled = styled.div`
    
    margin-top: -10px;

    .sort-by-container {
        padding: 10px 0;
        display: flex;
        justify-content: flex-end;
        border-bottom: 1px solid #f0f0f0;

        button {
            outline: none;
            background-color:white;
            border: none;
            color: #808080;
            padding: 0;
            border-radius: 3px;
    
            &:hover {
                background-color: #eee;
                color: #202020;
            }
        }

        .sort-by-up-arrow-button {
            position: relative;
            
            &:hover .sort-by-arrow-hover-label {
                display: block;
            }

            .sort-by-arrow-hover-label {
                position: absolute;
                top: 32px;
                left: -34px;
                width: 90px;
                background-color: rgba(0, 0, 0, 0.7);
                padding: 4px 0;
                color: white;
                border-radius: 3px;
                display: none;
            }
        }

        .sort-by-down-arrow-button {
            position: relative;

            &:hover .sort-by-arrow-hover-label {
                display: block;
            }

            .sort-by-arrow-hover-label {
                position: absolute;
                top: 32px;
                left: -34px;
                width: 90px;
                background-color: rgba(0, 0, 0, 0.7);
                padding: 4px 0;
                color: white;
                border-radius: 3px;
                font-size: 13px;
                display: none;
            }
        }
    
        .sort-by-content-button {
            padding: 0 8px;
            position: relative;

            &:hover .sort-by-content-hover-label {
                display: block;
            }
    
            .sort-by-text {
                font-size: 1.5rem;
                font-weight: 500;
            }

            .sort-by-content-hover-label {
                position: absolute;
                top: 32px;
                left: 0;
                padding: 4px;
                width: 146px;
                background-color: rgba(0, 0, 0, 0.7);
                color: white;
                border-radius: 3px;
                font-size: 1.3rem;
                display:none;
            }
        }

        .sort-by-close-button {
            position: relative;

            &:hover .sort-by-close-hover-label {
                display: block;
            }

            .sort-by-close-hover-label {
                position: absolute;
                top: 32px;
                left: -58px;
                padding: 4px;
                width: 136px;
                background-color: rgba(0, 0, 0, 0.7);
                color: white;
                border-radius: 3px;
                font-size: 1.3rem;
                display:none;
            }
        }

    }

    .empty-container {
        height:20px;
    }


`;