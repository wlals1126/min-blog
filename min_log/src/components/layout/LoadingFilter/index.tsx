import React from "react";
import * as l from "./style";

export const LoadingFilter = () => {
  return (
    <l.Background>
      <l.LoadingBalls>
        <div>
          <div className="custom-circle ball-1"></div>
          <div className="custom-circle ball-2"></div>
          <div className="custom-circle ball-3"></div>
        </div>
      </l.LoadingBalls>
    </l.Background>
  );
};

export default LoadingFilter;
