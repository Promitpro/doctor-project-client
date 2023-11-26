import React, { useState } from 'react';
import banner from '../../../assets/images/banners2.jpg'
import bg from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    

    return (
        <header className='my-6' style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} alt='' className="max-w-sm rounded-lg  w-full shadow-2xl lg:w-1/2" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected = {selectedDate}
                            onSelect = {setSelectedDate} 
                        />
                        
                    </div>
                    
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;