import Head from "next/head";
import Footer from "../../components/Shared/Footer";
import Header from "../../components/Shared/Header";
import Link from "next/link";
import { useState } from "react";
import { FaFingerprint } from "react-icons/fa";
import { useFormik } from "formik";
import { registerValidate } from "../../lib/validate";
import { useRouter } from "next/router";
import CustomSelect from "./CustomSelect";
import Spacer from "../../components/Shared/Spacer";
import { toast } from "react-toastify";

const index = () => {
	const [show, setShow] = useState({ password: false, cpassword: false });
	const options = [
		{ value: "freeTrial", label: "Free Trial" },
		{ value: "halfYearly", label: "Half Yearly" },
		{ value: "yearly", label: "Yearly" },
	];
	const rolesOptions = [
		{ value: "student", label: "Student" },
		{ value: "teacher", label: "Teacher" },
	];
	const router  =useRouter();
	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
			cpassword: "",
			subscribe: "",
			roles: "",
		},
		validate: registerValidate,
		onSubmit,
	});
	async function onSubmit(values) {
		console.log(values);
		toast.info('Submission Processing');	
		const options = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(values),
		};
		await fetch("/api/auth/signup", options)
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					toast.success('Registration Success');	
					router.push("/");
				}
			});
	}
	return (
		<>
			<Head>
				<title>Register-</title>
				<meta name="description" content="Register page " />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>

			<main>
				<section className="bg-gray-50 min-h-screen">
        <div className="title-area py-5 bg-neutral">
					<div className="container mx-auto">
						<div className="w-6/12 mx-auto text-white">
						<h2 className="text-4xl  font-bold text-center">Register </h2>
						<div className=" flex justify-center my-10">
				<Spacer></Spacer>	
				</div>
						<p className="mx-auto text-center pb-10">
            If you are Not a member, easily Register
						
						</p>
						</div>
						
					</div>
					</div>
          <div className="flex items-center justify-center">
{/* <!-- login container --> */}
<div className="bg-base-100/60 flex rounded-2xl shadow-lg lg:w-8/12 p-5 items-center my-10">
						{/* <!-- form --> */}
						<div className="md:w-1/2 lg:w-8/12 px-8 md:px-16">
							
							<form
								onSubmit={formik.handleSubmit}
								className="flex flex-col gap-4"
							>
								<input
									className={`p-2 mt-8 rounded-xl ${
										formik.errors.username && formik.touched.username
											? "border-2 border-rose-500"
											: ""
									}`}
									{...formik.getFieldProps("username")}
									type="text"
									name="username"
									placeholder="UserName"
								/>

								<div className="relative">
									<input
										{...formik.getFieldProps("email")}
										className={`p-2 rounded-xl w-full ${
											formik.errors.email && formik.touched.email
												? "border-2 border-rose-500"
												: ""
										}`}
										type="email"
										name="email"
										placeholder="Enter Your Email"
									/>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="gray"
										className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
										viewBox="0 0 16 16"
									>
										<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
										<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
									</svg>
								</div>

								<div className="relative">
									<CustomSelect
										className="p-2 rounded-xl w-full"
										onChange={(value) =>
											formik.setFieldValue("subscribe", value.value)
										}
										value={formik.values.subscribe}
										options={options}
									/>
									{formik.errors.subscribe && formik.touched.subscribe ? (
										<span className="text-red-500">
											{formik.errors.subscribe}
										</span>
									) : (
										<></>
									)}
								</div>

								<div className="relative">
									<CustomSelect
										className="p-2 rounded-xl w-full"
										onChange={(value) =>
											formik.setFieldValue("roles", value.value)
										}
										value={formik.values.roles}
										options={rolesOptions}
									/>
									{formik.errors.job && formik.touched.roles ? (
										<span className="text-red-500">{formik.errors.roles}</span>
									) : (
										<></>
									)}
								</div>

								<div className="relative">
									<input
										{...formik.getFieldProps("password")}
										className={`p-2 rounded-xl w-full ${
											formik.errors.password && formik.touched.password
												? "border-2 border-rose-500"
												: ""
										}`}
										type={`${show.password ? "text" : "password"}`}
										name="password"
										placeholder="Password"
									/>
									<svg
										onClick={() =>
											setShow({ ...show, password: !show.password })
										}
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="gray"
										className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
										viewBox="0 0 16 16"
									>
										<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
										<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
									</svg>
								</div>
								<div className="relative">
									<input
										{...formik.getFieldProps("cpassword")}
										type={`${show.cpassword ? "text" : "password"}`}
										name="cpassword"
										className="p-2 rounded-xl w-full"
										placeholder="Confirm Password"
									/>
									<svg
										onClick={() =>
											setShow({ ...show, cpassword: !show.cpassword })
										}
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="gray"
										className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
										viewBox="0 0 16 16"
									>
										<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
										<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
									</svg>
									<span>
										{formik.errors.cpassword && formik.touched.cpassword ? (
											<span className="text-red-500">
												{formik.errors.cpassword}
											</span>
										) : (
											<></>
										)}
									</span>
								</div>
								<div></div>

								<button
									className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
									type="submit"
								>
									Register
								</button>
							</form>

							<div className="mt-6 grid grid-cols-3 items-center text-gray-400">
								<hr className="border-gray-400" />
								<p className="text-center text-sm">OR</p>
								<hr className="border-gray-400" />
							</div>

							<div className="mt-3 text-lg flex justify-between items-center text-[#002D74]">
								<p>Don't have an account?</p>
                <Link href={'/login'}>
                
								<button className=" py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
									Login
								</button>
                </Link>
							</div>
						</div>

						{/* <!-- image --> */}
						<div className="md:block hidden w-1/2">
							<img
								className="rounded-2xl"
								src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
							/>
						</div>
					</div>
          </div>
					
				</section>
			</main>

			<Footer></Footer>
		</>
	);
};

export default index;

//Authorize user
