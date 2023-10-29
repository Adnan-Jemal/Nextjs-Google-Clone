"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

const HomeSearch = () => {
  const [input, setInput] = useState("");
  const [randomLoading, setRandomLoading] = useState(false);
  const router = useRouter();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!input.trim) {
      return;
    }
    router.push(`search/web?searchTerm=${input}`);
  };
  const randomSearch = async () => {
    setRandomLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) {
      return;
    }
    router.push(`/search/web?searchTerm=${response}`);
    setRandomLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handelSubmit}
        className="flex w-full mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          className="flex-grow focus:outline-none"
        />
        <BsFillMicFill className="text-xl" />
      </form>
      <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center mt-8">
        <button onClick={handelSubmit} className="btn">
          Google Search
        </button>
        <button
          disabled={randomLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {randomLoading ? (
            <img
              src="spinner.svg"
              alt="loading ..."
              className="h-6 text-center"
            />
          ) : (
            "I Am Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
