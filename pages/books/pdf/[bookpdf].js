import Head from "next/head";
import React from "react";
import Header from "../../../components/Shared/Header";
import dynamic from "next/dynamic";
import Footer from "../../../components/Shared/Footer";
import { Router, useRouter } from "next/router";
import Loading from "../../../components/Shared/Loading";
import Spacer from "../../../components/Shared/Spacer";
import { getSession } from "next-auth/react";

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
		case "63b26764f388c893a41b7672":
			npdfLink = "/pdf/give.pdf"
			break;
		case '63b26764f388c893a41b7676':
			npdfLink = "/pdf/badass.pdf"
			break;
		case "63b26764f388c893a41b7678":
			npdfLink = "/pdf/what.pdf"
			break;
		case "63b26764f388c893a41b767a":
			npdfLink = "/pdf/Stop_Worrying.pdf"
			break;
		case "63b26764f388c893a41b767a":
			npdfLink = "/pdf/living.pdf"
			break;
		case "63b26764f388c893a41b767e":
			npdfLink = "/pdf/Hillbilly.pdf"
			break;
		case '63b26764f388c893a41b7680':
			npdfLink = "/pdf/theArtofWar.pdf"
			break;
		case "63b26764f388c893a41b7683":
			npdfLink = "/pdf/yoga.pdf"
			break;
		case "63b26764f388c893a41b7686":
			npdfLink = "/pdf/Howtokill.pdf"
			break;
		case "63b26764f388c893a41b7688":
			npdfLink = "/pdf/miracle.pdf"
			break;
		case "63b26764f388c893a41b768a":
			npdfLink = "/pdf/drawing.pdf"
			break;
		case "63b26764f388c893a41b767d":
			npdfLink = "/pdf/living.pdf"
			break;
		default:
			npdfLink = ""
			break;
	}

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
				<div className="w-4/12 mx-auto my-20">
					<PDFViewer pdfLink={npdfLink} />
				</div>
			</main>

			<Footer></Footer>
		</>
	);
};




export default bookpdf;


export async function getServerSideProps({req}){

	const session=await getSession({req})
	if(!session){
	 return{
	   redirect:{
		 destination: '/login',
	   permanent:false
	 }
	 }
	}
	return {
	 props:{
		userData:{...session}
	  }
	}
  }