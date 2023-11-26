import React from 'react';

const Reviews = ({ review }) => {
    const { img, review: userReview, location, name } = review
    return (
        <div className="card w-96 bg-base-100 shadow-xl border border-white">
            <div className="card-body">

                <p>{userReview}</p>
                <div className='flex  mt-4'>
                    <div className='mr-4'>
                        
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt=''/>
                            </div>
                        </div>

                    </div>
                    <div>
                        <h3 className='font-semibold text-primary'>{name}</h3>
                        <h5>{location}</h5>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Reviews;