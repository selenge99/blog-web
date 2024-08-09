import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1220px] m-auto">
      <h1 className="text-4xl font-semibold">Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam
      </p>
      <div className=" flex gap-[50px]">
        <div className="border border-[#E8E8EA] p-4 rounded-xl">
          <span className="">
            <p className="text-2xl">Address</p>
            <p className="text-lg text-[#696A75]">
              1328 Oak Ridge Drive, Saint <br /> Louis, Missouri
            </p>
          </span>
        </div>

        <div className="border border-[#E8E8EA] p-4 rounded-xl">
          <span>
            <p className="text-2xl">Contact</p>
            <p className="text-lg text-[#696A75]">
              1328 Oak Ridge Drive, Saint <br />
              Louis, Missouri
            </p>
          </span>
        </div>
      </div>
      <div className="">
        <p>Leave a Message</p>

        <input placeholder="Your name" className="border"></input>
        <input placeholder="Your email" className="border"></input>
        <input placeholder="Subject" className="border"></input>
        <input placeholder="Write a message" className="border"></input>
      </div>
    </div>
  );
};

export default Contact;
