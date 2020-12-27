import styled from 'styled-components';

export const DefaultSidebarStyled = styled.div`
    padding: 20px;
    height: 100vh;
    font-size: 14px;
    background: #fff;
    width: 25%;
    overflow-y:scroll;

    /* .active-plus-icon:hover .menu-item-link .menu-item-link-plus-icon {
        display: block;
    } */

    .main-menu {
        list-style: none;
        padding-left: 10px;
        margin: 0;

        

        .menu-item-hover {
            border-bottom: 1px solid rgba(219, 219, 219, 0.4);

            &:hover {
                background-color: rgba(237, 237, 237, 0.5);
            }
        }

        .menu-item {
            padding: 5px;
            cursor: pointer;
            -webkit-user-select: none;

            .menu-item-link {
                text-decoration: none;
                color: #202020;
                font-size: 1.4rem;
                font-weight: 300;
                display: flex;
                align-items: center;

                .menu-item-work {
                    margin-left: 8px;
                }

                .menu-item-link-plus-icon {
                    display: none;
                    margin-right: 20px;

                    &:hover .menu-item-link-plus-icon-path {
                        fill: #111;
                    }
                }
                            
            }

            .menu-item-link--extension {
                display: flex;
                height: transparent;
                justify-content: space-between;
                padding: 6px 0;
                position: relative;
                
            }


            .menu-item-expansion-panel {
                display: none;

                .menu-item-reactist-collapse {
                    padding: 8px 0;

                    &:hover .collapse__wrapper .collapse__wrapper_inner .collapse__wrapper-list .collapse__wrapper-list-item .collapse__wrapper-list-item-project .collapse__wrapper-list-item-move {
                        visibility: visible;
                    }

                    &:hover .collapse__wrapper .collapse__wrapper_inner .collapse__wrapper-list .collapse__wrapper-list-item .collapse__wrapper-list-item-more {
                        visibility: visible;
                    }

                    .collapse__wrapper{
                        .collapse__wrapper_inner{
                            .collapse__wrapper-list {
                                list-style: none;
                                padding-left:0;

                                .collapse__wrapper-list-item {
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;

                                    .collapse__wrapper-list-item-project {
                                        display: flex;
                                        align-items: center;
                                        font-size: 1.4rem;
                                        position: relative;
                                        padding-left: 5px;

                                        .collapse__wrapper-list-item-move {
                                            position: absolute;
                                            top: -2px;
                                            left: -24px;
                                            color: #999;
                                            visibility: hidden;

                                            &:hover {
                                                color: #666;
                                            }
                                        }

                                        .black-circle {
                                            width: 10px;
                                            height: 10px;
                                            background-color:#999;
                                            border-radius:50%;
                                            display: inline-block;                                            
                                        }

                                        .collapse__wrapper-list-item-project-emoji {
                                            margin-right: 4px;
                                            height: 18px;
                                            display: flex;
                                            line-height: 18px;     

                                            .shaking-hand-icon {
                                                width: 18px;
                                                height: 18px;
                                            }                        
                                        } 

                                        .collapse__wrapper-list-item-project-text {
                                            margin-left: 14px;
                                            margin-right: 4px;
                                        }

                                        .collapse__wrapper-list-item-project-counter {
                                            color: #aaa;
                                        }


                                    }

                                    .collapse__wrapper-list-item-more {
                                        margin-right: 20px;
                                        color: #999;
                                        visibility: hidden;

                                        &:hover {
                                            color: #666;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                .menu-item-expansion-panel-add-project {
                    display: flex;
                    align-items: center;
                    padding: 16px 0;
                    width: 160px;
                    cursor: pointer;

                    &:hover .menu-item-expansion-panel-add-project-text {
                        color: #dd4b39;
                    }

                    &:hover .app-content-list-item-icon-add-label {
                        background-color:#dd4b39;
                    }

                    &:hover .app-content-list-item-icon-add path {
                        fill:white;
                    }

                    .app-content-list-item-icon-add-label {
                        margin-right:12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 20px;
                        height: 20px;
                        border: 1px solid white;
                        border-radius: 50%;
                    }

                    .menu-item-expansion-panel-add-project-text {
                        color: #666;
                        font-size: 1.4rem;
                        margin-top: 2px;
                    }
                }

                .menu-item-expansion-panel-archived-project {
                    font-size: 1.3rem;
                    color: #999;
                    margin: 30px 8px 20px;

                    &:hover {
                        color:#666;
                        cursor: pointer;
                    }
                }
            }

            /* Filter category */
            .menu-item-filter-category-wrapper {
                display: none;

                .menu-item-filter-category {
                    display: flex;
                    align-items: center;
                    position: relative;
                    justify-content: space-between;
                    padding: 8px 0;
    
                    &:hover .menu-item-filter-category-move {
                        visibility: visible;
                    }
    
                    &:hover .menu-item-filter-category-btn {
                        visibility: visible;
                    }
    
                    .menu-item-filter-category-move {
                        position: absolute;
                        top: 8px;
                        left: -24px;
                        color: #999;
                        visibility: hidden;
    
                        &:hover {
                            color: #666;
                        }
                    }
    
                    .menu-item-filter-category-content {
                        display: flex;
                        align-items: center;
                        font-size: 1.4rem;
    
                        .menu-item-filter-category-content-text {
                            margin-left: 8px;
                        }
                    }
    
                    .menu-item-filter-category-btn {
                        background-color:white;
                        border: none;
                        outline: none;
                        margin-right: 20px;
                        color: #999;
                        visibility: hidden;
    
                        &:hover {
                            color: #666;
                        }
                    }
                }
                            
            }
        }
        &:hover .menu-item .menu-item-link .menu-item-link-plus-icon {
            display: block;
        }
    }

    .active-btn {
        display: block !important;
        animation: fadeIn ease-in 0.2s;
    }

`;