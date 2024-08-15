import Link from "next/link";
import BlogPost from "./blog-post";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "@/provider/search-provider";
import Loader from "../Loader";

const BlogPosts = () => {
  const { searchValue, articles, isLoading, count, setCount } =
    useContext(SearchContext);

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

      <div className="flex flex-wrap justify-center gap-5 m-auto mt-8">
        {finder.map((post) => {
          console.log("post", post);
          return (
            <Link href={"/blog/" + post.id}>
              <BlogPost
                image={post.cover_image}
                badge={post.tag_list}
                title={post.title}
                date={post.published_at}
              />
            </Link>
          );
        })}
        {isLoading && <Loader />}
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
