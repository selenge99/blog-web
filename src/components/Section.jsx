import { useEffect, useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

const Section = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getArticleData = async () => {
    const res = await fetch("https://dev.to/api/articles?page=2&per_page=4");
    const data = await res.json();
    setArticles(data);
  };
  useEffect(() => {
    getArticleData();
  }, []);

  const handlePrev = () => {};

  return (
    <div className="max-w-[1920px] m-auto justify-between p-5 items-center">
      <div className="overflow-hidden">
        <div
          className="flex transition-all duration-150 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {articles.map((article, i) => (
            <img className={`min-w-full`} src={article?.cover_image} alt="" />
            // ${i === currentIndex ? "block" : "hidden"}
          ))}
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <button className="border-[1px] border-[#696A75] w-[40px] h-[40px] rounded-md">
          <MdOutlineArrowBackIos
            size={20}
            className="m-auto"
            onClick={handlePrev}
          />
        </button>
        <button
          className="border-[1px] border-[#696A75] w-[40px] h-[40px] rounded-md"
          onClick={() => {
            setCurrentIndex(currentIndex + 1);
          }}
        >
          <MdOutlineArrowForwardIos size={20} className="m-auto" />
        </button>
      </div>
    </div>
  );
};

export default Section;
