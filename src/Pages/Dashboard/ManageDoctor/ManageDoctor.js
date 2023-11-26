import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading/Loading';
import ConfirmationModal from '../../shared/ConfirmationModal/ConfirmationModal';
import { toast } from 'react-hot-toast';

const ManageDoctor = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const closeModal = () => {
        setDeletingDoctor(null);
    }
    

    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctors-portal-server-nine-eta.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });
    const handleDeleteDoctor = doctor => {
        fetch(`https://doctors-portal-server-nine-eta.vercel.app/doctors/${doctor._id}`,{
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0)
            {
                refetch();
                toast.success(`Doctor ${doctor.name} deleted successfully`);
            }
            
        })
    }
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-4xl'>Manage Doctors</h1>
            
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Speciality</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={doctor.image} alt=''/>
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.speciality}</td>
                                <td><label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label></td>
                                
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal 
                title={`Are you sure you want to delete?`} 
                message={`If you delete doctor ${deletingDoctor.name}. It cannot be undone.`} 
                closeModal={closeModal}
                modalData = {deletingDoctor}
                successAction={handleDeleteDoctor}
                successButtonName='Delete'
                ></ConfirmationModal>
            }
        </div>

    );
};

export default ManageDoctor;