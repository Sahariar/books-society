import Head from "next/head";
import React from "react";
import Header from "../../../components/Shared/Header";
import dynamic from "next/dynamic";
import Footer from "../../../components/Shared/Footer";
import { Router, useRouter } from "next/router";
import Loading from "../../../components/Shared/Loading";
import Spacer from "../../../components/Shared/Spacer";

const bookpdf = ({ pdfLink }) => {
	const PDFViewer = dynamic(
		() => import("../../../components/Books/Pdf/PdfViewer"),
		{
			ssr: false,
		}
	);
	const router = useRouter();
	const id = router.query.bookpdf
	if (router.isFallback) {
		return <Loading></Loading>;
	}
	let npdfLink;
	switch (id) {
		case "63ad77a4ef8c2f29f518b6a8":
			npdfLink = "/pdf/give.pdf"
			break;
		case '63ad77a4ef8c2f29f518b6ab':
			npdfLink = "/pdf/badass.pdf"
			break;
		case "63ad77a4ef8c2f29f518b6b1":
			npdfLink = "/pdf/Stop_Worrying.pdf"
			break;
		case "63ad77a4ef8c2f29f518b6a7":
			npdfLink = "/pdf/living.pdf"
			break;
		case "63ad77a4ef8c2f29f518b6af":
			npdfLink = "/pdf/Hillbilly.pdf"
			break;
		case '63b0849f61b4f157cdc75b09':
			npdfLink = "/pdf/theArtofWar.pdf"
			break;
		case "63ad77a4ef8c2f29f518b6ae":
			npdfLink = "/pdf/yoga.pdf"
			break;
		case "63ad77a4ef8c2f29f518b6ac":
			npdfLink = "/pdf/Howtokill.pdf"
			break;
		case "63ad77a4ef8c2f29f518b6b0":
			npdfLink = "/pdf/miracle.pdf"
			break;
		case "63ad77a4ef8c2f29f518b6ad":
			npdfLink = "/pdf/drawing.pdf"
			break;
		case "63b0849f61b4f157cdc75b07":
			npdfLink = "/pdf/living.pdf"
			break;
		default:
			npdfLink = ""
			break;
	}
	console.log(id , npdfLink);
	return (
		<>
			<Head>
				<title>PDF Area</title>
				<meta name="description" content="info" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>

			<main>
			<div className="title-area py-5 bg-neutral">
						<div className="container mx-auto">
							<div className="w-6/12 mx-auto text-white">
								<h2 className="text-4xl  font-bold text-center">
									PDF Books Details
								</h2>
								<div className=" flex justify-center my-10">
									<Spacer />
								</div>
								<p className="mx-auto text-center pb-10">
									Improving vocabulary and language skills: Reading exposes you
									to new words and concepts.
								</p>
							</div>
						</div>
					</div>
				<div className="w-1/2 mx-auto my-20">
					<PDFViewer pdfLink={npdfLink} />
				</div>
			</main>

			<Footer></Footer>
		</>
	);
};




export default bookpdf;
