import Link from "next/link";
import React from "react";
import PaginationBtns from "./PaginationBtns";

type resultTypes = {
  link: string;
  title: string;
  displayLink: string;
  cacheId: string;
  image: { contextLink: string };
};

const ImageSearchResults = ({ results }:any) => {
  return (
    <div className="sm:pb-24 pb-40 mt-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results?.map((result: resultTypes) => (
          <div className="mb-8" key={result.cacheId}>
            <div className="group">
              <Link href={result.image.contextLink}>
                <img
                  src={result?.link}
                  alt={result.title}
                  className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-150"
                />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className="group-hover:underline truncate text-xl">
                  {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className="group-hover:underline truncate text-gray-600">
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
        
      </div>
      <div className="ml-16"><PaginationBtns/></div>
    </div>
  );
};

export default ImageSearchResults;
