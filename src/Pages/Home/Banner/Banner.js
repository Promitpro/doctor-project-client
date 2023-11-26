import React from 'react';
// import chair from '../../../assets/images/chair.png';
import banner from '../../../assets/images/banners2.jpg';
// import bg from '../../../assets/images/bg.png'
import bg from '../../../assets/images/backbg.png'

const Banner = () => {
    return (
        <section className='mb-12'>
            <div className="hero rounded" style={{backgroundImage:`url(${bg})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse pb-32">
                    <img src={banner} alt='' className="w-full lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className=''>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;