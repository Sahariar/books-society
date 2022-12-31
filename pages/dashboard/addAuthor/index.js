import Head from "next/head";
import { useState } from "react";
import Header from "../../../components/Dashboard/Header";
import Sidebar from "../../../components/Dashboard/Sidebar";


const index = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      <Head>
        <title>Add Author</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white flex items-start justify-center">
        <div className={close ? 'w-0 overflow-hidden transition-all duration-300 translate-x-[-100%]' : 'transition-all duration-300 translate-x-0 w-60'}>
          <Sidebar />
        </div>
        <section className="w-full">
            <Header close={close} setClose={setClose}></Header>
            <div>
              {/* Your code will go here and you can remove the h1 bellow. */}
              <h1 className="text-5xl m-6 p-5 rounded-md bg-slate-400">Add Author</h1>
            </div>
        </section>
      </main>
    </>
  );
};

export default index;