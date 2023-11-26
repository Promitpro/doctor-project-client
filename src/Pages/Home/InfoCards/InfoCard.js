import React from 'react';

const InfoCard = ({infocard}) => {
    const {icon, info, details, bgClass} = infocard;
    return (
        <div className={`card card-side px-6 bg-base-100 shadow-xl border border-zinc-100 ${bgClass}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{info}</h2>
                <p>{details}</p>
                
            </div>
        </div>
    );
};

export default InfoCard;