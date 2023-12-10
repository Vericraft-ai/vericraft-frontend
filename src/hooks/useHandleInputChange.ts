import { useState } from "react";
import { useIPFS } from "./useIPFS";

export const useHandleInputChange = () => {
  const [image, setImage] = useState<string>("");
  const [imgSrc, setImgSrc] = useState<string>("");
  const [imageHash, setImageHash] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { cid, uploading, setUploading, uploadFile } = useIPFS();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setImage(value);
  };

  const dataUrlToFile = (dataUrl: string, filename: string) => {
    const arr = dataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  };

  const generate = async () => {
    setIsLoading(true);
    if (!image.length) {
      setIsLoading(false);
      return;
    }
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({ param: image }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const fileData = await response.json();
      setImgSrc(fileData?.image);
      if (fileData?.image) {
        const file = dataUrlToFile(
          fileData?.image,
          `${image}.${Date.now()}.png`
        );
        const hash = await uploadFile(file);
        setIsLoading(false);
        setImageHash(hash);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return { imgSrc, handleChange, generate, isLoading, imageHash };
};
