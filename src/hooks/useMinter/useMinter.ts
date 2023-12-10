import { CONTRACT_ADDRESS, PINATA_IPS_URL } from "@/consts";
import contractABI from "@/web3/contractAbi.json";
import { useIPFS } from "../useIPFS";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { BrowserProvider, Contract } from "ethers";

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

    //sign transaction via Metamask
    try {
      const tx = await contract.mint(address, tokenURI);
      console.log(tx);
      return {
        success: true,
        status:
          "✅ Check out your transaction on Etherscan: https://goerli.etherscan.io/tx/" +
          tx,
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
