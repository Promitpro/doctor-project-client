import React from 'react';

const AppointmentOptions = ({ appointmentOption, setTreatment }) => {
    const {name, slots, price} = appointmentOption;
    return (
        <div className="card w-96 bg-base-100 shadow-xl border border-white">
            <div className="card-body">
                <h2 className="text-2xl font-semibold text-center text-primary">{name}</h2>
                <p className='text-center'>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} vailable</p>
                <p className='text-center'> Price: ${price}</p>
                <div className="card-actions justify-center">
                    
                    <label onClick={() => setTreatment(appointmentOption)} htmlFor="booking-modal" className="btn btn-primary uppercase font-semibold text-white" disabled={slots.length === 0}>Book Appointments</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;