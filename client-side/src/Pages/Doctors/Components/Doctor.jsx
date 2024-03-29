import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
    const {name, image, specialty, hospital} =doctor;
    return (
        <div className='mx-auto shadow-md duration-300 hover:scale-110 hover:shadow-2xl p-3 rounded-3xl'>
            <img src={image} alt="" className='rounded-t-2xl'/>
            <div className='text-center'>
                <h1 className='font-bold text-xl'>{name}</h1>
                <h3>{specialty}</h3>
                <p>{hospital}</p>
                <Link to='/doctordetails'><button className='text-[#11B0F3]'>Details..</button></Link>
            </div>
        </div>
    );
};
Doctor.propTypes = {
    doctor: PropTypes.object
  };
export default Doctor;