import Head from "next/head";
import Image from "next/image";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";
import PricingPlans from "../components/HomePage/PricingPlans";
import ApplyForTeacher from "../components/HomePage/ApplyForTeacher";
import HowDoesItWorks from "../components/HomePage/HowDoesItWorks";
import BooksOfTheMonth from "../components/HomePage/BooksOfTheMonth";
import BooksCategories from "../components/HomePage/BooksCategories";
import BestSellers from "../components/HomePage/BestSellers";
import MainHero from '../components/HomePage/MainHero'
import Service from '../components/HomePage/Service'
import Testimonial from "../components/HomePage/Testimonial";
import Newsletter from "../components/HomePage/Newsletter";
import SiteStats from "../components/HomePage/SiteStats";
import AuthorOfTheMonth from "../components/HomePage/AuthorOfTheMonth";

export default function Home() {

  return (
    <>
   <Head>
				<title>
					Book Society
				</title>
				<meta name="description" content="Books Society is place where user can read books and
					test their skill and communicate with like minded." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-base-100">
				<Header></Header>
        <MainHero></MainHero>
        
        <BooksOfTheMonth></BooksOfTheMonth>
        <SiteStats></SiteStats>
        <AuthorOfTheMonth></AuthorOfTheMonth>
        <Service></Service>
        <BestSellers></BestSellers>
         <HowDoesItWorks></HowDoesItWorks>
        <BooksCategories></BooksCategories>
        <ApplyForTeacher></ApplyForTeacher>
        <PricingPlans></PricingPlans>
        <Testimonial></Testimonial>
        <Newsletter></Newsletter>
				<Footer></Footer>
			</main>
    </>
  );
}
