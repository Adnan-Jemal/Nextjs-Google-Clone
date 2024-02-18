import WebSearchResult from "@/components/WebSearchResult";
import { error } from "console";
import Link from "next/link";
import React from "react";

const WebSearchPage = async ({
  searchParams,
}: {
  searchParams: { searchTerm: string,start: string };
}) => {
  const startIndex = searchParams.start || "1";
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}s&cx=${process.env.NEXT_PUBLIC_GOOGLE_CONTEXT_KEY}&q=${searchParams.searchTerm}}&start=${startIndex}`
  );
  if (!res.ok) throw new Error("something went wrong");
  const data = await res.json();
  
  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10 text-center">
        <h1 className="text-3xl mb-4">
          No results found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try searching the web for images for something else{" "}
          <Link href={"/"} className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return <div>{results && <WebSearchResult results={data} />}</div>
};

export default WebSearchPage;
