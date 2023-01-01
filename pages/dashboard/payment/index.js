import Head from "next/head";
import { useState } from "react";
import Header from "../../../components/Dashboard/Header";
import Sidebar from "../../../components/Dashboard/Sidebar";
import { FaCheck } from "react-icons/fa";
import useSWR from 'swr'
import axios from 'axios'
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import Loading from "../../../components/Shared/Loading";

const fetcher = url => axios.post(url).then(res => res.data)
const index = () => {
 
    
	const router = useRouter();
	const { status } = router.query;
	const halfPackage = {id:"prod_N5l3a6FbTFx55Z"};
	const yearlyPackage = {id:"prod_N5l2Y1uCh1pvON"};
    const [loading, setLoading] = useState(false);
	const [close, setClose] = useState(false);
	const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
	const stripePromise = loadStripe(publishableKey);
	const createCheckOutSession = async (pricePackage) => {
		setLoading(true);
		const stripe = await stripePromise;
		// const checkoutSession = await axios.post("/api/stripe/stripe-session", {
		// 	item: pricePackage,
		// });
        
		const response = await fetch("/api/stripe/stripe-session", {
            method: "POST",
            body: JSON.stringify(pricePackage),
            headers: {
                "Content-Type": "application/json",
              },
          });
          const checkoutSession = await response.json();
          console.log(checkoutSession.id);
          
		const result = await stripe.redirectToCheckout({
			 sessionId: checkoutSession.id,
		});
		if (result.error) {
			alert(result.error.message);
		}
		setLoading(false);
	};
	return (
		<>
			<Head>
				<title>Payment</title>
				<meta name="description" content="Payment Area" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="bg-white flex items-start justify-center">
				<div
					className={
						close
							? "w-0 overflow-hidden transition-all duration-300 translate-x-[-100%]"
							: "transition-all duration-300 translate-x-0 w-60"
					}
				>
					<Sidebar />
				</div>
				<section className="w-full">
					<Header close={close} setClose={setClose}></Header>
					{status && status === "success" && (
                        <div className="card shadow-xl w-1/2 text-center mx-auto rounded-xl bg-success m-10 p-10 text-white">
                        <p>
                        Payment Successful
                        </p>
                    </div>
					)}
					{status && status === "cancel" && (
                        <div className="card shadow-xl w-1/2 mx-auto text-center rounded-xl bg-error m-10 p-10 text-white">
                        <p>
                        Payment Unsuccessful
                        </p>
                    </div>
					)}
					<div className="grid grid-cols-1 gap-5 md:grid-cols-3 py-10 w-11/12 mx-auto">
						<div className="bg-white shadow-lg rounded-lg p-10 price-plan">
							<h2 className="text-center text-4xl">Half Yearly</h2>
							<h4 className="text-xl text-center mt-4">
								Only <span className="text-3xl">$</span>{" "}
								<span className="text-primary text-5xl">65</span>
							</h4>
							<hr className="my-5" />
							<ul>
								<li className="flex items-center text-base mb-2">
									<FaCheck className="text-primary" />
									&nbsp;&nbsp;Read books
								</li>
								<li className="flex items-center text-base mb-2">
									<FaCheck className="text-primary" />
									&nbsp;&nbsp;Chat with others
								</li>
								<li className="flex items-center text-base mb-2">
									<FaCheck className="text-primary" />
									&nbsp;&nbsp;Take test
								</li>
								<li className="flex items-center text-base mb-2">
									<FaCheck className="text-primary" />
									&nbsp;&nbsp;Note down
								</li>
								<li className="flex items-center text-base mb-2">
									<FaCheck className="text-primary" />
									&nbsp;&nbsp;Can Read All books
								</li>
								<li className="flex items-center text-base mb-2">
									<FaCheck className="text-primary" />
									&nbsp;&nbsp;Access 6 Months
								</li>
								<li className="flex items-center text-base mb-2">
									<FaCheck className="text-primary" />
									&nbsp;&nbsp;One To one Chat options
								</li>
							</ul>
							<div className="text-center mt-5">
								<button
									className="btn btn-primary rounded w-full lg:w-1/2"
									onClick={() => {
										createCheckOutSession(halfPackage);
									}}
								>
									Subscribe Now
								</button>
							</div>
						</div>
						<div className="bg-white shadow-lg rounded-lg p-10 price-plan">
							<h2 className="text-center text-4xl">Yearly</h2>
							<h4 className="text-xl text-center mt-4">
								Only <span className="text-3xl">$</span>{" "}
								<span className="text-primary text-5xl">99</span>
							</h4>
							<hr className="my-5" />
							<ul>
								<li className="flex items-center text-base mb-2">
									<FaCheck className="text-primary" />
									&nbsp;&nbsp;Read books
								</li>
								<li className="flex items-center text-base mb-2">
									<FaCheck className="text-primary" />
									&nbsp;&nbsp;Chat with others
								</li>
								<li className="flex items-center text-base mb-2">
									<FaCheck className="text-primary" />
									&nbsp;&nbsp;Take test
								</li>
								<li className="flex items-center text-base mb-2">
									<FaCheck className="text-primary" />
									&nbsp;&nbsp;Note down
								</li>
								<li className="flex items-center text-base mb-2">
									<FaCheck className="text-primary" />
									&nbsp;&nbsp;Can Read All books
								</li>
								<li className="flex items-center text-base mb-2">
									<FaCheck className="text-primary" />
									&nbsp;&nbsp;Access 1 years
								</li>
								<li className="flex items-center text-base mb-2">
									<FaCheck className="text-primary" />
									&nbsp;&nbsp;One To one Chat options
								</li>
							</ul>
							<div className="text-center mt-5">
								<button
									className="btn btn-primary rounded w-full lg:w-1/2"
									onClick={() => {
										createCheckOutSession(yearlyPackage);
									}}
								>
									Subscribe Now
								</button>
							</div>
						</div>
					</div>
                    <div className="card shadow-xl w-1/2 mx-auto  text-center rounded-xl bg-secondary/10 m-10 p-10">
                        <p>
                        Use test card for testing.
                        </p>
                        <p>Card Number: 4242 4242 4242 4242 </p>
                      
                    </div>
				</section>
                <section>
                    
                </section>
			</main>
		</>
	);
};

export default index;
