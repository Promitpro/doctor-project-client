import React from 'react';

const Service = ({ serviceInfo }) => {
    const { img, serviceName, details } = serviceInfo;
    return (
        <div className="card bg-base-100 shadow-xl border border-gray-100">
            {/* <figure><img src={img} alt="Shoes" /></figure> */}
            <div className="card-body">
                <h2 className="text-center font-semibold text-2xl">{serviceName}</h2>
                <p>{details}</p>
                
            </div>
        </div>
    );
};

export default Service;