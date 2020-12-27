import styled from 'styled-components';

export const CustomSortStyled = styled.div`
    cursor:default;

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

        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .custom-sort-form {
            margin: 10vh auto 0;
            position: relative;
            z-index: 1;
            animation: linear 0.1s;
            background-color: white;
            width: 400px;
            height: 470px;
            border-radius: 4px;
            overflow: hidden;

            .custom-sort-header {
                padding: 14px 20px;
                border-bottom: 1px solid #ddd;
            }

            .custom-sort-body {
                padding: 20px 24px;

                .custom-sort-form-field {
                    cursor: pointer;
                    margin-bottom: 20px;
                    position: relative;

                    &:last-child {
                        margin-bottom: 0;
                    }

                    .custom-sort-form-field-label {
                        font-weight: 600;
                        margin-bottom: 7px;
                    }

                    .custom-sort-form-field-content {
                        padding: 5px;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        display:flex;
                        justify-content:space-between;
                        width: 100%;
                        background-color:white;

                        .custom-sort-form-field-text {
                            padding: 0 5px;
                        }
                    }

                    .custom-sort-form-field-dropdown {
                        position: absolute;
                        top: 64px;
                        left: 0;
                        z-index: 2;
                        background-color: white;
                        width: 100%;
                        border: 1px solid #ddd;
                        border-radius: 3px;

                        .custom-sort-form-field-list {
                            list-style: none;
                            padding-left:0;
                            margin-bottom: 0;
                            

                            .custom-sort-form-field-item {
                                padding: 4px;
                                display:flex;
                                justify-content: space-between;
                                align-items: center;

                                &:hover {
                                    background-color:#eee;
                                }
                            }
                        }
                    }
                }
            }

            .custom-sort-footer {
                padding:12px 24px;
                border-top: 1px solid #ddd;
                display: flex;
                justify-content: flex-end;

                .custom-sort-footer-cancel-button {
                    background-color:white;
                    border:1px solid #ddd;
                    padding: 8px 12px;
                    display :block;
                    line-height: 1.4rem;
                    border-radius: 4px;
                    font-weight:bold;
                    outline: none;

                    &:hover {
                        border-color:#444;
                    }
                }

                .custom-sort-footer-sort-button {
                    border:none;
                    padding: 8px 12px;
                    display :block;
                    line-height: 1.4rem;
                    background-color:#db4c3f;
                    border-radius: 4px;
                    font-weight:bold;
                    color: white;
                    margin-left: 10px;
                    outline: none;
                }
            }
        }

    }
`;