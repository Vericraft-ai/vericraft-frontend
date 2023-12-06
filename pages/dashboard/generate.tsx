import { BackButton } from "@/components/BackButton";
import { Navbar } from "@/components/Navbar";
import { Uploader } from "@/components/Uploader";
import { useHandleInputChange } from "@/hooks/useHandleInputChange";
import {
	Button,
	Input,
	MagnifyingGlassSimpleSVG,
	Textarea,
} from "@ensdomains/thorin";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	padding: 0 10.06rem;

	@media (max-width: 768px) {
		padding: 0 1rem;
	}
`;

export const Row = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	gap: 4rem;
	margin: 9.5rem 0 4rem 0;

	@media (max-width: 768px) {
		flex-direction: column;
		margin: 7rem 0 2rem 0;
	}
`;

export const Col1 = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media (max-width: 768px) {
		width: 100%;
	}
	& > div {
		display: flex;
		flex-direction: row;
		height: 100%;
		width: 100%;
		align-items: center;
		justify-content: space-evenly;
		& > input {
			width: 90%;
			border-top-right-radius: 0px;
			border-bottom-right-radius: 0px;
		}

		& > div > div > div {
			border-top-right-radius: 0px;
			border-bottom-right-radius: 0px;
		}
	}

	.generate {
		text-align: center;
		font-weight: 300;
		font-size: 1.5rem;
		margin-top: auto;
		height: 100%;
		@media (max-width: 768px) {
			margin: 2rem 0;
		}
		& > button {
			border-top-left-radius: 0px;
			border-bottom-left-radius: 0px;
		}
	}

	.generate-image {
		margin-top: 40px;
	}
`;

const Col2 = styled.div`
	height: 100%;
	background-color: ${(props) => props.theme.colors.background};
	width: 50%;

	@media (max-width: 768px) {
		width: 100%;
	}

	& > form {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 3rem;

		label > div {
			font-weight: 700;
			color: #1e2122;
		}
	}

	button {
		background: #000;
	}
`;

export default function GenerateNfts() {
	const { handleChange, generate, isLoading, imgSrc, onSubmit } =
		useHandleInputChange();
	return (
		<>
			<Head>
				<title>Generate Nfts | VericraftAi</title>
			</Head>

			<Container>
				<div>
					<BackButton />
					<Navbar />
				</div>

				<Row>
					<Col1>
						<div>
							<Input
								icon={<MagnifyingGlassSimpleSVG />}
								label=''
								onChange={handleChange}
								placeholder='generate nft with ai'
							/>
							<div className='generate'>
								<Button disabled={isLoading} type='button' onClick={generate}>
									generate
								</Button>
							</div>
						</div>
						<div className='generate-image'>
							{!isLoading && imgSrc && (
								<img
									height={250}
									width={250}
									src={imgSrc}
									alt='generated image'
								/>
							)}
						</div>
					</Col1>
					<Col2>
						<form onSubmit={onSubmit}>
							<Input name='name' label='name' placeholder='name your nft' />
							<Input name='supply' label='supply' placeholder='name your nft' />
							<Input
								name='externalLink'
								label='external link'
								placeholder='https://opensea.io/item/23'
							/>
							<Textarea
								name='description'
								label='description'
								placeholder='Content'
							/>

							<Button type='submit'>create</Button>
						</form>
					</Col2>
				</Row>
			</Container>
		</>
	);
}
