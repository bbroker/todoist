import styled from 'styled-components';

export const MoreTaskActionStyled = styled.div`
      .app-content-list-item-more-task-action-list {
                    position: absolute;
                    top: 0;
                    right:0;
                    background-color: white;
                    border: 1px solid #eee;
                    border-radius: 4px;
                    z-index: 1;
                    
                    .app-content-list-item-more-task-action-item {
                        padding: 4px 10px;

                        &:hover {
                                background-color: #eee;
                            }

                            &:last-child:hover {
                                color: #de4c4a;
                            }

                            &:last-child:hover .app-content-list-item-more-task-action-icon g .delete-btn-path1 {                               
                                fill: #de4c4a;
                            }

                            &:last-child:hover .app-content-list-item-more-task-action-icon g .delete-btn-path2 {                               
                                stroke: #de4c4a;
                            }

                        .app-content-list-item-more-task-action-icon {
                            margin-right: 10px;
                        }

                    }

                    .app-content-list-item-more-task-action-line {
                        margin: 4px;
                        border-bottom: 1px solid #ddd;
                    }

                    .app-content-list-item-more-task-action-selection-menu {
                        padding: 4px 10px;

                        .app-content-list-item-more-task-action-menu-name {
                            margin-bottom: 11px;
                            font-size:1.1rem;
                        }

                        .app-content-list-item-more-task-action-menu-item {
                            padding: 5px 0;
                            display: flex;                           

                            .app-content-list-item-more-task-action-btn {
                                border:none;
                                outline:none;
                                padding: 0;
                                margin:0 0 0 12px;
                                background-color:white;

                                &:first-child {
                                   margin-left:0;
                                }

                                &:hover {
                                    background-color: #eee;
                                    border-radius: 2px;
                                }
                            }

                            .active-priority {
                                border: 1px solid #ddd;
                            }
                        }
                    }
                }

`;