import React,{useState,FunctionComponent} from 'react';
import {PriorityBoxStyled} from './styled';

export interface propsPriorityBox {
    color?: string;
    orderNumber?:number;
    onGetPriorityColor?: (string,number) => any;
}

const PriorityBox:FunctionComponent<propsPriorityBox> = (props) => {

    const [priorityColor, setPriorityColor] = useState(props.color);
    const items = [
        {
            color:'#D1453B',
            orderNumber: 1
        }, 
        {
            color:'#EB8909', 
            orderNumber: 2
        }, 
        {
            color:'#246FE0', 
            orderNumber: 3
        }, 
        {
            color:'GREY',
            orderNumber: 4
        }
    ];

    const onHandleClick = (color:string,orderNumber:number ) => {
        setPriorityColor(color);
        typeof props.onGetPriorityColor === 'function' && props.onGetPriorityColor(color,orderNumber);
    };

    const elements = () => {
        return (
            items.map((item,index) => 
                <div className="priority-box-item" key ={index} onClick={() => onHandleClick(item.color,item.orderNumber)} >
                    <div>
                        <svg data-svgs-path="sm1/priority_4.svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill={item.color} fillRule="nonzero" d="M5 13.777V19.5a.5.5 0 1 1-1 0V5a.5.5 0 0 1 .223-.416C5.313 3.857 6.742 3.5 8.5 3.5c1.113 0 1.92.196 3.658.776C13.796 4.82 14.53 5 15.5 5c1.575 0 2.813-.31 3.723-.916A.5.5 0 0 1 20 4.5V13a.5.5 0 0 1-.223.416c-1.09.727-2.519 1.084-4.277 1.084-1.113 0-1.92-.196-3.658-.776C10.204 13.18 9.47 13 8.5 13c-1.45 0-2.614.262-3.5.777z" />
                        </svg>
                    </div>
                
                    <span className="priority-box-item-text">Priority {item.orderNumber}</span>
                    {
                        item.color === priorityColor  && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" className="dropdown_select_checkmark">
                                <path fill="currentColor" fillRule="evenodd" d="M4.902 6.975l4.182-4.244a.74.74 0 0 1 1.06 0 .775.775 0 0 1 0 1.081L5.432 8.597a.74.74 0 0 1-1.06 0L1.78 5.975a.775.775 0 0 1 0-1.081.74.74 0 0 1 1.061 0l2.06 2.081z" />
                            </svg>
                        )
                    }
                </div>
            )
        );
    };

    return (
        <PriorityBoxStyled>
            <div className="priority-box">
                {elements()}
                
            </div>
        </PriorityBoxStyled>
    );
};

PriorityBox.defaultProps = {
};

export default PriorityBox;