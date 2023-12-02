import { useCallback, useState } from "react";
import type { FileRejection } from "react-dropzone";
import { useDropzone } from "react-dropzone";

export const useDragnDrop = () => {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      const file = new FileReader();

      file.onload = function () {
        setPreview(file.result);
      };

      if (acceptedFiles.length > 0) {
        file.readAsDataURL(acceptedFiles[0]);
        setErrors([]);
      }

      if (fileRejections.length > 0) {
        const errorArray = fileRejections[0].errors.map((error) => {
          if (error.code === "file-too-large") {
            return "File is too large";
          }
          if (error.code === "file-invalid-type") {
            return "File type not supported";
          }
          return "Unknown error";
        });

        setErrors(errorArray);
      }
    },
    []
  );

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/gif": [],
      "image/jpeg": [],
      "image/png": [],
      "image/svg+xml": [],
      "video/mp4": [],
    },
    maxFiles: 1,
    maxSize: 50000000, // 50MB
    onDrop,
  });

  return {
    acceptedFiles,
    errors,
    getInputProps,
    getRootProps,
    isDragActive,
    preview,
    isFocused,
    isDragAccept,
    isDragReject,
  };
};
