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
    <div className="p-10 max-w-[1220px] m-auto">
      <div className="flex gap-4">
        <img
          className="w-20 h-20 rounded-full"
          src={articleDetail?.user.profile_image}
          alt=""
        />
        <div className="flex flex-col gap-2 items-center">
          <h2 className="post">{articleDetail?.user.name}</h2>
          <p>{articleDetail?.readable_publish_date}</p>
        </div>
      </div>
      <div
        className="blog-detail"
        dangerouslySetInnerHTML={{ __html: articleDetail?.body_html }}
      ></div>
    </div>
  );
};

export default ArticleDetail;
