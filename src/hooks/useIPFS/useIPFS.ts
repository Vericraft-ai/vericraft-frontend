import { useState } from "react";

export const useIPFS = () => {
  const [cid, setCid] = useState("");
  const [uploading, setUploading] = useState(false);

  const uploadFile = async (fileToUpload: File) => {
    if (!fileToUpload?.name) return;
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("file", fileToUpload, fileToUpload.name);
      console.log({ fileToUpload });
      const res = await fetch("/api/files", {
        method: "POST",
        body: formData,
      });
      const ipfsHash = await res.text();
      setCid(ipfsHash);
      setUploading(false);
      return ipfsHash;
    } catch (e) {
      console.log(e);
      setUploading(false);
    }
  };

  const pinJSONToIPFS = async (json: object) => {
    try {
      const res = await fetch("/api/metadata", {
        method: "POST",
        body: JSON.stringify({ json: json }),
      });
      const response = await res.json();
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  const loadRecent = async () => {
    try {
      const res = await fetch("/api/files");
      const json = await res.json();
      setCid(json.ipfs_pin_hash);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    cid,
    setCid,
    uploading,
    setUploading,
    uploadFile,
    loadRecent,
    pinJSONToIPFS,
  };
};
