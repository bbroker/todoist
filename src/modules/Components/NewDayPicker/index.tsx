import React,{useState} from 'react';
import {NewDayPickerStyled} from './styled';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const NewDayPicker = () => {

    const [dayPicker, setDayPicker] = useState({
        selectedDay: new Date()
    });

    const handleDayClick = (day) => {
        setDayPicker({
            selectedDay: day
        });
        
    };

    return (
        <NewDayPickerStyled>
            <DayPicker 
                onDayClick={handleDayClick}
                selectedDays={dayPicker.selectedDay}
                disabledDays={[{before: new Date()}]}
            />
        </NewDayPickerStyled>
    );
};

export default NewDayPicker;