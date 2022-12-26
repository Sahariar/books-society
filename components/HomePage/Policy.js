import { CreditCardIcon, HomeIcon, ReceiptRefundIcon } from '@heroicons/react/24/solid';
const Policy = () => {
  return (
    <div className=' py-3 grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-8 justify-around'>
      <div className='flex justify-center flex-col items-center text-center'>
      <div>
        <HomeIcon className='h-10 text-blue-400 items-center'></HomeIcon>
      </div>
      <div>
        <p className='font-semibold text-black font-sans'>FREE SHIPPING</p>
      <p className='text-gray-600 '>On all orders over $50.00</p>
      </div>
      </div>
      <div  className='flex justify-center flex-col items-center text-center' >
       <div>
     <CreditCardIcon className='h-10 text-blue-400 items-center'></CreditCardIcon>

       </div>
       <div>
         <p className='font-semibold text-black font-sans'>100% PAYMENT SECURE</p>
      <p className='text-gray-600 '>We ensure secure payment with PEV</p>
       </div>
      </div>
      <div className='flex justify-center flex-col items-center text-center'>
     <div>
       <ReceiptRefundIcon className='h-10 text-blue-400 items-center'></ReceiptRefundIcon>
     </div>
      <div>
        <p className='font-semibold text-black font-sans'>30 DAYS GUARANTEE</p>
      <p className='text-gray-600 '>30-days free return policy</p>

      </div>
      </div>
    </div>
  );
};

export default Policy;