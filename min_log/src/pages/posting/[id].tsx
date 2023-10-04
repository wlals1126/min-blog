import React, { useEffect } from "react";
import Posting from ".";
import { useSelector } from "react-redux";
import { RootState } from "@/reducers";
import { useRouter } from "next/router";
import Error from "../_error";

const ExitingPost = () => {
  const { post, isEditedPost } = useSelector((state: RootState) => state.post);
  const router = useRouter();

  useEffect(() => {
    if (isEditedPost) {
      alert("게시물이 삭제되었습니다.");
      router.push(`/post/${post.id}`);
    }
  }, [isEditedPost]);

  if (post) return <Posting post={post} />;
  else return <Error statusCode={404} message={null} />;
};

export default ExitingPost;
