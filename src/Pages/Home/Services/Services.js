import React from 'react';
import flouride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import antibiotic from '../../../assets/images/antibiotic.jpeg'
import Service from './Service';

const Services = () => {
    const serviceInfos = [
        {
            _id: 1,
            // img: flouride,
            serviceName: 'Immunizations',
            details: 'Immunizations are essential for preventing various childhood diseases, such as measles, mumps, rubella, and more.'
        },
        {
            _id: 1,
            // img: antibiotic,
            serviceName: 'Antibiotics',
            details: "Used to treat bacterial infections such as strep throat or certain types of pneumonia."
        },
        {
            _id: 1,
            // img: whitening,
            serviceName: 'Physical Therapy',
            details: 'Rehabilitation and exercises to improve motor skills, strength, and coordination.'
        },
    ]
    return (
        <section className='mt-24'>
            <div className='text-center mb-16'>
                <h5 className='text-primary font-bold text-normal uppercase'>our services</h5>
                <h2 className='text-4xl font-semibold'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center  gap-16'>
                {
                    serviceInfos.map(serviceInfo => <Service key={serviceInfo._id} serviceInfo={serviceInfo}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;