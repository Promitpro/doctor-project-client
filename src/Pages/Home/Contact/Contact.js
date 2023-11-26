import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div className='text-center mt-20 py-20 rounded' style={{backgroundImage: `url(${appointment})`}}>
            <h4 className='font-bold text-primary'>Contact Us</h4>
            <h2 className='text-3xl'>Stay connected with us</h2><br />
            <input type="text" placeholder="Email Address" className="input input-bordered input-primary w-full max-w-xs" /><br /><br />
            <input type="text" placeholder="Subject" className="input input-bordered input-primary w-full max-w-xs" /><br /><br />
            <textarea className="textarea textarea-secondary resize-none" cols='42' placeholder="Your message"></textarea><br /><br />
            <button className='btn btn-primary'>Submit</button>
        </div>
    );
};

export default Contact;