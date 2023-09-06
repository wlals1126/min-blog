import React, { ChangeEvent, useCallback, useState } from "react";
import * as p from "./style";
import CategoryInput from "@/components/write/CategoryInput";
import { useDispatch } from "react-redux";
import { OPEN_CONFIRM_POST } from "@/reducers/posting";
import InputImg from "../InputImg";
import { UCategory } from "@/typings/data";

interface PostingFormProps {
  isEditingId: number;
  title: string;
  onChangeTitle(e: ChangeEvent<HTMLInputElement>): void;
  body: string;
  onChangeBody(e: ChangeEvent<HTMLTextAreaElement>): void;
  uploadImage(file: any): void;
  category?: UCategory[];
}

const PostingForm = ({
  category = [],
  isEditingId = 0,
  title,
  onChangeTitle,
  body,
  onChangeBody,
  uploadImage,
}: PostingFormProps) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState(category);

  const submitToConfirm = useCallback(
    (title: any, isEditingId: any, body: any, categories: any) => {
      if (!(title && body)) {
        alert("포스트 제목과 내용을 입력해주셔야합니다.");
        return;
      } else {
        dispatch({
          type: OPEN_CONFIRM_POST,
          payload: {
            isEditingId: isEditingId,
            body: body,
            categories,
          },
        });
      }
    },
    []
  );

  return (
    <p.FormContainer>
      <input
        type="text"
        value={title}
        onChange={onChangeTitle}
        placeholder="제목을 입력해주세요."
      />
      <CategoryInput categories={categories} setCategories={setCategories} />
      <textarea
        value={body}
        onChange={onChangeBody}
        name="body"
        placeholder="이곳에 글을 작성해주세요"
      />
      <p.ButtonBox>
        <div
          className="submit"
          onClick={() => {
            submitToConfirm(title, isEditingId, body, categories);
          }}
        >
          제출하기
        </div>
      </p.ButtonBox>
    </p.FormContainer>
  );
};

export default PostingForm;
