import styled from 'styled-components';

export const TaskFormStyled = styled.div`

    margin: auto;
    position: relative;
    z-index: 1;
    animation: linear 0.1s;
    background-color: white;
    width: 46%;
    height: 95%;
    border-radius: 10px;
    overflow: visible;
    padding: 20px;

    .task-form-inbox {
        display: flex;
        justify-content: space-between;
        margin-bottom: 6px;

        .task-form-inbox-left-box {
            display: flex;
            align-items: center;
            margin-left: 2px;

            .task-form-inbox-left-box-text {
                line-height: 1.6rem;
                margin-left: 10px;
            }
        }

        .task-form-inbox-icon_close {

            &:hover {
                background-color: #eee;
            }
        }
    }

    .task-form-header {
        display: flex;

        .task-form-header-check-btn {
            border-radius: 50%;
            border: 1px solid #666;
            background-color:white;
            width:20px;
            height: 20px;
            outline:none;
            position: relative;
            left: 0;
            top: 6px;
            

            &:hover {
                background-color: #eee;
            }

            &:hover .task-form-header-check-icon {
                display: block;      
            }

            .task-form-header-check-icon {
                border-radius:50%;
                position: absolute;
                top: -2px;
                left: -3px;
                display: none;
            }
        }

        .task-form-header-main {
            flex: 1;
            margin-left: 15px;

            .task-form-task-content {
                font-size: 1.8rem;
                padding: 4px 0;
            }

            .task-form-date-box {
                margin-top:5px;
                position: relative;

                .task-form-date-box-btn {
                    display: flex;
                    background-color: white;
                    border-radius: 4px;
                    border: 1px solid #ccc;
                    outline: none;
                    padding: 4px 6px;
                    color: #d1453b;

                    &:hover {
                        background-color: #eee;
                    }

                    .task-form-date-box--text {
                        line-height: 1.4rem;
                        margin-left: 4px;
                    }
                }

                .position-scheduler {
                    z-index: 2;
                    position: absolute;
                    top: 27px;
                    left: 0;
                }
            }

            .task-form-action-bar {
                display: flex;
                justify-content: flex-end;
                margin-top: 12px;

                .task-form-action-bar-btn-wrapper {
                    width: 168px;
                    display: flex;
                    justify-content: space-between;
                    margin-right: 6px;
                    position: relative;
                    

                    .task-form-action-bar-btn {
                        background-color:white;
                        border-radius: 4px;
                        border: none;
                        outline: none;
                        padding:0 3px;
                        position:relative;
                        

                        &:hover {
                            background-color: #eee;
                        }

                        &:hover .task-form-action-bar-label{
                            display:flex;
                        }

                        &:hover .task-form-action-bar-label-3 {
                            display: flex;
                        }

                        .task-form-action-bar-label {
                            position: absolute;
                            top: 32px;
                            left: -45px;
                            display: inline-flex;
                            z-index:3;
                            min-width: 112px;
                            height: 30px;
                            background-color: rgba(0, 0, 0, 0.7);
                            border-radius: 3px;
                            line-height: 1.8rem;
                            align-items: center;
                            color: white;
                            font-size: 1.2rem;
                            justify-content: center;
                            display: none;

                            .task-form-action-bar-label-text {
                                background-color:rgba(255,255,255, 0.3);
                                padding: 0 6px;
                                border-radius: 2px;
                                margin-left: 6px;
                            }
                        }

                        .task-form-action-bar-label-3 {
                            position: absolute;
                            top: 32px;
                            left: -45px;
                            display: inline-flex;
                            z-index:3;
                            min-width: 206px;
                            height: 30px;
                            background-color: rgba(0, 0, 0, 0.7);
                            border-radius: 3px;
                            line-height: 1.8rem;
                            align-items: center;
                            color: white;
                            font-size: 1.2rem;
                            justify-content: center;
                            display: none;


                            .task-form-action-bar-label-3-text {
                                background-color:rgba(255,255,255, 0.3);
                                padding: 0 6px;
                                border-radius: 2px;
                                margin-left: 6px;
                            }
                        }

                    } 

                    .task-form-action-bar-more {
                        background-color: white;
                        border-radius: 4px;
                        border: 1px solid #ccc;
                        position: absolute;
                        width: 254px;
                        z-index: 5;
                        top:26px;
                        left:34px;
                        

                        .task-form-bar-more-item {
                            display: flex;
                            padding: 4px 10px;
                            font-size: 1.3rem;
                            align-items:center;
                            cursor: pointer;

                            &:hover {
                                background-color: #f3f3f3;
                            }

                            &:last-child:hover{
                                color: #de4c4a;
                            }

                            .task-form-bar-more-item-icon {
                                margin-right: 10px;
                            }

                            .task-form-bar-more-item-text {
                                line-height: 1.3rem;
                                height: 1.3rem;
                            }
                        }

                        .task-form-bar-more-separator {
                            margin: 4px;
                            border-bottom: 1px solid #ddd;
                        }

                        
                    }                  
                }             
            }
        }
    }

    .task-form-body {
        margin-top: 6px;
        

        .task-form-body-header {
            display: flex;
            justify-content: space-between;

            .task-form-body-header-item {
                width: 33.3333%;
                text-align: center;
                border-bottom: 1px solid #e0e0e0;
                line-height:1.4rem;
                padding: 9px 0;
                color: #808080;
                cursor: pointer;

                &:hover {
                    color: #202020;
                }

                
            }

            .active-task-form-item {
                    font-weight:600;
                    color: #202020;
                    border-bottom: 1px solid #202020;
                }
        }

        .task-form-body-container-sub-tasks {
            padding: 20px 30px 0;

            .task-form-body-container-sub-tasks-list {
                list-style: none;
                padding-left: 0;
            }
        }

        
        .task-form-body-container-comments {

            .task-form-body-container-comments-img {
                width: 220px;
                margin: 20px auto 0;
            }

            .task-form-body-container-comments-empty-state {
                margin: 0 120px;

                .task-form-body-container-comments-empty-title {
                    text-align: center;
                    color: #808080;
                }

                .task-form-body-container-comments-empty-button {
                    text-align: center;
                    margin-top: 20px;

                    .task-form-body-container-comments-empty-premium-btn {
                        outline: none;
                        border: none;
                        background-color: #db4c3f;
                        color: white;
                        border-radius: 3px;
                        padding: 8px 8px;
                        line-height: 1.4rem;
                        margin-right: 8px;
                    }
                }
            }

            .task-form-body-container-comment-box {
                border: 1px solid #ccc;
                border-radius: 2px;
                padding: 8px;
                margin-top: 34px;

                
                .task-form-body-container-comment-box-textarea {
                    width: 100%;
                    border: none;
                    height: 40px;
                    outline: none;
                }

                .task-form-body-container-comment-box-action-bar{
                    display: flex;
                    border-top: 1px solid #eee;
                    justify-content: space-between;
                    padding-top: 5px;

                    .task-form-body-container-comment-box-action-bar-left-wrapper {
                        display: flex;

                        .task-form-body-container-comment-box-action-bar-btn {
                            padding: 4px 7px 2px;
                        }
                    }

                    .task-form-body-container-comment-box-action-bar-add-comment {
                        outline: none;
                        border: none;
                        line-height: 1.4rem;
                        border-radius:3px;
                        background-color: #db4c3f;
                        color: white;
                        padding: 10px;
                    }
                }
            }
        }
        
        .task-form-body-container-activity {

            .task-form-activity-history-tab {
                padding: 12px 20px;
                border-bottom: 1px solid #ddd;
                font-weight: 600;
                font-size: 1.3rem;
                color: black;
            }

            .task-form-activity-empty-state {
                margin: 0 93px;

                .task-form-activity-illustration {
                    width: 220px;
                    margin: 0 auto;
                }

                .task-form-activity-empty-content-box {

                    .task-form-activity-empty-content-text {
                        text-align: center;
                        font-size: 1.3rem;
                    }

                    .task-form-activity-empty-content-button {
                        margin-top: 16px;
                        text-align: center;

                        .task-form-activity-empty-content-premium-button {
                            outline: none;
                            border: none;
                            border-radius: 3px;
                            background-color:#da4c3f;
                            color: white;
                            line-height:1.3rem;
                            padding: 10px;
                            margin-right: 8px;
                        }

                        .task-form-activity-empty-content-learn-more {
                            font-size: 1.3rem;
                            color:#da4c3f;
                        }
                    }
                }
            }
        }

        
    }

    @keyframes moveUp {
        0% {bottom: -100px; right: 0}
        100% {bottom: 0; right: 0}
    }

    .copied-to-clipboard-form {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 240px;
        background-color: white;
        border: 1px solid #ccc;
        color: #555;
        padding: 10px 10px;
        border-radius: 3px;
        margin-right: 40px;
        display: flex;
        justify-content: space-between;
        font-size: 1.3rem;
        animation-name: moveUp;
        animation-duration:0.5s;
        animation-timing-function: ease;

        .copied-to-clipboard-form-btn {
            outline: none;
            border: none;
            background-color:white;
            padding:0;

            &:hover svg path {
                fill: #444;
            }
        }
    }
`; 