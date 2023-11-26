import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrivateButton from '../../../PrivateButton/PrivateButton';


const MakeAppointment = () => {
    return (
        <section className='mt-32 rounded' style={{backgroundImage: `url(${appointment})`}}>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="w-1/3 -mt-24 mt hidden lg:block rounded-lg scale-125" />
                    <div className='w-1/2'>
                        <h5 className='font-bold text-lg text-primary'>Appointment</h5>
                        <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">Use a day planner or digital calendar. These help you plan and organize your day. Appointments should be written in your planner as you make them. One of the advantages of a digital calendar, such as Google Calendar, is that you have access on any device and can quickly refer to in when making new appointments.The first task every morning should be looking at your calendar so that you can picture and plan your day.</p>
                        
                        <PrivateButton></PrivateButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;