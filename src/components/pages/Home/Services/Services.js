import React from 'react';
import {
    useQuery,
  } from '@tanstack/react-query'
import Service from './Service/Service';

const Services = () => {
    const {data:services=[]}=useQuery({
        queryKey:['services'],
        queryFn:async()=>{
            const res=await fetch('http://localhost:5000/services')
            const data=await res.json()
            return data
        }
    })
    return (
        <div className='w-11/12 mx-auto'>
            <p>Services</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service=><Service key={service._id} service={service}/>)
                }
            </div>
            
        </div>
    );
};

export default Services;