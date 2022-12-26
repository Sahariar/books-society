import React from 'react';
import { BsBookFill, BsPencilSquare } from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';
import { RiPriceTag3Fill, RiQuillPenFill } from 'react-icons/ri';
import { FaBoxOpen } from 'react-icons/fa';

const Service = () => {
    return (
        <div className='mb-16 py-10'>
            <section className="m-4 md:m-8 bg-gray-100 text-gray-800">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                    <h2 className="text-4xl font-bold"> Our Services</h2>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center p-6">
                        <div className=' bg-blue-200 rounded-full p-4'>
                            <BsBookFill className='text-blue-500 text-4xl'></BsBookFill>
                        </div>
                        <h3 className="my-3 text-3xl font-semibold">Reading Book</h3>
                        {/* <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div> */}
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <div className=' bg-blue-200 rounded-full p-4'>
                            <RiQuillPenFill className='text-blue-500 text-4xl'></RiQuillPenFill>
                        </div>
                        <h3 className="my-3 text-3xl font-semibold">Knowledge Judgement</h3>
                        {/* <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div> */}
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <div className=' bg-blue-200 rounded-full p-4'>
                            <BsPencilSquare className='text-blue-500 text-4xl'></BsPencilSquare>
                        </div>
                        <h3 className="my-3 text-3xl font-semibold">Take Notes</h3>
                        {/* <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div> */}
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <div className=' bg-blue-200 rounded-full p-4'>
                            <RiPriceTag3Fill className='text-blue-500 text-4xl'></RiPriceTag3Fill>
                        </div>
                        <h3 className="my-3 text-3xl font-semibold">Subscription Base</h3>
                        {/* <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div> */}
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <div className=' bg-blue-200 rounded-full p-4'>
                            <FaBoxOpen className='text-blue-500 text-4xl'></FaBoxOpen>
                        </div>
                        <h3 className="my-3 text-3xl font-semibold">Free Trial</h3>
                        {/* <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div> */}
                    </div>
                    <div className="flex flex-col items-center p-4">
                        <div className=' bg-blue-200 rounded-full p-4'>
                            <BiCategory className='text-blue-500 text-4xl'></BiCategory>
                        </div>
                        <h3 className="my-3 text-3xl font-semibold">Filter out System</h3>
                        {/* <div className="space-y-1 leading-tight">
                            <p>Similique quas ea veniam</p>
                            <p>Tempore quasi porro</p>
                            <p>Blanditiis aut mollitia ex</p>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Service;