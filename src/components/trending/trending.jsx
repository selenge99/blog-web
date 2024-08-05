const Trending = ({ badge, image, title }) => {
  return (
    <div className="w-[392px] h-[320px] mt-8 ">
      <div
        style={{ background: `url(${image})` }}
        className="w-full h-full rounded-xl"
      >
        <p className="bg-[#4B6BFB] px-[10px] py-1 rounded-md w-[86px] h-[28px]">
          {badge}
        </p>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Trending;
