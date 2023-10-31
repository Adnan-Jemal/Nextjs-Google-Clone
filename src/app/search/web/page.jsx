import Link from "next/link";
import React from "react";

const WebSearchpage = async ({ searchParams }) => {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
  if (!response.ok) {
    throw new Error("something went wrong");
  }
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl">No results found</h1>
        <p className="text-lg">Try searching something else or go back to <Link className='text-blue-500' href= '/'>Home</Link> </p>
      </div>
    );
  }

  return <>{results && results.map((result) => <h1>{result.title}</h1>)}</>;
};

export default WebSearchpage;
