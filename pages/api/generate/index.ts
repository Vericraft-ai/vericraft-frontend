import type { NextApiRequest, NextApiResponse } from "next";
import { generateImage } from "./helpers/generateImage";
import { base64ToPng } from "./helpers/urlToBinaryImage";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { param } = req.body;
	const base64Image = await generateImage(param);
	const image = await base64ToPng(base64Image?.[0].b64_json ?? "");

	const mimeType = "image/png";
	res.status(200).json({ image: `data:${mimeType};base64,${image}` });
}
