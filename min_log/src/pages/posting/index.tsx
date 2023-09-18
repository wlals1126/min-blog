import React, { useEffect, useState } from "react";
import PostingForm from "@/components/write/PostingForm";
import * as p from "./style";
import ConfirmPost from "@/containers/write";
import useInput from "@/hooks/useInput";
import axios from "axios";
import PostBody from "@/components/write/PostBody";
import { UPost } from "@/typings/data";
import { useSelector } from "react-redux";
import { RootState } from "@/reducers";
import { useRouter } from "next/router";
import Head from "next/head";
import LoadingFilter from "@/components/layout/LoadingFilter";
import DropImage from "@/components/write/DropImg";
import wrapper from "@/store/configureStore";

interface Props {
  post: UPost | null;
}

const Posting = ({ post }: Props) => {
  const { user } = useSelector((state: RootState) => state.user);
  const { writeSuccess } = useSelector((state: RootState) => state.post);
  const loading = useSelector((state: RootState) => state.loading);
  const router = useRouter();
  const [title, onChangeTitle] = useInput(post ? post.title : "");
  const [body, onChangeBody, setBody] = useInput(post ? post.body : "");
  const [newImage, setImage] = useState("");

  const uploadImage = async (file: any) => {
    if (!file) return;
    if (file.size > 1024 * 1024 * 10) return;
    const fileTypeRegex = /^image\/(.*?)/;
    if (!fileTypeRegex.test(file.type)) return;

    const formData = new FormData();

    await formData.append("image", file);
    await axios
      .post(`/post/uploadImage`, formData, { timeout: 10000 })
      .then((res) => {
        setImage(`![](${res.data})`);
      });
  };

  const onPasteImage = (file: any) => {
    if (!file) return;
    uploadImage(file);
  };

  useEffect(() => {
    if (user) {
      router.back();
    }
    if (writeSuccess > -1) {
      router.push(`/post/${writeSuccess}`);
    }
  }, [writeSuccess]);

  useEffect(() => {
    if (newImage && body.indexOf(newImage) === -1) setBody(body + newImage);
    return () => {
      setImage("");
    };
  }, [body, newImage]);

  return (
    <>
      <Head>
        <title>{post ? "글 수정" : "새 글"}</title>
      </Head>
      {loading["post/WRITE_POST_REQUEST"] && <LoadingFilter />}
      <p.PostingContainer>
        <React.Fragment>
          <PostingForm
            isEditingId={post ? post.id : 0}
            category={post?.categoryPosts}
            title={title}
            onChangeTitle={onChangeTitle}
            onChangeBody={onChangeBody}
            body={body}
            uploadImage={uploadImage}
          />
          <DropImage onPasteImage={onPasteImage} />
        </React.Fragment>
        <PostBody className="preview" title={title} body={body} />
      </p.PostingContainer>
      <ConfirmPost title={title} post={post} />
    </>
  );
};


export default Posting;
