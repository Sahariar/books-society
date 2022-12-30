import Head from "next/head";
import Header from "../../../components/Dashboard/Header";
import Sidebar from "../../../components/Dashboard/Sidebar";
import FeatureSide from "../../../components/Dashboard/FeatureSide";


const index = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white">
        <section className="grid grid-cols-10">
          <div className="col-span-2">
            <Sidebar/>
          </div>
          <div className="col-span-5">
          <Header></Header>
          </div>
          <div className="col-span-3">
            <FeatureSide />
          </div>
        </section>
      </main>
    </>
  );
};

export default index;