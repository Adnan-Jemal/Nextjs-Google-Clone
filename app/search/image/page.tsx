import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";
import React from "react";

const ImageSearchPage = ({ searchParams }: { searchParams: { searchTerm: string; start: string } }) => {
  const startIndex = searchParams.start || "1";

  // Fetch image search results
  const fetchImageSearchResults = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&cx=${process.env.NEXT_PUBLIC_GOOGLE_CONTEXT_KEY}&q=${encodeURIComponent(searchParams.searchTerm)}&searchType=image&start=${startIndex}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch image search results");
      }
      const data = await res.json();
      return data.items || [];
    } catch (error) {
      console.error("Error fetching image search results:", error);
      return [];
    }
  };

  const [imageResults, setImageResults] = React.useState<any[]>([]);

  React.useEffect(() => {
    fetchImageSearchResults().then((results) => setImageResults(results));
  }, [searchParams]);

  return (
    <div>
      {imageResults.length === 0 ? (
        <div className="flex flex-col justify-center items-center pt-10 text-center">
          <h1 className="text-3xl mb-4">No results found for {searchParams.searchTerm}</h1>
          <p className="text-lg">
            Try searching the web for images for something else{" "}
            <Link href={"/"} className="text-blue-500">
              Home
            </Link>
          </p>
        </div>
      ) : (
        <ImageSearchResults results={imageResults} />
      )}
    </div>
  );
};

export default ImageSearchPage;
