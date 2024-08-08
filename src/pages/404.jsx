import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex gap-[117px] max-w-[1220px] m-auto">
      <div>
        <p className="text-7xl font-normal">404</p>
        <p>line</p>
      </div>
      <div>
        <p className="font-semibold text-2xl">Page not found</p>
        <h1>
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </h1>
        <button>Back to Home</button>
      </div>
    </div>
  );
};

export default NotFoundPage;
