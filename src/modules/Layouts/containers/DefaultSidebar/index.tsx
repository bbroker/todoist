// Libraries
import React,{useState} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom'; 

// Styled
import {DefaultSidebarStyled} from './styled';

function DefaultSidebar() {
    const [isOpenProject, setOpenProject] = useState(false);
    const [isOpenFilter, setOpenFilter] = useState(false);

    return (
        <DefaultSidebarStyled>
            <div className="active-plus-icon">                
                <ul className="main-menu">
                    <li className="menu-item">
                        <Link to="/inbox" className="menu-item-link">
                            <svg width={24} height={24} viewBox="0 0 24 24">
                                <g fill="#246FE0" fillRule="nonzero">
                                    <path d="M10 14.5a2 2 0 104 0h5.5V18a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18v-3.5H10z" opacity="0.1" />
                                    <path d="M8.062 4h7.876a2 2 0 011.94 1.515l2.062 8.246a2 2 0 01.06.485V18a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.754a2 2 0 01.06-.485l2.06-8.246A2 2 0 018.061 4zm0 1a1 1 0 00-.97.757L5.03 14.004a1 1 0 00-.03.242V18a1 1 0 001 1h12a1 1 0 001-1v-3.754a1 1 0 00-.03-.242l-2.06-8.247A1 1 0 0015.94 5H8.061zM12 17.25A2.75 2.75 0 019.295 15H7a.5.5 0 110-1h2.75a.5.5 0 01.5.5 1.75 1.75 0 003.5 0 .5.5 0 01.5-.5H17a.5.5 0 110 1h-2.295A2.75 2.75 0 0112 17.25z" />
                                </g>
                            </svg>
                            <span className="menu-item-work">Inbox</span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/today" className="menu-item-link">
                            <svg width={24} height={24} viewBox="0 0 24 24">
                                <g fill="#058527" fillRule="evenodd">
                                    <path fillRule="nonzero" d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v2.5h-15V6A1.5 1.5 0 0 1 6 4.5z" opacity=".1" />
                                    <path fillRule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z" />
                                    <text fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'" fontSize={9} transform="translate(4 2)" fontWeight={500}>
                                        <tspan x={8} y={15} textAnchor="middle">24</tspan>
                                    </text>
                                </g>
                            </svg>
                            <span className="menu-item-work">Today</span>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/upcoming" className="menu-item-link">
                            <svg width={24} height={24} viewBox="0 0 24 24">
                                <g fill="#692FC2" fillRule="nonzero">
                                    <path d="M6 4.5h12A1.5 1.5 0 0119.5 6v2.5h-15V6A1.5 1.5 0 016 4.5z" opacity="0.1" />
                                    <path d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm0 1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6zm10 12a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm8-4a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zm-4 0a1 1 0 110-2 1 1 0 010 2zM7 8h10a.5.5 0 110 1H7a.5.5 0 010-1z" />
                                </g>
                            </svg>
                            <span className="menu-item-work">Upcoming</span>
                        </Link>
                    </li>
                    <li className="menu-item menu-item-hover" onClick={() => setOpenProject(!isOpenProject)}>
                        <a className="menu-item-link menu-item-link--extension">                                   
                            <div className="menu-item-work-wrapper">
                                <svg width="16px" height="16px" viewBox="0 0 16 16">                                        
                                    <g transform="translate(-266, -17)" fill="#777777">
                                        <path d="M280,22.7581818 L279.1564,22 L273.9922,26.506 L273.4414,26.0254545 L273.4444,26.0281818 L268.8562,22.0245455 L268,22.7712727 C269.2678,23.878 272.8084,26.9674545 273.9922,28 C274.8718,27.2330909 274.0144,27.9809091 280,22.7581818" />
                                    </g>
                                </svg>
                                <span className="menu-item-work">Projects</span>
                            </div>
                            <svg className="menu-item-link-plus-icon" width={13} height={13}>
                                <path className="menu-item-link-plus-icon-path" d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="#999" fillRule="evenodd" />
                            </svg>
                        </a>
                        <div className={classNames('menu-item-expansion-panel',{'active-btn': isOpenProject === true})} >
                            <div className="menu-item-reactist-collapse">
                                <div className="collapse__wrapper">
                                    <div className="collapse__wrapper_inner">
                                        <ul className="collapse__wrapper-list">
                                            <li className="collapse__wrapper-list-item">                                                        
                                                <div className="collapse__wrapper-list-item-project">
                                                    <div className="collapse__wrapper-list-item-move">
                                                        <svg width={24} height={24}>
                                                            <path fill="currentColor" d="M14.5 15.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 15.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 15.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 10.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 10.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 5.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 5.5z" />
                                                        </svg>
                                                    </div>
                                                    <div className="black-circle" />
                                                    <span className="collapse__wrapper-list-item-project-text">Welcome</span>
                                                    <span className="collapse__wrapper-list-item-project-emoji">
                                                        <img className="shaking-hand-icon" alt="👋" src="https://twemoji.maxcdn.com/2/72x72/1f44b.png" />
                                                    </span>
                                                    <div className="collapse__wrapper-list-item-project-counter">9</div>
                                                </div>
                                                <div className="collapse__wrapper-list-item-more">                                          
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={3} data-svgs-path="sm1/more_small.svg">
                                                        <path fill="currentColor" fillRule="evenodd" d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                    </svg>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item-reactist-collapse">
                                <div className="collapse__wrapper">
                                    <div className="collapse__wrapper_inner">
                                        <ul className="collapse__wrapper-list">
                                            <li className="collapse__wrapper-list-item">                                                        
                                                <div className="collapse__wrapper-list-item-project">
                                                    <div className="collapse__wrapper-list-item-move">
                                                        <svg width={24} height={24}>
                                                            <path fill="currentColor" d="M14.5 15.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 15.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 15.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 10.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 10.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 5.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 5.5z" />
                                                        </svg>
                                                    </div>
                                                    <div className="black-circle" />
                                                    <span className="collapse__wrapper-list-item-project-text">Welcome</span>
                                                    <div className="collapse__wrapper-list-item-project-counter">1</div>
                                                </div>
                                                <div className="collapse__wrapper-list-item-more">                                          
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={3} data-svgs-path="sm1/more_small.svg">
                                                        <path fill="currentColor" fillRule="evenodd" d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                    </svg>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item-expansion-panel-add-project">
                                <span className="app-content-list-item-icon-add-label">
                                    <svg className="app-content-list-item-icon-add" width={13} height={13}>
                                        <path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="#dd4b39" fillRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="menu-item-expansion-panel-add-project-text">Add project</span>
                            </div>
                            <div className="menu-item-expansion-panel-archived-project">
                  Archived projects
                            </div>
                        </div>
                    </li>
                    <li className="menu-item menu-item-hover" >
                        <a className="menu-item-link menu-item-link--extension">
                            <div className="menu-item-work-wrapper">
                                <svg width="16px" height="16px" viewBox="0 0 16 16">
                                    <g transform="translate(-266, -17)" fill="#777777">
                                        <path d="M280,22.7581818 L279.1564,22 L273.9922,26.506 L273.4414,26.0254545 L273.4444,26.0281818 L268.8562,22.0245455 L268,22.7712727 C269.2678,23.878 272.8084,26.9674545 273.9922,28 C274.8718,27.2330909 274.0144,27.9809091 280,22.7581818" />
                                    </g>
                                </svg>
                                <span className="menu-item-work">Labels</span>
                            </div>
                            <svg className="menu-item-link-plus-icon" width={13} height={13}>
                                <path className="menu-item-link-plus-icon-path" d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="#999" fillRule="evenodd" />
                            </svg>
                        </a>
                    </li>
                    <li className="menu-item menu-item-hover" onClick={() => setOpenFilter(!isOpenFilter)}>
                        <a className="menu-item-link menu-item-link--extension">
                            <div className="menu-item-work-wrapper">
                                <svg width="16px" height="16px" viewBox="0 0 16 16">
                                    <g transform="translate(-266, -17)" fill="#777777">
                                        <path d="M280,22.7581818 L279.1564,22 L273.9922,26.506 L273.4414,26.0254545 L273.4444,26.0281818 L268.8562,22.0245455 L268,22.7712727 C269.2678,23.878 272.8084,26.9674545 273.9922,28 C274.8718,27.2330909 274.0144,27.9809091 280,22.7581818" />
                                    </g>
                                </svg>
                                <span className="menu-item-work">Filters</span>
                            </div>
                            <svg className="menu-item-link-plus-icon" width={13} height={13}>
                                <path className="menu-item-link-plus-icon-path" d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="#999" fillRule="evenodd" />
                            </svg>
                        </a>
                        <div className={classNames('menu-item-filter-category-wrapper',{'active-btn': isOpenFilter === true})}>                            
                            <div className="menu-item-filter-category">
                                <div className="menu-item-filter-category-move" draggable="true">
                                    <svg width={24} height={24}>
                                        <path d="M9.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" fillRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="menu-item-filter-category-content">
                                    <span className="menu-item-filter-category-content-icon" style={{color: 'rgb(128, 128, 128)'}}>
                                        <svg width={24} height={24} viewBox="0 0 24 24">
                                            <path fill="currentColor" fillRule="nonzero" d="M12 19a5 5 0 0 0 5-5c0-1.102-.345-2-1.064-3.03-.259-.371-1.414-1.832-1.697-2.225-.775-1.077-1.338-2.124-1.765-3.403a.5.5 0 0 0-.948 0c-.427 1.28-.99 2.326-1.765 3.403-.283.393-1.438 1.854-1.697 2.225C7.344 12 7 12.898 7 14a5 5 0 0 0 5 5z" />
                                        </svg>
                                    </span>
                                    <span className="menu-item-filter-category-content-text">Assigned to me</span>
                                </div>
                                <button type="button" className="menu-item-filter-category-btn">
                                    <svg width={15} height={3}>
                                        <path d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" fillRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div className="menu-item-filter-category">
                                <div className="menu-item-filter-category-move" draggable="true">
                                    <svg width={24} height={24}>
                                        <path d="M9.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" fillRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="menu-item-filter-category-content">
                                    <span className="menu-item-filter-category-content-icon" style={{color: 'rgb(128, 128, 128)'}}>
                                        <svg width={24} height={24} viewBox="0 0 24 24">
                                            <path fill="currentColor" fillRule="nonzero" d="M12 19a5 5 0 0 0 5-5c0-1.102-.345-2-1.064-3.03-.259-.371-1.414-1.832-1.697-2.225-.775-1.077-1.338-2.124-1.765-3.403a.5.5 0 0 0-.948 0c-.427 1.28-.99 2.326-1.765 3.403-.283.393-1.438 1.854-1.697 2.225C7.344 12 7 12.898 7 14a5 5 0 0 0 5 5z" />
                                        </svg>
                                    </span>
                                    <span className="menu-item-filter-category-content-text">Assigned to pthers</span>
                                </div>
                                <button type="button" className="menu-item-filter-category-btn">
                                    <svg width={15} height={3}>
                                        <path d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" fillRule="evenodd" />
                                    </svg>
                                </button>
                            </div> 
                            <div className="menu-item-filter-category">
                                <div className="menu-item-filter-category-move" draggable="true">
                                    <svg width={24} height={24}>
                                        <path d="M9.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" fillRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="menu-item-filter-category-content">
                                    <span className="menu-item-filter-category-content-icon" style={{color: 'rgb(128, 128, 128)'}}>
                                        <svg width={24} height={24} viewBox="0 0 24 24">
                                            <path fill="currentColor" fillRule="nonzero" d="M12 19a5 5 0 0 0 5-5c0-1.102-.345-2-1.064-3.03-.259-.371-1.414-1.832-1.697-2.225-.775-1.077-1.338-2.124-1.765-3.403a.5.5 0 0 0-.948 0c-.427 1.28-.99 2.326-1.765 3.403-.283.393-1.438 1.854-1.697 2.225C7.344 12 7 12.898 7 14a5 5 0 0 0 5 5z" />
                                        </svg>
                                    </span>
                                    <span className="menu-item-filter-category-content-text">Priority 1</span>
                                </div>
                                <button type="button" className="menu-item-filter-category-btn">
                                    <svg width={15} height={3}>
                                        <path d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" fillRule="evenodd" />
                                    </svg>
                                </button>
                            </div> 
                            <div className="menu-item-filter-category">
                                <div className="menu-item-filter-category-move" draggable="true">
                                    <svg width={24} height={24}>
                                        <path d="M9.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" fillRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="menu-item-filter-category-content">
                                    <span className="menu-item-filter-category-content-icon" style={{color: 'rgb(128, 128, 128)'}}>
                                        <svg width={24} height={24} viewBox="0 0 24 24">
                                            <path fill="currentColor" fillRule="nonzero" d="M12 19a5 5 0 0 0 5-5c0-1.102-.345-2-1.064-3.03-.259-.371-1.414-1.832-1.697-2.225-.775-1.077-1.338-2.124-1.765-3.403a.5.5 0 0 0-.948 0c-.427 1.28-.99 2.326-1.765 3.403-.283.393-1.438 1.854-1.697 2.225C7.344 12 7 12.898 7 14a5 5 0 0 0 5 5z" />
                                        </svg>
                                    </span>
                                    <span className="menu-item-filter-category-content-text">Priority 1</span>
                                </div>
                                <button type="button" className="menu-item-filter-category-btn">
                                    <svg width={15} height={3}>
                                        <path d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" fillRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div className="menu-item-filter-category">
                                <div className="menu-item-filter-category-move" draggable="true">
                                    <svg width={24} height={24}>
                                        <path d="M9.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" fillRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="menu-item-filter-category-content">
                                    <span className="menu-item-filter-category-content-icon" style={{color: 'rgb(128, 128, 128)'}}>
                                        <svg width={24} height={24} viewBox="0 0 24 24">
                                            <path fill="currentColor" fillRule="nonzero" d="M12 19a5 5 0 0 0 5-5c0-1.102-.345-2-1.064-3.03-.259-.371-1.414-1.832-1.697-2.225-.775-1.077-1.338-2.124-1.765-3.403a.5.5 0 0 0-.948 0c-.427 1.28-.99 2.326-1.765 3.403-.283.393-1.438 1.854-1.697 2.225C7.344 12 7 12.898 7 14a5 5 0 0 0 5 5z" />
                                        </svg>
                                    </span>
                                    <span className="menu-item-filter-category-content-text">Priority 1</span>
                                </div>
                                <button type="button" className="menu-item-filter-category-btn">
                                    <svg width={15} height={3}>
                                        <path d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" fillRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div className="menu-item-filter-category">
                                <div className="menu-item-filter-category-move" draggable="true">
                                    <svg width={24} height={24}>
                                        <path d="M9.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" fillRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="menu-item-filter-category-content">
                                    <span className="menu-item-filter-category-content-icon" style={{color: 'rgb(128, 128, 128)'}}>
                                        <svg width={24} height={24} viewBox="0 0 24 24">
                                            <path fill="currentColor" fillRule="nonzero" d="M12 19a5 5 0 0 0 5-5c0-1.102-.345-2-1.064-3.03-.259-.371-1.414-1.832-1.697-2.225-.775-1.077-1.338-2.124-1.765-3.403a.5.5 0 0 0-.948 0c-.427 1.28-.99 2.326-1.765 3.403-.283.393-1.438 1.854-1.697 2.225C7.344 12 7 12.898 7 14a5 5 0 0 0 5 5z" />
                                        </svg>
                                    </span>
                                    <span className="menu-item-filter-category-content-text">Priority 1</span>
                                </div>
                                <button type="button" className="menu-item-filter-category-btn">
                                    <svg width={15} height={3}>
                                        <path d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" fillRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div className="menu-item-filter-category">
                                <div className="menu-item-filter-category-move" draggable="true">
                                    <svg width={24} height={24}>
                                        <path d="M9.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5-5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" fillRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="menu-item-filter-category-content">
                                    <span className="menu-item-filter-category-content-icon" style={{color: 'rgb(128, 128, 128)'}}>
                                        <svg width={24} height={24} viewBox="0 0 24 24">
                                            <path fill="currentColor" fillRule="nonzero" d="M12 19a5 5 0 0 0 5-5c0-1.102-.345-2-1.064-3.03-.259-.371-1.414-1.832-1.697-2.225-.775-1.077-1.338-2.124-1.765-3.403a.5.5 0 0 0-.948 0c-.427 1.28-.99 2.326-1.765 3.403-.283.393-1.438 1.854-1.697 2.225C7.344 12 7 12.898 7 14a5 5 0 0 0 5 5z" />
                                        </svg>
                                    </span>
                                    <span className="menu-item-filter-category-content-text">Priority 1</span>
                                </div>
                                <button type="button" className="menu-item-filter-category-btn">
                                    <svg width={15} height={3}>
                                        <path d="M1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="currentColor" fillRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                    
                        </div>
                    </li>
                </ul>
                
            </div>
        </DefaultSidebarStyled>
    );
}

export default DefaultSidebar;
