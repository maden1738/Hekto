import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";

export default function ProductLoader() {
  return (
    <div>
      <Skeleton height={200} />
      <Skeleton count={3} />
    </div>
  );
}
