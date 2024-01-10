import { useEffect, useState } from 'react';
import banner from '../../assets/doctorListBanner.jpg'
import axios from 'axios';
import Doctor from './Components/Doctor';
const Doctors = () => {
    const [doctors, setDoctors]=useState([])
    useEffect(()=>{
        axios.get('doctors.json').then((res)=>{
            setDoctors(res.data)
        })
    },[])
    console.log(doctors)
  return (
    <div className="max-w-[1200px] mx-auto ">
      <div className='relative mt-16'>
        <img src={banner} alt="" className='w-full' />
        <h1 className='absolute right-4 top-[50%] text-6xl font-bold'>Meet the Doctors</h1>
      </div>
      <div className='grid grid-cols-4 my-20 gap-10'>
        {doctors.map((doctor)=><Doctor key={doctor.id} doctor={doctor}></Doctor>)}
      </div>
    </div>
  );
};

export default Doctors;
