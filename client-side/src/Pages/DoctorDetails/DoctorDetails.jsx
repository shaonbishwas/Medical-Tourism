// import PropTypes from 'prop-types';

const DoctorDetails = () => {
  const {name} = {
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
  return <div>
    <div>
        <img src="" alt="" />
        <h1>{name}</h1>
    </div>
    <div>
        <div>
            <img src="" alt="" />
            
        </div>
        <div></div>
    </div>
  </div>;
};

// DoctorDetails.propTypes = {

// };

export default DoctorDetails;
