import { Marked, marked, use } from "marked";
import * as c from "./style";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_CONFIRM_POST } from "@/reducers/posting";
import { WRITE_POST_REQUEST } from "@/reducers/post";
import SetThumbnail from "@/components/write/SetThumbnail";
import { UPost } from "@/typings/data";
import { RootState } from "@/reducers";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

interface Props {
  title: string;
  post: UPost | null;
}

const ComfirmPost = ({ title, post }: Props) => {
  const { body, isOpen, categories, isEditingId } = useSelector(
    (state: RootState) => state.post
  );
  const dispatch = useDispatch();
  const [des, setDes] = useState(post ? post.description : "");
  const [isVisible, setVisible] = useState(post ? post.is_visible : "");
  const [thumbnails, setThumbnails] = useState(
    post?.thumbnail ? [post.thumbnail] : ([] as string[])
  );
  const [tnIndex, setTnIndex] = useState(0);

  const onChangeDes = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (e.target.value.length > 160) return;
    setDes(e.target.value.replace("\n", ""));
  }, []);

  const removeThumbnail = useCallback(() => {
    setThumbnails(thumbnails.filter((prev, i) => i !== tnIndex));
    setTnIndex(tnIndex ? tnIndex - 1 : 0);
  }, [tnIndex, thumbnails]);

  const addThumbnail = useCallback(
    (newImage: any) => {
      setThumbnails([newImage, ...thumbnails]);
      setTnIndex(0);
    },
    [categories]
  );

  const onSubmitPost = useCallback(() => {
    if (!(body && title && des)) {
      alert("description은 필수 입력 항목입니다.");
      return;
    }
    dispatch({
      type: WRITE_POST_REQUEST,
      payload: {
        title: title,
        description: des,
        thumbnails: thumbnails[tnIndex],
        is_visible: isVisible,
        body: body,
      },
      category: categories,
    });
  }, [body, des, isVisible, thumbnails, tnIndex]);

  useEffect(() => {
    if (!isOpen || !body) return;

    const parseDesList = marked(body).match(
      /<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/g
    );
    const parseDes = parseDesList?.join(" ").replace(/(<([^>]+)>)/gi, "");

    if (parseDes) setDes(parseDes.length ? parseDes.slice(0, 160) : parseDes);
    const thumb_imgs = body
      .match(/!\[[^\]]*?\]\([^)]+\)/g)
      ?.map((imgString: string) =>
        imgString.replace(/!\[[^\]]*?\]\(/g, "").replace(")", "")
      );

    setThumbnails(thumb_imgs ? [...thumbnails, ...thumb_imgs] : thumbnails);
  }, [isOpen]);

  return (
    <c.ConfirmPage
      style={{
        left: isOpen ? 0 : "100%",
      }}
    >
      <div>
        <h3>썸네일 미리보기</h3>
        <SetThumbnail
          thumbnails={thumbnails}
          tnIndex={tnIndex}
          removeThumbnail={removeThumbnail}
          setTnIndex={setTnIndex}
          addThumbnail={addThumbnail}
        />
        <h3>
          Description 미리보기 <span>{des.length}/160</span>
        </h3>
        <textarea rows={4} value={des} onChange={onChangeDes} />
        <c.SubmitButtonBox>
          <div
            onClick={() => {
              dispatch({ type: CLOSE_CONFIRM_POST });
            }}
          >
            취소하기
          </div>
          <div
            className={isVisible ? "selected" : ""}
            onClick={() => {
              setVisible(!isVisible);
            }}
          >
            {isVisible ? "공개" : "비공개"}
          </div>
          <div className="submit" onClick={onSubmitPost}>
            작성하기
          </div>
        </c.SubmitButtonBox>
      </div>
    </c.ConfirmPage>
  );
};

export default c.ConfirmPage;
