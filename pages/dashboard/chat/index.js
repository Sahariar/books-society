import Head from "next/head";
import Header from "../../../components/Dashboard/Header";
import Sidebar from "../../../components/Dashboard/Sidebar";
import Chat from "../../../components/Dashboard/Chat/Chat";


const index = () => {
  return (
    <>
      <Head>
        <title>Chat</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white">
        <section className="grid grid-cols-10">
          <div className="col-span-2">
            <Sidebar/>
          </div>
          <div className="col-span-8">
            <Header></Header>
            <Chat/>
          </div>
        </section>
      </main>
    </>
  );
};

export default index;