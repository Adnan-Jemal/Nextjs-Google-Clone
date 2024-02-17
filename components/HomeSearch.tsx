"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

const HomeSearch = () => {
  const [input, setInput] = useState<string>("");
  const [randomSearchLoad, setRandomSearchLoad] = useState(false);
  const router = useRouter();

  const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (
    event
  ) => {
    event.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () => {
    setRandomSearchLoad(true);
    const res = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!res) return;
    router.push(`/search/web?searchTerm=${res}`);
    setRandomSearchLoad(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="google-form"
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-lg text-gray-500 mr-3" />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow "
          type="submit"
          form="google-form"
        >
          Google Search
        </button>
        <button
          className="bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm "
          onClick={randomSearch}
          disabled={randomSearchLoad}
        >
          {randomSearchLoad ? "...Loading" : "I am Feeling Lucky"}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
