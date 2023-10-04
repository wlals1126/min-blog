import React from "react";
import * as l from "./style";
import { Background, LoadingBalls } from "./style";

export const LoadingBall = () => {
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

const LoadingFilter = () => {
  return (
    <Background>
      <LoadingBalls />
    </Background>
  );
};

export default LoadingFilter;
