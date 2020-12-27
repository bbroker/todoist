import styled from 'styled-components';

export const DefaultHeaderStyled = styled.nav`
    i {
        font-size: 1.8rem;
    }

    .header {
    background-color: #DB4C3F;
    height: 44px;

        .header__navbar {
            display: flex;
            justify-content: space-between;
            
            .header__navbar-list-left-control {
                margin-left: 6px;
            }

            .header__navbar-list-right-control {
                margin-right: 6px;
            }

            .header__navbar-list {
                list-style: none;
                padding-left: 0;
                display: flex;
                align-items: center;
                margin: 8px 28px 0;

                .header__navbar-item {
                    margin: 0 8px;

                    .header__navbar-item-search-bar {
                        width: 200px;
                        background-color: rgba(255, 255, 255, 0.2);
                        border-radius: 2px;
                        position: relative;
                        left: 0;
                        top: -1px;
                        display: flex;
                        align-items: center;
                        height: 30px;

                        &:hover {
                            cursor: text;
                            background-color:white;
                            z-index: 0;
                        }

                        &:hover .header__navbar-item-search-bar-input {
                            z-index: 1;
                            &::-webkit-input-placeholder {
                                color: #666;
                            };
                        }

                        &:hover .header__navbar-item-search-bar-icon {
                            z-index: 1;
                            
                        }

                        &:hover .header__navbar-item-search-bar-icon .header__search-icon-path {
                            fill: black;
                        }

                        .header__navbar-item-search-bar-input {
                            z-index: 1;
                            background-color: transparent;
                            border: none;
                            color:black;  
                            &::-webkit-input-placeholder {
                                color: white;
                                font-size: 1.2rem;
                            };
                            &:focus {
                                outline: none;
                                
                                .header__navbar-item-search-bar {
                                    background-color:red;
                                }
                            }
    
                        }

                    }


                    .header__navbar-item-link {
                        text-decoration: none;
                        color: #fafafa;
                        display: block;

                        .header__navbar-item-link-wrapper {
                            display: flex;
                            align-items: center;
                            position: relative;
                            left: 0;
                            top: 0;
                            padding: 2px;
                            margin: auto 0;
                            &:hover {
                                background-color: #e27065;
                                border-radius: 4px;
                            }

                            .header__navbar-item-link-check-number {
                                font-size: 1.2rem;
                                margin: 0 2px 2px 6px;
                                line-height:1.2rem;
                            }
                        }
                    }
                }
            }

        }

    }

    

    

    

    .header__navbar__menu-icon {
        padding: 2px;
    }

    .header__navbar__menu-icon:hover {
        background-color: #e27065;
        border-radius: 2px;
    }   
`;