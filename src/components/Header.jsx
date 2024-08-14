import Link from "next/link";
import BlogPosts from "./blog-post";
import { useContext } from "react";
import { SearchContext } from "@/provider/search-provider";

const Header = () => {
  const { setSearchValue } = useContext(SearchContext);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <header className="flex max-w-[1400px] m-auto justify-between p-5 items-center">
      <img src="./images/Logo.png" alt="logo" className="w-36 h-8" />
      <ul className=" md:flex gap-10 text-base hidden">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <input
        type="text"
        placeholder="Search"
        className="border border-solid p-1"
        onChange={handleChange}
      />
    </header>
  );
};

export default Header;
