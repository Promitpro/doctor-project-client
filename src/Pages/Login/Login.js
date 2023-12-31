import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext);
    const [loginError, serLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, {replace: true})
    }

    const handleLogin = data => {
        console.log(data);
        serLoginError('');
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email)
            
        })
        .catch(error => {
            console.error(error.message);
            serLoginError(error.message);
        })

    }
    

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-8'>
                <h2 className='text-2xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

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
                                    minLength: {value: 6, message: 'Password must be atleast 6 characters longer'}
                                }

                            )}
                            placeholder="" />
                        {errors.password && <p className='text-red-600 font-semibold pt-3' >{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forgot password</span></label>
                    </div>


                    <input className='btn btn-accent w-full mt-3' type="submit" value="submit" />
                    {loginError && <p className='text-red-600'>{loginError}</p>}
                </form>
                <p className=' text-sm text-center pt-2'>New to doctor's portal? <Link to='/signup' className='text-secondary'>Create a new account</Link></p>
                <div className="divider font-semibold">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;