import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    const {createUser, updateUser} = useContext(AuthContext);

    if(token){
        navigate('/')
    }
    const handleSignUp = data => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast('user creaeted successfully');
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=> {
                saveUser(data.name, data.email);
                
            })
            .catch(err => console.log(err))
        })
        .catch(error => {
            console.log(error.message);
            setSignUpError(error.message)
        })
    }
    const saveUser = (name, email) => {
        const user = {name, email};
        fetch('https://doctors-portal-server-nine-eta.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCreatedUserEmail(email);
            
        })
    }
    
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-8'>
                <h2 className='text-2xl text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Full Name</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs"
                            {...register("name", { required: 'Name is required' })}
                            placeholder="" />
                        {errors.name && <p className='text-red-600 font-semibold pt-3' >{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email" className="input input-bordered w-full max-w-xs"
                            {...register("email", { required: 'Email Address is required' })}
                            placeholder="" />
                        {errors.email && <p className='text-red-600 font-semibold pt-3' >{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs"
                            {...register("password",
                                {
                                    required: 'Password is required',
                                    minLength: {value: 6, message: 'Password must be atleast 6 characters longer'},
                                    pattern: {value: /^(?=(.*[a-z]){1})(?=(.*[A-Z]){1})(?=(.*[0-9]){1})(?=(.*[!@#$%^&*()\-__+.]){1}).{8}$/, message: "Password must be strong"}
                                }
                                

                            )}
                            placeholder="" />
                        {errors.password && <p className='text-red-600 font-semibold pt-3' >{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forgot password</span></label>
                    </div>


                    <input className='btn btn-accent w-full mt-3' type="submit" value="submit" />
                    {signUpError && <p>{signUpError}</p>}
                </form>
                <p className=' text-sm text-center pt-2'>Already have an account? <Link to='/login' className='text-secondary'>Login</Link></p>
                <div className="divider font-semibold">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;