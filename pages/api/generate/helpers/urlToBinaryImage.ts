export async function base64ToPng(base64Image: string) {
	const base64Data = base64Image.replace(/^data:image\/png;base64,/, "");
	const buffer = Buffer.from(base64Data, "base64");
	return buffer.toString("base64");
}
