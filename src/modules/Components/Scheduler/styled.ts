import styled from 'styled-components';

export const SchedulerStyled = styled.div`
    width: 250px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    z-index: 5;

    .scheduler-input {
        
        .scheduler-input-text {
            width: 100%;
            outline: none;
            border: none;
        }
    }

    .scheduler-suggestions {
        border-bottom: 1px solid #ddd;
        border-top: 1px solid #ddd;

        .scheduler-suggestions-item {
            display: flex;
            padding: 4px 10px;

            &:hover {
                background-color: #eee;
            }

            .scheduler-suggestions-item-icon {
                margin-right: 10px;
            }

            .scheduler-suggestions-item-weekday {
                margin-left: auto;
            }
        }
    }

    .date-picker {
        padding: 5px 5px;
    }

    .scheduler-actions {
        padding: 8px 10px;
        border-top: 1px solid #ddd;

        .scheduler-actions-add-time {
            outline: none;
            background-color: white;
            border: none;
            color: #d1453b;
            font-weight: 600;
        }
    }
`;