import { FC, MutableRefObject, MouseEvent } from "react";
import * as s from "./style";

interface Props {
  pageRef: MutableRefObject<HTMLDivElement>;
  categoryRef: MutableRefObject<HTMLDivElement>;
}

const ScrollMoveButtons: FC<Props> = ({ pageRef, categoryRef }) => {
  const moveScroll =
    (contentRef: MutableRefObject<HTMLDivElement>) =>
    (e: MouseEvent<HTMLDivElement>) => {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    };

  return (
    <s.ScrollButtonBox>
      <div onClick={moveScroll(pageRef)}>
        <img src="/arrowBlank.svg" />
      </div>
      <div onClick={moveScroll(categoryRef)}>
        <img src="/arrowBlank.svg" />
      </div>
    </s.ScrollButtonBox>
  );
};

export default ScrollMoveButtons;
