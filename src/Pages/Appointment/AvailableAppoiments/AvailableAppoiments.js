import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';
import BookingModal from '../BookingModal/BookingModal';
import Loading from '../../shared/Loading/Loading';

const AvailableAppoiments = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP')

    const {data: appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-nine-eta.vercel.app/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data;
        }
    })
    if(isLoading)
    {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('https://doctors-portal-server-nine-eta.vercel.app/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])
    return (
        <section className='mt-12'>
            <h3 className='text-center font-bold text-primary'>Available appointments on {format(selectedDate, 'PP')}</h3>
            <div className='grid gap-4 ml-12 lg:ml-10 mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center'>
                {
                    appointmentOptions.map(appointmentOption => <AppointmentOptions
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                    ></AppointmentOptions>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>}
        </section>
    );
};

export default AvailableAppoiments;