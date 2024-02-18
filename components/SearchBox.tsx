"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");
  const router = useRouter();

  const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (
    event
  ) => {
    event.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
    >
      <input
        onChange={(e) => setTerm(e.target.value)}
        value={term}
        type="text"
        className="w-full focus:outline-none"
      />
      <RxCross2
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2  "
        onClick={() => setTerm("")}
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 border-l-2 border-gray-300 mr-3 pl-4 " />
      <button type="submit" className="text-2xl">
        <AiOutlineSearch className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer" />
      </button>
    </form>
  );
};

export default SearchBox;
