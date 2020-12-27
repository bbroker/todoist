import styled from 'styled-components';

export const CreateTaskStyled = styled.nav`
    
    .app-content-list-item { 
        cursor: pointer;
        border-bottom: 1px solid rgba(219, 219, 219, 0.4);
        padding: 8px 0;
        border:none !important;

        .app-content-list-item-open-add-task {
            width: 100%;
            min-height: 100%;
            border-radius:6px;                   
            background-color: white;

            .app-content-list-item-open-add-task-body {
                padding: 0 10px 10px;
                border: 1px solid #666;
                border-radius: 4px;
                position: relative;
                
                .app-content-list-item-open-add-task-content {
                    width: 100%;
                    outline: none;
                    border: none;
                    opacity: 0.8;
                    border-radius:6px;
                    font-size: 1.4rem;
                    line-break: break-all;

                }

                .app-content-list-item-add-task-extra-field {
                    display: flex;
                    justify-content: space-between;
                    padding-top:6px;

                    .app-content-list-item-add-task-schedule-and-inbox-wrapper {
                        display:flex;
                        position: relative;

                        .app-content-list-item-add-task-schedule-inbox-btn {
                            outline: none;
                            border: 1px solid #ccc;
                            border-radius: 4px;
                            background-color: white;
                            color: #555;
                            font-size: 1.3rem;
                            display: flex;
                            align-items: center;
                            padding: 6px;

                            div {
                                line-height: 1.3rem;
                            }

                            &:first-child {
                                margin-right: 8px;
                            }

                            &:hover {
                                background-color: #eee;
                            }
                        }

                        .positon-tyofprojectlist {
                            position: absolute;
                            top: 4px;
                            left: 108px;
                        }

                        .position-scheduler {
                            position: absolute;
                            top: 31px;
                            left:0;
                        }
                    }

                    .app-content-list-item-add-task-action-wrapper {
                        position: relative;
                        display: flex;

                        .app-content-list-item-add-task-action-btn{

                            .app-content-list-item-add-task-action-icon {
                                margin: 0 4px;
                                width: 24px; 
                                height: 24px;

                                &:hover {
                                    background-color: #eee;
                                    border-radius: 2px;
                                }
                            }
                        }

                        .position-prioritybox {
                            position: absolute;
                            top: 0;
                            right: 133px;
                        }
                    }
                }
            }

            .app-content-list-item-open-add-task-footer {
                padding-top: 10px;

                .app-content-list-item-open-add-task-add-btn {
                    outline: none;
                    background-color: rgba(219, 76, 63, 0.5);
                    border-radius: 4px;
                    border: none;
                    color: rgba(255, 255, 255, 0.8);
                    font-weight: 500;
                    padding: 4px 10px;
                }

                .app-content-list-item-open-add-task-cancel-btn {
                    outline: none;
                    background-color: white;
                    border: 1px solid white;
                    font-weight: 400;
                    color: #555;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }

`;