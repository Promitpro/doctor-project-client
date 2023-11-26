import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const infocards = [
        {
            id: 1,
            icon: clock,
            info: 'Opening Hours',
            details: 'Opening from 9am to 5pm',
            bgClass: 'bg-gradient-to-r from-primary to-secondary',
        },
        {
            id: 2,
            icon: marker,
            info: 'Visit our Location',
            details: 'Arkedia 3rd floor, Amborkhana',
            bgClass: 'bg-accent',
        },
        {
            id: 3,
            icon: phone,
            info: 'Contact us now',
            details: '01611-456425',
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-white '>
            {
                infocards.map(infocard => <InfoCard key={infocard.id} infocard={infocard}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;