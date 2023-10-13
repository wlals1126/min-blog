import React, { useEffect } from 'react';

interface DropImageProps {
	onPasteImage(file: any): void;
}

const DropImage = ({ onPasteImage }: DropImageProps) => {
	useEffect(() => {
		const onPaste = (e: any) => {
			const { items } = e.clipboardData || e.originalEvent.clipboardData;
			if (items.length === 0) return;
			const fileItem = [...items].filter((item) => item.kind === 'file')[0];
			if (!fileItem || !fileItem.getAsFile) return;
			const file = fileItem.getAsFile();
			onPasteImage(file);
			e.preventDefault();
		};

		if (document && document.body) {
			document.body.addEventListener('paste', onPaste);
		}

		return () => {
			if (document && document.body) document.body.removeEventListener('paste', onPaste);
		};
	}, []);
  
	return <div style={{ width: 0, height: 0 }} />;
};

export default DropImage;
