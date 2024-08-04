import BlogPost from "./blog-post";


const posts = [
    {
      
        image: "/images/post1.png",
        badge: "Technology",
        title: "The Impact of Technology on the Workplace: How Technology is Changing",
        date: "August 20, 2022"
    },
{ 
    image: "/images/post2.png" ,
    badge: "Design",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022"

},
{
    image: "/images/post3.png" ,
    badge: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022"
},
{ 
    image: "/images/post4.png" ,
    badge: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022"
},
        
{ 
    image: "/images/post5.png",
    badge: "Software",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022"
},
{
    image: "/images/post6.png" ,
    badge: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022"
},
{
    image: "/images/post7.png" ,
    badge: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022"},
{
    image: "/images/post8.png" ,
    badge: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022"
},
{
    image: "/images/post9.png" ,
    badge: "Technology",
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022"},
];

const BlogPosts = ()=>{
    return(
        <div>
            <h1>All Blog Post</h1>
            <ul className="flex gap-5 mt-8">
                <li>All</li>
                <li>Design</li>
                <li>Travel</li>
                <li>Fashion</li>
                <li>Technology</li>
                <li>Branding</li>
                </ul>
                <div>
                    {posts.map((post)=>{
                        return (
                          <BlogPost
                          image={post.image}
                          badge={post.badge}
                          title={post.title}
                          date={post.date}
                          />
                        )  
                   
                    })}
                </div>
        </div>
    )
};

export default BlogPosts;