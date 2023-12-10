import {
  CONTRACT_ADDRESS,
  PINATA_IPS_URL,
  DESTINATION_CHAIN,
  DESTINATION_MINTER,
  FEES,
} from "@/consts";
import { ethers } from "ethers";
import contractABI from "@/web3/contractAbi.json";
import { useIPFS } from "../useIPFS";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { BrowserProvider, JsonRpcProvider, Contract } from "ethers";
import { getCcipMessageId } from "@/web3/helpers";

export const useMinter = () => {
  const { pinJSONToIPFS } = useIPFS();
  const { isConnected, address } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const mintNFT = async (
    nftName: string,
    nftDescription: string,
    imageHash: string
  ) => {
    const pinataResponse = await pinJSONToIPFS({
      pinataContent: {
        image: `ipfs://${imageHash}`,
        name: nftName,
        description: nftDescription,
      },
      pinataMetadata: {
        name: `metadata-${imageHash}`,
      },
    });
    const tokenURI = PINATA_IPS_URL + pinataResponse.ipfsHash.IpfsHash;

    const ethersProvider = new BrowserProvider(walletProvider);

    const signer = await ethersProvider.getSigner();
    const contract = new Contract(CONTRACT_ADDRESS, contractABI.abi, signer); //loadContract();

    try {
      const tx = await contract.mint(
        DESTINATION_CHAIN,
        DESTINATION_MINTER,
        FEES,
        tokenURI,
        {
          gasLimit: 500000,
        }
      );

      const receipt = await tx.wait(1);
      const jsonProvider = new JsonRpcProvider(
        process.env.NEXT_PUBLIC_AVALANCHE_FUJI_RPC_URL
      );

      // not fully working yet (This should be the part thata handles cross chain minting status)
      const messageid = await getCcipMessageId(tx, receipt, jsonProvider);

      console.log(
        "✅ Check out your transaction on Etherscan: https://testnet.snowtrace.io/tx/" +
          tx.hash
      );
      return {
        success: true,
        status:
          "✅ Check out your transaction on Etherscan: https://testnet.snowtrace.io/tx/" +
          tx.hash,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        status: "😥 Something went wrong: " + error,
      };
    }
  };

  return { mintNFT };
};
