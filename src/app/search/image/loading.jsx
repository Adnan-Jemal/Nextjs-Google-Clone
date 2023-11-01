import React from "react";

const Loading = () => {
  return (
    <div className="pt-10 mx-2 lg:pl-52 max-w-6xl flex gap-4 flex-col sm:flex-row pb-24 justify-center items-center z-[-10]">
      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-xl"></div>
        <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-xl"></div>
        <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-xl"></div>
      </div>
      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-xl"></div>
        <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-xl"></div>
        <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-xl"></div>
      </div>
      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-xl"></div>
        <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-xl"></div>
        <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Loading;