import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
const Section = () => {
  return (
    <div className="max-w-[1920px] m-auto justify-between p-5 items-center">
      <img src="./images/main.png" alt="" />
      <div className="flex gap-2 mt-3">
        <button className="border-[1px] border-[#696A75] w-[40px] h-[40px] rounded-md">
          <MdOutlineArrowBackIos size={20} className="m-auto" />
        </button>
        <button className="border-[1px] border-[#696A75] w-[40px] h-[40px] rounded-md">
          <MdOutlineArrowForwardIos size={20} className="m-auto" />
        </button>
      </div>
    </div>
  );
};

export default Section;
