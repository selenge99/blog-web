import Link from "next/link";
import Label from "../label";

const BlogPost = ({ image, badge, title, date }) => {
  return (
    <div className="border rounded-xl w-[392px] p-4 flex flex-col gap-6">
      <div className="w-full h-60 rounded-xl bg-violet-300 ">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <div className="text-sm font-medium bg-#4B6BFB0D">
        {/* <Label text={badge} /> */}
        {badge.map((tag) => (
          <Label text={tag} />
        ))}
      </div>

      <h1 className="text-[#181A2A] text-2xl font-semibold">{title}</h1>
      <p className="text-[#97989F] font-normal text-base">{date}</p>
    </div>
  );
};

export default BlogPost;
