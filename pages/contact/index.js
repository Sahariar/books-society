import Head from "next/head";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
 
import Newsletter from "../../components/HomePage/Newsletter";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import Spacer from "../../components/Shared/Spacer";
import { toast } from "react-toastify";

const index = () => {
		 const form = useRef();
	

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a5kmukr', 'template_57maeao', form.current, 'WG_nUYz2Zy2jFfbTA')
      .then((result) => {
          console.log(result.text);
					toast.success("Message send successfully")
					  e.target.reset();
				
      },(error) => {
          console.log(error.text);
      });
  };
	return (
		<>
			<Head>
				<title>Contact-Book Society</title>
				<meta name="description" content="Contact Page of Book Society" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>

			<main>
				<section className="pb-10">
					<div className="title-area py-5 bg-neutral">
						<div className="container mx-auto">
							<div className="w-6/12 mx-auto text-white">
								<h2 className="text-4xl  font-bold text-center">
									Contact Books Society
								</h2>
								<div className=" flex justify-center my-10">
									<Spacer></Spacer>
								</div>
								<p className="mx-auto text-center pb-10">
									Improving vocabulary and language skills: Reading exposes you
									to new words and concepts, which can help to expand your
									vocabulary and improve your language skills. Promoting
									concentration and
								</p>
							</div>
						</div>
					</div>
					<div className="container mx-auto py-20">
						<div className="py-6">
							<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
								<div className="py-6 md:py-0 md:px-6">
									<h1 className="text-4xl font-bold">Get in touch</h1>
									<p className="pt-2 pb-4">
										Fill in the form to start a conversation
									</p>
									<div className="space-y-4">
										<p className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												className="w-5 h-5 mr-2 sm:mr-6"
											>
												<path
													fillRule="evenodd"
													d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>dhaka-1000, 9999 City</span>
										</p>
										<p className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												className="w-5 h-5 mr-2 sm:mr-6"
											>
												<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
											</svg>
											<span>+88017234567</span>
										</p>
										<p className="flex items-center">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												className="w-5 h-5 mr-2 sm:mr-6"
											>
												<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
												<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
											</svg>
											<span>icaruscoders@gmail.com</span>
										</p>
									</div>
								</div>
							<form ref={form} onSubmit={sendEmail} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
								<h1 className="text-4xl font-bold">Contact Form</h1>

			<label className="block">
				<span className="mb-1 ">Full name</span>
				<input  type="text" name="to_name" placeholder="Full Name" className="block w-full rounded-md shadow-sm py-3 text-black bg-white px-2" required/>
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input  type="email" name="from_email" placeholder="Your Email" className="block w-full rounded-md shadow-sm py-3 text-black bg-white px-2" required  />
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="3"  name="message"  placeholder='Type your Message' className="block w-full rounded-md bg-white text-black px-2 py-3" required></textarea>
			</label>
			<input  type="submit" className="cursor-pointer px-8 py-3 text-lg rounded text-white  bg-emerald-500" value="Send"></input>
		</form>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Newsletter></Newsletter>
			<Footer></Footer>
		</>
	);
};

export default index;
