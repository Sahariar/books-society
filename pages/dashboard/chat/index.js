import Head from "next/head";
import Header from "../../../components/Dashboard/Header";
import Sidebar from "../../../components/Dashboard/Sidebar";
import { getSession, useSession } from "next-auth/react";
import { useState } from "react";

const index = () => {

  const [close, setClose] = useState(false);
  return (
    <>
      <Head>
        <title>Chat</title>
        <meta name="description" content="Chat work" />
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
                <h1 className="text-5xl m-6 p-5 rounded-md bg-base-100/60 w-full max-w-[80%]  ml-10 space-y-3">Chat with your Peer</h1>
            </div>
            
            
        </section>
      </main>
    </>
  );
};

export default index;


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