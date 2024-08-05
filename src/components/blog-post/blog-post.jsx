const BlogPost = ({ image, badge, title, date }) => {
  return (
    <div className="border rounded-xl w-[392px] p-4">
      <div className="w-full h-60 rounded-xl bg-violet-300 ">
        <img src={image} alt="" className="w-full h-full" />
      </div>
      <p>{badge}</p>
      <h1>{title}</h1>
      <p>{date}</p>
    </div>
  );
};

export default BlogPost;
