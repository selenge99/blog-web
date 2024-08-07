import { trendings } from "./trenddata";
import { useEffect, useState } from "react";

const { default: Trending } = require("./trending");

const Trendings = () => {
  const [articles, setArticles] = useState([]);
  const getArticleData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles?page=4&per_page=4"
    );
    const data = await response.json();
    setArticles(data);
    // console.log("data", data)
  };

  useEffect(() => {
    getArticleData();
  }, []);

  return (
    <div>
      <h1 className="text-[#181A2A] text-2xl font-bold">Trending</h1>
      <div className="flex gap-5">
        {articles.map((trend) => {
          return (
            <Trending
              badge={trend.tags}
              image={trend.cover_image}
              title={trend.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Trendings;
