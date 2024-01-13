// import PropTypes from 'prop-types';
import bg from '../../assets/detailsbg.jpg'
const DoctorDetails = () => {
  const { name,image,about_me,degrees,working_days,specialty,contact } = {
    id: 1,
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxUJ_kOh-4mPOy2oYS6a7fe6gNfuF17uM61Q&usqp=CAU",
    hospital: "City Medical Center",
    location: "City, Country",
    experience_years: 15,
    degrees: [
      "Doctor of Medicine (MD)",
      "Cardiology Residency",
      "Fellowship in Interventional Cardiology",
    ],
    working_days: ["Monday", "Wednesday", "Friday"],
    contact: {
      email: "john.smith@example.com",
      phone: "+1234567890",
    },
    about_me:
      "Dr. John Smith is a highly skilled cardiologist with 15 years of experience in treating cardiovascular diseases. He is dedicated to providing compassionate and personalized care to his patients. Dr. Smith has a strong academic background and stays updated with the latest advancements in cardiology to offer the best possible treatment options.",
  };
  return (
    <div className="mt-16 max-w-[1200px] mx-auto">
      <div className='relative flex items-center'>
        <img src={bg} alt=""  />
        <div className='bg-[#11B0F3] absolute w-full top-0  h-full opacity-80'></div>
        <h1 className="absolute text-6xl font-bold text-center w-full text-white ">{name}</h1>
      </div>
      <div className='flex p-2 gap-10 my-16'>
        <div className='w-[30%]'>
          <img src={image} alt="" className='mx-auto' />
          <div className='text-center'>
            <h1 className='text-xl font-bold'>{name}</h1>
            <h3>{specialty}</h3>
            <hr className='border border-gray-400 my-1'/>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
            <hr className='border border-gray-400 my-1'/>
            <button className='bg-[#11B0F3] py-1 px-4 rounded-2xl text-white my-2'>Book Appointment</button>
          </div>
        </div>
        <div className='w-[70%]'>
            <p>{about_me}</p>
            <h1 className='text-3xl font-bold mt-5 mb-3'>Speciality</h1>
            <div>
              {degrees.map((deg, idx)=><li key={idx}>{deg}</li>)}
            </div>
            <h1 className='text-3xl font-bold mt-5 mb-3'>Work Days</h1>
            <div className='flex gap-6'> 
              {working_days.map((day, idx)=><span key={idx}>{day}</span>)}
            </div>
        </div>
      </div>
    </div>
  );
};

// DoctorDetails.propTypes = {

// };

export default DoctorDetails;
