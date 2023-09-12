import React, { useRef, useCallback, MutableRefObject } from "react";
import * as s from "./style";

interface Props {
  thumbnails: string[];
  tnIndex: number;
  removeThumbnail: () => void;
  setTnIndex(index: number): void;
  addThumbnail(newImage: string): void;
}

const Posting = ({
  thumbnails,
  tnIndex,
  removeThumbnail,
  setTnIndex,
  addThumbnail,
}: Props) => {
  const imgInput = useRef() as MutableRefObject<HTMLInputElement>;

  const onClickImgButton = useCallback(() => {
    imgInput.current.click();
  }, []);

  const onChangeImg = useCallback(async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 1024 * 1024 * 10) return;
    const fileTypeRegex = /^image\/(.*?)/;
    if (!fileTypeRegex.test(file.type)) return;
  }, []);

  return (
    <s.ThumbnailBox>
      <div className="paddingBox" />
      <div className="buttonBox">
        <div onClick={onClickImgButton}>
          <input
            type="file"
            accept=".gif, .jpg, .png"
            ref={imgInput}
            onChange={onChangeImg}
            style={{ display: "none" }}
          />
          파일찾기
        </div>
        {thumbnails.length > 0 && <div onClick={removeThumbnail}>제거하기</div>}
      </div>
      <div
        className="imageBox"
        style={{ transform: `translateX(-${100 * tnIndex}%)` }}
      >
        {thumbnails &&
          thumbnails.map((img, i) => (
            <img key={i} src={img} alt={`${i + 1}th_thumbnail`} />
          ))}
      </div>
      {tnIndex > 0 && (
        <button
          className="left"
          onClick={() => {
            setTnIndex(tnIndex - 1);
          }}
        >
          <img src="/arrow.svg" alt="left_button" />
        </button>
      )}
      {tnIndex < thumbnails.length - 1 && (
        <button
          className="right"
          onClick={() => {
            setTnIndex(tnIndex + 1);
          }}
        >
          <img src="/arrow.svg" alt="right_button" />
        </button>
      )}
    </s.ThumbnailBox>
  );
};

export default Posting;
