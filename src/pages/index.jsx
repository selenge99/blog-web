import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import BlogPosts from "@/components/blog-post";
import Trendings from "@/components/trending";

export default function Home() {
  return (
    <div className="max-w-[1220px] m-auto">
      <Section />
      <Trendings />
      <BlogPosts />
    </div>
  );
}
