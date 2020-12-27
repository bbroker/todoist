import styled from 'styled-components';

export const TaskStyled = styled.div`

    .app-content-list-item {
        cursor: pointer;
        border-bottom: 1px solid rgba(219, 219, 219, 0.4);
        padding: 8px 0;
        list-style:none;

        .app-content-list-item-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;

            .app-content-list-item-circle-move-and-text-wrapper {
                display: flex;
                align-items: center;
                position: relative;
                left: -24px;

                .app-content-list-item-move-item {
                    color: #888;
                    visibility: hidden;

                    &:hover {
                        color: black;
                        background-color: #ededed;
                        border-radius: 2px;
                        cursor: all-scroll;
                    }
                }

                .app-content-list-item-circle {
                    border-radius: 50%;
                    border: 1px solid;
                    background-color:white;
                    width:20px;
                    height: 20px;
                    outline:none;
                    position: relative;
                    color: grey;

                    &:hover {
                        background-color: #EDEDED;
                        cursor: pointer;
                    }

                    &:hover .app-content-list-item-circle-check-icon {
                        display: block;
                        z-index:2;
                    }

                    .app-content-list-item-circle-check-icon {
                        border-radius:50%;
                        position: absolute;
                        top: -3px;
                        left: -4px;
                        display: none;
                        color:grey;
                    }
                }

                .app-content-list-item-text {
                    flex:1;
                    font-size: 1.4rem;
                    font-weight: 300;
                    margin-left: 12px;
                }
            }

            .app-content-list-item-action-bar {
                display: flex;
                align-items: center;
                position: absolute;
                right: -32px;
                top: 0; 
                visibility: hidden;

                .app-content-list-item-action-bar-btn {
                    background-color:white;
                    border: none;
                    color: #666;
                    outline: none;
                    position: relative;

                    &:hover {
                        color: black;
                        background-color:#ededed;
                        border-radius: 4px;
                    }

                    &:hover .app-content-list-item-action-bar-btn-label-1 {
                        display: flex;
                    }

                    &:hover .app-content-list-item-action-bar-btn-label-2-3 {
                        display: flex;
                    }

                    &:hover .app-content-list-item-action-bar-btn-label-4 {
                        display: flex;
                    }
                    
                    .app-content-list-item-action-bar-btn-label-1 {
                        width: 108px;
                        height: 28px;
                        display: inline-block;
                        background-color:rgba(0, 0, 0, 0.7);
                        position:absolute;
                        z-index:2;
                        color: white;
                        border-radius: 3px;
                        top: 30px;
                        left:-40px;
                        font-size:1.3rem;
                        line-height: 1.8rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        display: none; 
                        
                        .app-content-list-item-action-bar-btn-label-1-text-1{
                            background-color:rgba(255,255,255, 0.3);
                            padding: 0 4px;
                            margin-right: 4px;
                            border-radius: 2px;                           
                        }

                        .app-content-list-item-action-bar-btn-label-1-text-2 {
                            background-color:rgba(255,255,255, 0.3);
                            border-radius: 2px;                           
                            padding: 0 4px;
                        }
                    }

                    .app-content-list-item-action-bar-btn-label-2-3 {
                        width: 68px;
                        height: 28px;
                        display: inline-block;
                        background-color:rgba(0, 0, 0, 0.7);
                        position:absolute;
                        z-index:2;
                        color: white;
                        border-radius: 3px;
                        top: 30px;
                        left: -14px;
                        font-size:1.3rem;
                        line-height: 1.8rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        display: none;
                    }

                    .app-content-list-item-action-bar-btn-label-4 {
                        width: 114px;
                        height: 28px;
                        display: inline-block;
                        background-color:rgba(0, 0, 0, 0.7);
                        position:absolute;
                        z-index:2;
                        color: white;
                        border-radius: 3px;
                        top: 30px;
                        left: -14px;
                        font-size:1.3rem;
                        line-height: 1.8rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        display: none;
                    }

                }

                .app-content-list-item-action-bar-etc-btn {
                    padding-bottom: 4px;
                }

                .activeMoreTaskAction {
                        visibility: visible !important;
                    }

                .more-task-action-position {
                    position: absolute;
                    top: 30px;
                    right: 0;
                }

                .position-scheduler {
                    position: absolute;
                    top: 32px;
                    right: 0;
                    z-index:3;
                }


              //moretaskaction here
            }


            .activeScheduler {
                visibility: visible !important;
            }
        }

        .app-content-list-item-under-task-box {
            display: flex;
            margin:6px 0 0 32px;
            justify-content: space-between;
            position: relative;

            .app-content-list-item-under-task-box-date {
                font-size:1.2rem;
                line-height: 1.2rem;
                display:flex;
                align-items: center;
                color: #d1453b;

                .app-content-list-item-under-task-box-calendar_icon {
                    margin-right: 4px;
                }
            }

            .under-task-box-scheduler-position {
                position: absolute;
                top: 20px;
                left: -100px;
                z-index:2;
            }

            .app-content-list-item-inbox {
                display: flex;
                align-items:center;

                .app-content-list-item-inbox-text {
                    font-size:1.2rem;
                    line-height: 1.2rem;
                    color: #777;
                    margin-right: 4px;
                }

                .app-content-list-item-inbox-icon {
                    display: flex;
                    color: #246fe0;
                }
            }
        }


        &:hover .app-content-list-item-action-bar {
            visibility: visible;
        }

        &:hover .app-content-list-item-circle-move-and-text-wrapper .app-content-list-item-move-item {
            visibility: visible;
        }

    }


`;