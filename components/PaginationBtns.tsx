"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PaginationBtns = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams?.get("searchTerm");
  const startIndex = searchParams.get("start") || 1;

  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44 sm: sm:px-0">
      {Number(startIndex) >= 10 && (
        <Link
          href={`${pathName}?searchTerm=${searchTerm}&start=${Number(startIndex) - 10}`}
        >
          <div className="flex flex-col items-center hover:underline">
            <BsChevronLeft className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {Number(startIndex) <= 90 && (
        <Link
          href={`${pathName}?searchTerm=${searchTerm}&start=${Number(startIndex) + 10}`}
        >
          <div className="flex flex-col items-center hover:underline">
            <BsChevronRight className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PaginationBtns;
