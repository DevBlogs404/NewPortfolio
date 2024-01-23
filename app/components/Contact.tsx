"use client";

import React, { SetStateAction, useState } from "react";
import colors from "../themes/colors";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [help, setHelp] = useState("");

  const debounceInput = (func: Function, delay: number) => {
    let timeout: NodeJS.Timeout;

    return function (...args: any[]) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleInputChange = (value: string, setterFunction: Function) => {
    setterFunction(value);
  };

  const onSubmit = () => {
    toast.success("Form Submitted Successfully");

    console.log(name, email, website, help);
  };
  return (
    <div
      className=" w-full mt-10 p-4 lg:p-10 flex flex-col lg:flex-row gap-4"
      id="contact"
    >
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border-2 border-black outline-none lg:w-[80%]"
          value={name}
          onChange={(e) => handleInputChange(e.target.value, setName)}
          required
        />
        <input
          type="text"
          placeholder="Email"
          className="w-full p-2 border-2 border-black outline-none lg:w-[80%]"
          name={email}
          onChange={(e) => handleInputChange(e.target.value, setEmail)}
          required
        />
        <input
          type="text"
          placeholder="Your Website(if any)"
          className="w-full p-2 border-2 border-black outline-none lg:w-[80%]"
          name={website}
          onChange={(e) => handleInputChange(e.target.value, setWebsite)}
        />
        <textarea
          cols={20}
          rows={6}
          placeholder="How can i help ?"
          className="w-full p-2 border-2 border-black outline-none lg:w-[80%]"
          name={help}
          onChange={(e) => handleInputChange(e.target.value, setHelp)}
        />
        <button
          className="w-[150px] h-[50px] bg-black text-white cursor-pointer "
          onClick={onSubmit}
        >
          Get in Touch
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="text-3xl font-bold lg:text-4xl">
          Let&apos;s{" "}
          <span
            className="text-4xl mx-4 lg:text-6xl"
            style={{
              color: "white",
              letterSpacing: "2px",
              textShadow:
                "1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
            }}
          >
            talk
          </span>{" "}
          for
        </div>
        <div className="text-3xl font-bold lg:text-5xl">Something Special</div>
        <p style={{ color: colors.zinc[500] }} className="lg:w-[80%]">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
        <p className="text-xl font-bold lg:text-3xl">
          hoodashubham92@gmail.com
        </p>
        <p className="text-xl font-bold lg:text-3xl">0987654321</p>
      </div>
    </div>
  );
};

export default Contact;
