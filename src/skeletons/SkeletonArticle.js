import React from "react";
import SkeletonElements from "./SkeletonElements";

function SkeletonArticle() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-article">
        <SkeletonElements type="title" />
        <SkeletonElements type="text" />
        <SkeletonElements type="text" />
        <SkeletonElements type="text" />
      </div>
    </div>
  );
}

export default SkeletonArticle;
