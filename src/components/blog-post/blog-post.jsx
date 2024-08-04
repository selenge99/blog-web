const BlogPost = ({image, badge, title, date})=>{
    return(
        <div className="border ">
<img src={image} alt="" className="w-90 h-60 mt-12"/>
<p>{badge}</p>
<h1>{title}</h1>
<p>{date}</p>
        </div>
    )
};

export default BlogPost;