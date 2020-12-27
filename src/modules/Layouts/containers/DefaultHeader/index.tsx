// Libraries
import React from 'react';

// Styled
import {DefaultHeaderStyled} from './styled';

function DefaultHeader() {
    return (
        <DefaultHeaderStyled>
            <div className="header">
                <div className="header__navbar">
                    <ul className="header__navbar-list header__navbar-list-left-control">
                        <li className="header__navbar-item">
                            <a className="header__navbar-item-link">
                                <i className="icon-ants-menu" />                                   
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a className="header__navbar-item-link">
                                <svg className="header__navbar__menu-icon" width={24} height={24} viewBox="0 0 24 24">
                                    <path fill="white" d="M12.527 3.075c.35.104.64.263 1.27.876L19.1 9.123c.374.364.49.505.601.678.11.174.185.351.232.552.042.178.062.34.066.742L20 17.718c0 .446-.046.607-.134.77a.906.906 0 01-.378.378c-.163.088-.324.134-.77.134H14v-4.718c0-.446-.046-.607-.134-.77a.906.906 0 00-.378-.378c-.142-.077-.284-.122-.616-.132L12.718 13h-1.436c-.446 0-.607.046-.77.134a.906.906 0 00-.378.378c-.077.142-.122.284-.132.616l-.002.154V19H5.282c-.446 0-.607-.046-.77-.134a.906.906 0 01-.378-.378c-.088-.163-.134-.324-.134-.77v-6.462c0-.522.02-.703.067-.903.047-.2.121-.378.232-.552l.077-.113c.098-.134.233-.282.524-.565l5.304-5.172c.629-.613.92-.772 1.269-.876a1.82 1.82 0 011.054 0zm-.286.958a.825.825 0 00-.482 0c-.18.054-.326.139-.63.418l-.227.216L5.598 9.84c-.3.293-.385.39-.456.5a.76.76 0 00-.102.242c-.026.112-.037.224-.04.531l.002 6.807.005.073.074.006L8.999 18 9 14.268l.003-.17c.013-.448.083-.749.249-1.058a1.9 1.9 0 01.788-.788c.306-.164.6-.234 1.043-.249l.199-.003h1.45l.17.003c.448.013.749.083 1.058.249.337.18.608.45.788.788.164.306.234.6.249 1.043l.003.199L14.999 18l3.92-.002.073-.006.006-.073.002-.2v-6.615l-.005-.218a1.494 1.494 0 00-.035-.305.747.747 0 00-.102-.242l-.059-.084a3.571 3.571 0 00-.294-.315l-5.407-5.273c-.425-.414-.604-.545-.798-.615l-.06-.019z" />
                                </svg>
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <div className="header__navbar-item-search-bar">                                   
                                <svg className="header__navbar-item-search-bar-icon" width={24} height={24} aria-hidden="true" style={{marginLeft: '4px'}}>
                                    <g fill="none" fillRule="evenodd" transform="translate(4 4)">
                                        <mask id="sm1/search/b" fill="#fff">
                                            <path id="sm1/search/a" d="M11.44 10.73l4.41 4.42a.5.5 0 0 1-.7.7l-4.42-4.41a6.5 6.5 0 1 1 .7-.71zM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z" />
                                        </mask>
                                        <g mask="url(#sm1/search/b)">
                                            <path className="header__search-icon-path" fill="white" d="M-3-4h24v24H-4z" />
                                        </g>
                                    </g>
                                </svg>
                                <input type="text" className="header__navbar-item-search-bar-input" placeholder="Find" />
                            </div>
                        </li>
                    </ul>
                    <ul className="header__navbar-list header__navbar-list-right-control">
                        <li className="header__navbar-item">
                            <a className="header__navbar-item-link">
                                <svg className="header__navbar__menu-icon" width={24} height={24} viewBox="0 0 24 24">
                                    <g fill="none" fillRule="evenodd" transform="translate(4 3)">
                                        <mask id="jd4FBg" fill="#fff">
                                            <path d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z" />
                                        </mask>
                                        <g mask="url(#jd4FBg)">
                                            <path fill="white" d="M-4-3h24v24H-4z" />
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a className="header__navbar-item-link">
                                <div className="header__navbar-item-link-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                        <defs />
                                        <g fill="none" fillRule="evenodd" transform="translate(3 3)">
                                            <mask id="4ZtaWA" fill="#fff">
                                                <path id="a" d="M12.3 5L7 10.3 5.4 8.6a.5.5 0 0 0-.8 0l-3.9 4a9 9 0 1 1 .5.9L5 9.7l1.6 1.7a.5.5 0 0 0 .8 0L13 5.7v3.8a.5.5 0 1 0 1 0v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.8z" />
                                            </mask>
                                            <g mask="url(#4ZtaWA)">
                                                <path fill="white" d="M-3-3h24v24H-3z" />
                                            </g>
                                        </g>
                                    </svg>
                                    <span className="header__navbar-item-link-check-number">0/5</span>
                                </div>    
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a className="header__navbar-item-link">
                                <svg className="header__navbar__menu-icon" width={24} height={24} viewBox="0 0 24 24">
                                    <g fill="none" fillRule="evenodd" transform="translate(4 3)">
                                        <mask id="sm1/notifications/b" fill="#fff">
                                            <path id="sm1/notifications/a" d="M10.8 16a3 3 0 0 1-5.6 0h5.6zM5 15h6-6zm-3.8 0a1 1 0 0 1-.8-1.5 16 16 0 0 0 2.1-8 5.5 5.5 0 0 1 11 0c0 2.8.7 5.5 2.1 8a1 1 0 0 1-.8 1.5H1.2z" />
                                        </mask><g mask="url(#sm1/notifications/b)">
                                            <path fill="white" d="M-4-3h24v24H-4z" />
                                        </g>
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li className="header__navbar-item">
                            <a className="header__navbar-item-link">
                                <svg className="header__navbar__menu-icon" width={24} height={24} viewBox="0 0 24 24">
                                    <path fill="white" fillRule="nonzero" d="M16.523 6.38l1.193-.598a1 1 0 0 1 1.314.394l1.529 2.648a1 1 0 0 1-.317 1.335l-1.204.793a7.263 7.263 0 0 1-.026 2.079l1.23.81a1 1 0 0 1 .317 1.335l-1.529 2.648a1 1 0 0 1-1.314.394l-1.345-.674a7.194 7.194 0 0 1-1.757 1.027l-.087 1.488a1 1 0 0 1-.998.941H10.47a1 1 0 0 1-.998-.941L9.39 18.65a7.188 7.188 0 0 1-1.883-1.045l-1.223.613a1 1 0 0 1-1.314-.394l-1.529-2.648a1 1 0 0 1 .317-1.335l1.05-.692a7.242 7.242 0 0 1-.03-2.318l-1.02-.672a1 1 0 0 1-.317-1.335L4.97 6.176a1 1 0 0 1 1.314-.394l1.068.536a7.191 7.191 0 0 1 2.05-1.173l.071-1.204A1 1 0 0 1 10.471 3h3.058a1 1 0 0 1 .998.941l.075 1.283a7.197 7.197 0 0 1 1.921 1.156zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>              
            </div>
        </DefaultHeaderStyled>
    );
}

export default DefaultHeader;
