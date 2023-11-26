import React from 'react';
import quotes from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Reviews from './Reviews';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            img: people1,
            name: 'Iron Man',
            review: 'My childs health just become like iron just like my suit. Love this treatment. I will come with my daughter next time as she has cavity issues',
            location: 'Washington'
        },
        {
            id: 2,
            img: people2,
            name: 'Black Widow',
            review: 'My childs health just become like iron just like my suit. Love this treatment. I will come with my daughter next time as she has cavity issues',
            location: 'Los Angles'
        },
        {
            id: 3,
            img: people3,
            name: 'Captain America',
            review: 'My childs health just become like iron just like my suit. Love this treatment. I will come with my daughter next time as she has cavity issues',
            location: 'Newyork'
        },
    ]
    return (
        <section className='mt-20'>
            <div className='flex justify-between mb-24'>
                <div>
                    <h4 className='font-bold text-primary text-lg'>Testimonial</h4>
                    <h2 className='text-3xl '>What out Patient Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quotes} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
                {
                    reviews.map(review => <Reviews key={review.id} review={review}></Reviews>)
                }

            </div>
        </section>
    );
};

export default Testimonials;