import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="flex max-w-[1920px] m-auto justify-between p-5 items-center">
      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit, sed do <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
          Ut <br />
          enim ad minim veniam
        </p>
        <p>Email : info@jstemplate.net</p>
        <p>Phone : 880 123 456 789</p>
      </div>

      <div>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <IoLogoLinkedin />
      </div>
    </div>
  );
};

export default Footer;
