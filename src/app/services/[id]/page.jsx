import React from 'react';
import { Sevs } from '@/lib/services';
const ServicesDetails = ({params}) => {
    const service = Sevs.find((servi)=> servi._id === params.id);
    console.log(service, "services Data");
    return (
        <div className='my-10'>
        
            <h3 className='text-2xl font-bold text-emerald-300'>service title : {service.title}</h3>
            <p className='text-gray-200'>description : {service.description}</p>
        </div>
    );
};

export default ServicesDetails;