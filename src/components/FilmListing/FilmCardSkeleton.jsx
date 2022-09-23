import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FilmCardSkeleton = () => {
  return (
    <div className="flex flex-col">
      <Skeleton className="row-span-6 h-52" />
      <Skeleton className="mt-4" />
      <Skeleton className="w-1/2" />
    </div>
  );
};

export default FilmCardSkeleton;
