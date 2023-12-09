import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export const generateImage = async (query: string) => {
	try {
		const generateImage = await openai.images.generate({
			model: "dall-e-3",
			prompt: query,
			n: 1,
			response_format: "b64_json",
			size: "1024x1024",
		});
		return generateImage.data;
	} catch (error) {
		console.log(error);
	}
};
