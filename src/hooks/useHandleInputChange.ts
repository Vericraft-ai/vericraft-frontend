import { generateImage } from "../../pages/api/generate/helpers/generateImage";
import { base64ToPng } from "../../pages/api/generate/helpers/urlToBinaryImage";
import { useState } from "react";

export const useHandleInputChange = () => {
	const [image, setImage] = useState<string>("");
	const [imgSrc, setImgSrc] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setImage(value);
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
				setIsLoading(false);
			}
		} catch (error) {
			setIsLoading(false);
		}
	};
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = new FormData();
		form.append("image", image);
	};
	return { imgSrc, handleChange, generate, isLoading, onSubmit };
};
