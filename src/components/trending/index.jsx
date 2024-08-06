import { trendings } from "./trenddata";

const { default: Trending } = require("./trending");

const Trendings = () => {
  return (
    <div>
      <h1 className="text-[#181A2A] text-2xl font-bold">Trending</h1>
      <div className="flex gap-5">
        {trendings.map((trend) => {
          return (
            <Trending
              badge={trend.badge}
              image={trend.image}
              title={trend.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Trendings;
