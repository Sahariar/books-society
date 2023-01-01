import Head from "next/head";
import Header from "../../../components/Dashboard/Header";
import Sidebar from "../../../components/Dashboard/Sidebar";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import { getSession, useSession } from "next-auth/react";
let socket;

const index = () => {
  const{data:session}=useSession();
  
  const [close, setClose] = useState(false);
  const [username, setUsername] = useState(session?.user.email);
  const [chosenUsername, setChosenUsername] = useState(session?.user.email);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  console.log("data" , session?.user.email ,chosenUsername);
  useEffect(() => {
    socketInitializer();
  }, []);
  const socketInitializer = async () => {
    // We just call it because we don't need anything else out of it
    await fetch("/api/socket");

    socket = io();

    socket.on("newIncomingMessage", (msg) => {
      setMessages((currentMsg) => [
        ...currentMsg,
        { author: msg.author, message: msg.message },
      ]);
      console.log(messages);
    });
  };
  const sendMessage = async () => {
    socket.emit("createdMessage", { author: chosenUsername, message });
    setMessages((currentMsg) => [
      ...currentMsg,
      { author: chosenUsername, message },
    ]);
    setMessage("");
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      if (message) {
        sendMessage();
      }
    }
  };


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
            
            {!chosenUsername ? (
          <>
            <h3 className="font-bold text-white text-xl">
              How people should call you?
            </h3>
            <input
              type="text"
              placeholder="Identity..."
              value={username}
              className="p-3 rounded-md outline-none"
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              onClick={() => {
                setChosenUsername(username);
              }}
              className="bg-white rounded-md px-4 py-2 text-xl"
            >
              Go!
            </button>
          </>
        ) : (
          <>
            <p className="font-bold text-white text-xl">
              Your username: {username}
            </p>
            <div className="flex flex-col justify-end bg-base-100/60 w-full max-w-[80%]  ml-10 space-y-3 h-[20rem] p-20 rounded-md shadow-md ">
              <div className="h-full last:border-b-0 overflow-y-scroll">
                {messages.map((msg, i) => {
                  return (
                    <div
                      className="w-full py-1 px-2 border-b border-gray-200"
                      key={i}
                    >
                      {msg.author} : {msg.message}
                    </div>
                  );
                })}
              </div>
              <div className="border-t border-gray-300 w-full flex rounded-bl-md">
                <input
                  type="text"
                  placeholder="New message..."
                  value={message}
                  className="outline-none py-2 px-2 rounded-bl-md flex-1"
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={handleKeypress}
                />
                <div className="border-l border-gray-300 flex justify-center items-center  rounded-br-md group btn-primary btn transition-all">
                  <button
                    className="group-hover:text-white px-3 h-full "
                    onClick={() => {
                      sendMessage();
                    }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
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