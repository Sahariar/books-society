import Head from "next/head";
import Header from "../../components/Dashboard/Header";
import Sidebar from "../../components/Dashboard/Sidebar";
import FeatureSide from "../../components/Dashboard/FeatureSide";
import { useState } from "react";
import { getSession } from "next-auth/react"
const index = () => {

  const [close, setClose] = useState(false);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white flex items-start justify-center">
        <div className={close ? 'w-0 overflow-hidden transition-all duration-300 translate-x-[-100%]' : 'transition-all duration-1000 translate-x-0 w-60'}>
          <Sidebar/>
        </div>
        <section className="grid grid-cols-8 w-full">
          <div className="col-span-6">
          <Header close={close} setClose={setClose}></Header>
          </div>
          <div className="col-span-2">
            <FeatureSide />
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