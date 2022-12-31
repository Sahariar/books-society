import Head from "next/head";
import { useState } from "react";
import Header from "../../../components/Dashboard/Header";
import Sidebar from "../../../components/Dashboard/Sidebar";
import { FaEdit, FaTrash } from 'react-icons/fa';


const index = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      <Head>
        <title>All Books</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white flex items-start justify-center">
        <div className={close ? 'w-0 overflow-hidden transition-all duration-300 translate-x-[-100%]' : 'transition-all duration-300 translate-x-0 w-60'}>
          <Sidebar />
        </div>
        <section className="w-full">
            <Header close={close} setClose={setClose}></Header>
            <div className="m-6">
                <h1 className="text-2xl pb-5 rounded-md">All Books</h1>
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th>SL</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Readers</th>
                        <th>Subscriptions</th>
                        <th>Is Best Seller</th>
                        <th className="w-10">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <select className="select w-full bg-white" defaultValue={0}>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </select>
                        </td>
                        <td>
                          <button title="Edit" className="btn btn-sm btn-warning mr-2 text-white hover:bg-orange-400"><FaEdit/></button>
                          <button title="Delete" className="btn btn-sm btn-error bg-red-600"><FaTrash/></button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <select className="select w-full bg-white" defaultValue={0}>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </select>
                        </td>
                        <td>
                          <button title="Edit" className="btn btn-sm btn-warning mr-2 text-white hover:bg-orange-400"><FaEdit/></button>
                          <button title="Delete" className="btn btn-sm btn-error bg-red-600"><FaTrash/></button>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <select className="select w-full bg-white" defaultValue={0}>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                          </select>
                        </td>
                        <td>
                          <button title="Edit" className="btn btn-sm btn-warning mr-2 text-white hover:bg-orange-400"><FaEdit/></button>
                          <button title="Delete" className="btn btn-sm btn-error bg-red-600"><FaTrash/></button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
        </section>
      </main>
    </>
  );
};

export default index;