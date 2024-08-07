import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold">Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam
      </p>

      <div>
        <p>Address</p>
        <p>1328 Oak Ridge Drive, Saint Louis, Missouri</p>
        <p>Contact</p>
        <p>313-332-8662 info@email.com</p>
      </div>

      <div className="">
        <p>Leave a Message</p>

        <input placeholder="Your name" className="border"></input>
        <input placeholder="Your email" className="border"></input>
        <input placeholder="Subject" className="border"></input>
        <input placeholder="Write a message" className="border"></input>
      </div>
    </>
  );
};

export default Contact;
