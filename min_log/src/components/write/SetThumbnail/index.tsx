import React, { useRef, useCallback, MutableRefObject } from "react"
import * as s from "./style";

interface Props {
	thumbnails: string[];
	tnIndex: number;
	removeThumbnail: () => void;
	setTnIndex(index: number): void;
	addThumbnail(newImage: string): void;
}

const Posting = ({ thumbnails, tnIndex, removeThumbnail, setTnIndex, addThumbnail }: Props) => {
    const imgInput = useRef() as MutableRefObject<HTMLInputElement>;

    const onClickImgButton = useCallback(() => {
        imgInput.current.click();
    }, [])

}