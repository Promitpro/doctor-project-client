import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading/Loading';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate();

    
    const {data: specialities, isLoading} = useQuery({
        queryKey: ['speciality'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-nine-eta.vercel.app/appointmentSpeciality');
            const data = await res.json();
            return data;
        }
    })
    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            
            if(imgData.success){
                console.log(imgData.data.url);
                const doctor = {
                    name: data.name,
                    email: data.email,
                    speciality: data.speciality,
                    image: imgData.data.url
                }

                fetch('https://doctors-portal-server-nine-eta.vercel.app/doctors', {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    toast.success(`${data.name} is added successfully as a doctor`)
                    navigate('/dashboard/managedoctors');
                })
            }
        })
    }
    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <div className='w-96 p-7'>
            <h1 className='text-4xl'>Add a doctor</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

                <div className="form-control w-full max-w-xs pb-3 pt-3">
                    <label className="label"><span className="label-text">Full Name</span></label>
                    <input type="text" className="input input-bordered w-full max-w-xs"
                        {...register("name", { required: 'Name is required' })}
                        placeholder="" />
                    {errors.name && <p className='text-red-600 font-semibold pt-3' >{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs pb-3">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="email" className="input input-bordered w-full max-w-xs"
                        {...register("email", { required: 'Email Address is required' })}
                        placeholder="" />
                    {errors.email && <p className='text-red-600 font-semibold pt-3' >{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs pb-3">
                    <label className="label"><span className="label-text">Speciality</span></label>
                    <select
                    {...register("speciality")}
                     className="select select-bordered w-full max-w-xs">
                        {
                            specialities.map(speciality => <option key={speciality._id} value={speciality.name}>{speciality.name}</option>)
                        }
                        
                        
                    </select>

                </div>
                <div className="form-control w-full max-w-xs pb-3 pt-3">
                    <label className="label"><span className="label-text">Your photo</span></label>
                    <input type="file" className="input input-bordered w-full max-w-xs"
                        {...register("image", { required: 'Photo is required' })}
                        placeholder="" />
                    {errors.image && <p className='text-red-600 font-semibold pt-3' >{errors.image?.message}</p>}
                </div>


                <input className='btn btn-accent w-full mt-3' type="submit" value="Add Doctor" />

            </form>
        </div>
    );
};

export default AddDoctor;