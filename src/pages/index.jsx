import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import BlogPosts from "@/components/blog-post";
import Trendings from "@/components/trending";
import { useEffect } from "react";

export default function Home() {
  const getArticleData = async(() => {
    co;
  });
  return (
    <div className="container m-auto">
      <Section />
      <Trendings />
      <BlogPosts />
    </div>
  );
}
