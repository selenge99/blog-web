import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
const Footer = () => {
  return (

   
    <div>
       <div className="flex justify-between bg-[#F6F6F7] py-16 px-80 gap-64 border-t border-[#E8E8EA]">
      <div>
        <h1 className="text-lg text-[#181A2A] font-semibold Work Sans">About</h1>
        <p className="text-[#696A75] text-base text-wrap w-64 mt-3">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut
          enim ad minim veniam
        </p>
        <p className="mt-6">Email : info@jstemplate.net</p>
        <p>Phone : 880 123 456 789</p>
      </div>

      <div>
        <ul className="text-base text-[#3B3C4A]">
          <li>Home</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex gap-5">
        <FaFacebook size={16} color="#6D6E76"/>
        <FaTwitter size={16} color="#6D6E76" />
        <FaInstagram size={16} color="#6D6E76" />
        <IoLogoLinkedin size={16} color="#6D6E76" />
      </div>
     
    </div>
    <div className=" flex gap-2.5 border-t border-[#E8E8EA] py-5 px-8 bg-[#F6F6F7] ">
      <div>
        <img src="./images/Logo1.png" alt=""/>
        </div>
      <div>
        <h1>MetaBlog</h1>
        <p className="text-[#3B3C4A] text-base">© All Rights Reserved.</p>
      </div>
        
        <ul className="flex gap-4  text-[#3B3C4A] text-base items-center ml-[600px]">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
        </div>
    </div>
  );
};

export default Footer;
