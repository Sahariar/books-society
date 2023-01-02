import Head from "next/head";
import { useState } from "react";
import { getSession, useSession } from "next-auth/react";
import Header from "../../../components/Dashboard/Header";
import Sidebar from "../../../components/Dashboard/Sidebar";
import FeatureSide from "../../../components/Dashboard/FeatureSide";


const profile = () => {
    const [close, setClose] = useState(false);    
    const{data:session}=useSession()
    
    return (
        <>
        <Head>
            <title>Dashboard</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="bg-white flex items-start justify-center">
            <div
                className={
                    close
                        ? "w-0 overflow-hidden transition-all duration-300 translate-x-[-100%]"
                        : "transition-all duration-1000 translate-x-0 w-60"
                }
            >
                <Sidebar />
            </div>
            <section className="grid grid-cols-8 w-full">
                <div className="col-span-6">
                    <Header close={close} setClose={setClose}></Header>
                
                <div className="user-info">
                    <div className="card rounded-lg shadow-lg w-1/2 mx-auto p-10 my-10">
                        <div className="flex ">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
									<img src={"https://placeimg.com/80/80/people"} className="ring-primary rounded-full" />
						</div>
               <div className="info ml-5">
               <h2 className="text-2xl"> User Name :  {session?.user.email.slice(0 ,-10)}</h2>
                <h2 className="text-2xl"> User Email :  {session?.user.email}</h2>
               </div>
                        </div>
                
                 
                    </div>
               
                </div>
 
                </div>

                <div className="col-span-2">
                    <FeatureSide />
                </div>
            </section>

            <section></section>
        </main>
    </>
    );
};

export default profile;