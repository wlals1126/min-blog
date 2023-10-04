import React, { useCallback, useRef } from "react";
import * as i from "./style";

interface WriteHeaderProps {
  upLoadImg(file: any): void;
}

const InputImg = ({ upLoadImg }: WriteHeaderProps) => {
  const imageInput = useRef() as React.MutableRefObject<HTMLInputElement>;

  const onClickImg = useCallback(() => {
    imageInput.current.click();
  }, []);

  const onChangeImg = useCallback((e: any) => {
    upLoadImg(e.target.files[0]);
  }, []);

  return (
    <i.ImageButton onClick={onClickImg}>
      <img src="/image.svg" />
      <input
        type="file"
        accept=".gif, .jpg, .png"
        ref={imageInput}
        onChange={onChangeImg}
        style={{ width: 0, height: 0 }}
      />
    </i.ImageButton>
  );
};

export default InputImg;
