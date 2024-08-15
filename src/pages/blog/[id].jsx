import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ArticleDetail = () => {
  const { query } = useRouter();
  console.log("QR", query.id);
  const [articleDetail, setArticleDetail] = useState(null);

  const getArticleById = async (id) => {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    setArticleDetail(data);
  };

  useEffect(() => {
    getArticleById(query.id);
  }, []);

  return (
    <div className="p-10 max-w-[1220px] m-auto mt-32">
      <h1 className="text-4xl">{articleDetail?.title}</h1>
      <div className="flex gap-6 items-center mt-5">
        <img
          className="w-20 h-20 rounded-full"
          src={articleDetail?.user.profile_image}
          alt=""
        />

        <h2 className="text-[#696A75]">{articleDetail?.user.name}</h2>
        <p className="text-[#696A75]">{articleDetail?.readable_publish_date}</p>
      </div>
      <div
        className="blog-detail mt-6 text-xl text-[#3B3C4A]"
        dangerouslySetInnerHTML={{ __html: articleDetail?.body_html }}
      ></div>
    </div>
  );
};

export default ArticleDetail;
