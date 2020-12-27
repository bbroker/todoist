import React from 'react';
import {OverdueBoxStyled} from './styled';

const OverdueBox = () => {
    return (
        <OverdueBoxStyled>
            <div className="app-content-overdue-bar">
                    Overdue
                <div className="app-content-overdue-link">Reschedule</div>
            </div>
        </OverdueBoxStyled>
    );
};

export default OverdueBox;