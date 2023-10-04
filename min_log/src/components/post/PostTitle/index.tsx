import React from "react";
import * as p from "./style";
import { useDispatch } from "react-redux";
import { REMOVE_POST_REQUEST } from "@/reducers/post";
import Link from "next/link";

interface Props {
  id: number;
  title: string;
  isUser: boolean;
}

const PostTitle = ({ id, title, isUser }: Props) => {
  const dispatch = useDispatch();

  const onClickDelete = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (confirm("정말 게시물을 삭제하시겠습니까?")) {
      dispatch({
        type: REMOVE_POST_REQUEST,
        payload: id,
      });
    }
  };

  return (
    <p.TitleContainer isUser={isUser}>
      <h1>{title}</h1>
			{isUser && (
				<div>
					<Link href={`/posting/${id}`}>
						<a>
							<img src="/pen.svg" />
						</a>
					</Link>
					<div onClick={onClickDelete}>
						<img src="/trash.svg" alt="" />
					</div>
				</div>
			)}
    </p.TitleContainer>
  );
};

export default PostTitle;
