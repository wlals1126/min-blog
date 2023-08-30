import React from "react";
import Link from "next/link";
import * as p from "./style";

interface Props {
  page: string;
  name: string;
  num: number;
  current: boolean;
}

const PostCard = ({ page = "", name, num = 0, current }: Props) => {
  return (
    <Link href={`/${page}${name === "전체글" ? "" : `cateroty=${name}`}`}>
      <p.Block current={current}>
        {name} ({num})
      </p.Block>
    </Link>
  );
};

export default PostCard;
