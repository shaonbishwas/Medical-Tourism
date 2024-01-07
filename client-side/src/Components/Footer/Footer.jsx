import { Link } from "react-router-dom";

const Footer = () => {
    const links = <>
    <Link>Home</Link>
    <Link>About Us</Link>
    <Link>Contact Us</Link>
    <Link>Apply Visa</Link>
    </>
  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <div>
          <h1>Medical Tourism</h1>
          <p>Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop.</p>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
            <ul>
                {links}
            </ul>
            <p>© 2024 Medical Tourism. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
