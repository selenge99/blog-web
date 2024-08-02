import Link from "next/link";

const Header = () => {
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
      />
    </header>
  );
};

export default Header;
