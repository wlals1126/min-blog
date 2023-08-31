/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import * as p from "./style";
import { UCategory, UPost } from "@/typings/data";
import dayjs from "dayjs";

interface PostProps {
  post: UPost;
}

const PostCard = ({ post }: PostProps) => {
  return (
    <p.PostCard>
      {post.thumbnail && (
        <Link href={`/post/{post.id}`}>
          <p.Thumbnail>
            <>
              <div />
              <img src={post.thumbnail} alt="error" />
            </>
          </p.Thumbnail>
        </Link>
      )}
      <p.Contents thumbnail={post.thumbnail ? true : false}>
        <Link href={`/post/{post.id}`}>
          <a>
            <h4>{post.title}</h4>
            <p className="date">
              {dayjs(post.createdAt).format("YYYY년 MM월 DD일")}
            </p>
            <p>{post.description}</p>
          </a>
        </Link>
      </p.Contents>
    </p.PostCard>
  );
};

export default PostCard;
