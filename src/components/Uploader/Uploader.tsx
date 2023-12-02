import { useDragnDrop } from "@/hooks/useDragnDrop";
import { UploadIcon } from "../Icons/UploadIcon";
import styled from "styled-components";

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#E8E8E8";
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 15.6rem;
  border-width: 2px;
  border-radius: 0.5rem;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  color: ${(props) => props.theme.colors.text};
  outline: none;
  transition: border 0.24s ease-in-out;
  font-size: 0.75rem;

  svg {
    margin-bottom: 0.75rem;
  }

  .bold {
    font-weight: 600;
  }
`;

export const Uploader = () => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    errors,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDragnDrop();

  return (
    <Container {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
      <input {...getInputProps()} />

      <UploadIcon className="stroke-gray-600" />

      <p className="bold">drag and drop media</p>
      <p>
        {acceptedFiles[0]?.name ? acceptedFiles[0].name : " Max size: 50MB"}
      </p>
      <p>JPG, PNG, GIF, SVG, MP4</p>
      {errors.map((error, index) => {
        return (
          <p key={index} className="text-red-500">
            {error}
          </p>
        );
      })}
    </Container>
  );
};
