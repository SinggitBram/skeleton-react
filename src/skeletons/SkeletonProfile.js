import React from "react";
import SkeletonElements from "./SkeletonElements";

function SkeletonProfile() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-profile">
        <div>
          <SkeletonElements type="avatar" />
        </div>
        <div>
          <SkeletonElements type="title" />
          <SkeletonElements type="text" />
          <SkeletonElements type="text" />
        </div>
      </div>
    </div>
  );
}

export default SkeletonProfile;
