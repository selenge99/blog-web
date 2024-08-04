import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
const Section = () => {
  return (
    <div className="max-w-[1920px] m-auto justify-between p-5 items-center">
      <img src="./images/main.png" alt="" />
      <div className="m-auto">
      <button className="border rounded-md border-gray-500">
        <MdOutlineArrowBackIos />
        </button>
      <button className="border rounded-md border-gray-500">
        <MdOutlineArrowForwardIos />
        </button>
      </div>
      
      
    </div>
  );
};

export default Section;
