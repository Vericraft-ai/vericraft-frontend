import { NextApiRequest, NextApiResponse } from "next";
import pinataSDK from "@pinata/sdk";

const pinJsonToPinata = async (json: object) => {
  const pinata = new pinataSDK({ pinataJWTKey: process.env.PINATA_JWT });

  try {
    const result = await pinata.pinJSONToIPFS(json);
    console.log(result)
    return result;
  } catch (error) {
    console.error("Error pinning JSON to Pinata:", error);
    throw error;
  }
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { json } = JSON.parse(req.body);

      if (!json) {
        return res.status(400).json({ error: "Missing JSON data" });
      }

      const ipfsHash = await pinJsonToPinata(json);

      return res.status(200).json({ ipfsHash });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;
