import { useEffect, useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

const Section = () => {
  const [articles, setArticles] = useState([]);
  const [index, setIndex] = useState(0);
  const getArticleData = async () => {
    const res = await fetch("https://dev.to/api/articles?page=1&per_page=6");
    const data = await res.json();
    setArticles(data);
  };
  useEffect(() => {
    getArticleData();
  }, []);
  const handlePrev = () => {
    if (index <= 0) {
      setIndex(0);
    } else index - 1;
  };
  return (
    <div className="max-w-[1920px] m-auto justify-between p-5 items-center">
      <img src={articles[index]?.cover_image} alt="" />
      <div className="flex gap-2 mt-3">
        <button className="border-[1px] border-[#696A75] w-[40px] h-[40px] rounded-md">
          <MdOutlineArrowBackIos
            size={20}
            className="m-auto"
            onClick={handlePrev}
          />
        </button>
        <button className="border-[1px] border-[#696A75] w-[40px] h-[40px] rounded-md">
          <MdOutlineArrowForwardIos
            size={20}
            className="m-auto"
            onClick={() => {
              setIndex(index + 1);
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Section;
