import React, { useRef, MutableRefObject, useEffect } from "react";
import { marked } from "marked";
import Prism from "prismjs";
import * as p from "./style";

interface PostBodyProps {
  title?: string;
  body: string;
  setTitle?: boolean;
  className?: string;
}

const PostBody = ({
  title = "",
  body = "",
  setTitle = true,
  className,
}: PostBodyProps) => {
  const markedDivRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (markedDivRef) {
      markedDivRef.current.innerHTML = marked(body);
    }

    Prism.highlightAll();
  }, [body]);

  return (
    <p.Body className={className}>
      {setTitle && <h1>{title}</h1>}
      <div ref={markedDivRef}>{body}</div>
    </p.Body>
  );
};

export default PostBody;
