import styled from 'styled-components';

export const DeleteWarningFormStyled = styled.div`
    cursor: default;

    .modal {
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
        background-color: rgba(0, 0, 0, 0.25);

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

        .delete-form {
            margin: 10vh auto 0;
            position: relative;
            z-index: 1;
            animation: linear 0.1s;
            background-color: white;
            width: 400px;
            height: 195px;
            border-radius: 4px;
            overflow: hidden;

            .delete-form-body {
                padding: 20px 24px;

                .delete-form-warning-icon {
                    padding-bottom: 25px;
                }

                .delete-form-notice {
                    padding-bottom: 25px;
                    font-size: 1.3rem;

                    .delete-form-task-content {
                        font-weight: bold;
                    }
                }
            }

            .delete-form-footer {
                padding: 12px 24px;
                border-top: 1px solid #ddd;
                text-align:right;

                .delete-form-footer-button {
                    outline: none;
                    background-color: white;
                    border:none;
                    font-weight: 600;
                    padding: 4px 12px 7px;
                    border-radius: 3px;
                }

                .cancel-btn {
                    background-color:#f3f3f3;
                    border: 1px solid #ddd;

                    &:hover {
                        border-color: #888;
                    }
                }

                .delete-btn {
                    background-color: #db4c3f;
                    color: white;
                    margin-left: 10px;
                }

            }

        }

    }
`;