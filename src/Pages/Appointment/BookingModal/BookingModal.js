import { format } from 'date-fns';
import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name, slots, price } = treatment;    //appointment treatment is here as treatment
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            appointmentDate: date,
            treatment: treatment.name,
            patient: name,
            slot,
            phone,
            email,
            price
        }

        fetch('https://doctors-portal-server-nine-eta.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('booking confirmed')
                    refetch();
                }
                else{
                    toast.error(data.message);
                    setTreatment(null);
                }


            })


    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold pb-4">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input type="text" value={date} className="input input-bordered text-white font-semibold w-full bg-slate-400 " disabled />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }

                            
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled className="input input-bordered w-full" required />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" required />
                        <input name='email' type="text" defaultValue={user?.email} disabled className="input input-bordered w-full " required />
                        <input type="submit" value="SUBMIT" className="btn btn-accent w-full " />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;