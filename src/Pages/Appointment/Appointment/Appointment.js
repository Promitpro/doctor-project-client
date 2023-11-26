import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppoiments from '../AvailableAppoiments/AvailableAppoiments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointmentBanner>
            <AvailableAppoiments selectedDate={selectedDate}></AvailableAppoiments>
        </div>
    );
};

export default Appointment;