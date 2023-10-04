import React, { useEffect } from "react";

interface DropImgProps {
  onPasteImage(file: any): void;
}

const DropImage: React.FC<DropImgProps> = ({ onPasteImage }) => {
  const handlePaste = (e: any) => {
    const { items } = e.clipboardData || e.originalEvent.clipboardData;
    if (items.length === 0) return;

    const fileItem = [...items].filter((item) => item.kind === "file")[0];
    if (!fileItem || !fileItem.getAsFile) return;

    const file = fileItem.getAsFile();
    onPasteImage(file);
    e.preventDefault();
  };

  useEffect(() => {
    document.body.addEventListener("paste", handlePaste);
    return () => {
      document.body.removeEventListener("paste", handlePaste);
    };
  }, [onPasteImage]);

  return <div style={{ width: 0, height: 0 }} />;
};

export default DropImage;
