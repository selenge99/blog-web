import Label from "../label";

const Trending = ({ badge, image, title }) => {
  return (
    <div className="w-[392px] h-[320px] mt-8 ">
      <div
        style={{
          background: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-full rounded-xl flex flex-col justify-end p-4 gap-4"
      >
        <div>
          <Label text={badge} />
        </div>

        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Trending;
