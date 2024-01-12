import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img src="https://i.postimg.cc/rs6cs7pK/Error-Page.gif" alt="Error Icon" />
            <Link to='/'><button className=" border border-[#11B0F3] py-1 px-5 ">Back To Home</button></Link>
        </div>
    );
};

export default Error;