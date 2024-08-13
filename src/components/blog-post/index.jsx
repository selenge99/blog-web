import Link from "next/link";
import BlogPost from "./blog-post";
import { useContext, useEffect, useState } from "react";
import { searchContext } from "@/provider/search-provider";

// const posts = [
//   {
//     image: "/images/post1.png",
//     badge: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     image: "/images/post2.png",
//     badge: "Design",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     image: "/images/post3.png",
//     badge: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     image: "/images/post4.png",
//     badge: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },

//   {
//     image: "/images/post5.png",
//     badge: "Software",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     image: "/images/post6.png",
//     badge: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     image: "/images/post7.png",
//     badge: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     image: "/images/post8.png",
//     badge: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
//   {
//     image: "/images/post9.png",
//     badge: "Technology",
//     title:
//       "The Impact of Technology on the Workplace: How Technology is Changing",
//     date: "August 20, 2022",
//   },
// ];

const BlogPosts = () => {
  const { searchValue } = useContext(searchContext);
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(0);

  const getArticleData = async () => {
    const response = await fetch(
      `https://dev.to/api/articles?page=1&per_page=${count + 9}`
    );
    const data = await response.json();
    setArticles(data);
    // console.log("data", data)
  };
  useEffect(() => {
    getArticleData();
  }, [count]);
  const finder = articles.filter((data) =>
    data.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log(finder);

  return (
    <div className="w-full">
      <h1 className="text-2xl text-[#181A2A] font-bold mb-8 mt-[100px]">
        All Blog Post
      </h1>
      <div className="flex justify-between m-auto">
        <ul className="flex flex-wrap gap-5">
          <li className="text-[#D4A373]">All</li>
          <li>Design</li>
          <li>Travel</li>
          <li>Fashion</li>
          <li>Technology</li>
          <li>Branding</li>
        </ul>
        <p className="flex">View all</p>
      </div>
      <h2>Hailt hiij bn:{searchValue}</h2>
      <div className="flex flex-wrap justify-center gap-5 m-auto mt-8">
        {finder.map((post) => {
          return (
            <Link href={"/blog/" + post.id}>
              <BlogPost
                image={post.cover_image}
                badge={post.tags}
                title={post.title}
                date={post.published_at}
              />
            </Link>
          );
        })}
      </div>

      <button
        className="border border-[#696A754D] py-3 px-5 rounded-md m-auto mt-[100px] mb-[100px]"
        onClick={() => setCount(count + 3)}
      >
        Load More
      </button>
    </div>
  );
};

export default BlogPosts;
