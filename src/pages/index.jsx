import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="max-w-[1400px] m-auto bg-blue-400 md:bg-red-400 ">
      <Section />
    </div>
  );
}
