import React from 'react';
import PrivateButton from '../../../PrivateButton/PrivateButton';
import img from '../../../assets/images/treatment.png'

const MoreCare = () => {
    return (
        <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row mt-40  mx-24">
            <img src={img} alt="" className=' rounded w-full lg:w-1/4 ' />
            <div className="card-body">
                <h2 className="card-title text-4xl">Exceptional Care on Your Terms</h2>
                <p>If you have cracked or missing health issues we know that this can impact your confidence, can limit the foods you’re able to eat and cause discomfort & pain. Health implants are the ideal solution to restore your smile. At our care centre based in the Perth Hills, we use the latest implantation techniques to provide high quality implants. We have a friendly and dedicated team that will take good care of you to ensure you are thrilled with your new smile. </p>
                <div className=" justify-start ">
                    <PrivateButton></PrivateButton>
                </div>
            </div>
        </div>
    );
};

export default MoreCare;