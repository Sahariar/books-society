import { CreditCardIcon, HomeIcon, ReceiptRefundIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
const Policy = () => {
  return (
    <div className=''>
          <div className=' py-4 md:py-6 lg:py-8 px-12 lg:px-8 md:px-6 bg-[#FFCA42] grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-8 justify-around'>
      <div className='flex justify-center flex-col items-center text-center'>
      <div>
       <ShieldCheckIcon className='h-10 text-[#1B3764] items-center'></ShieldCheckIcon>

    
      </div>
      <div>
        <p className='font-semibold text-[#1B3764] font-sans'>Secure Payments</p>
      <p className='text-[#1B3764] '>There are many variations of passages of alteration in some form.</p>
      </div>
      </div>
      <div  className='flex justify-center flex-col items-center text-center' >
       <div>
        <HomeIcon className='h-10 text-[#1B3764] items-center'></HomeIcon>

       </div>
       <div>
         <p className='font-semibold text-[#1B3764] font-sans'>Free Shipping</p>
      <p className='text-[#1B3764] '>There are many variations of passages of alteration in some form.</p>
       </div>
      </div>
      <div className='flex justify-center flex-col items-center text-center'>
     <div>
       <ShieldCheckIcon className='h-10 text-[#1B3764] items-center'></ShieldCheckIcon>
     </div>
      <div>
        <p className='font-semibold text-[#1B3764] font-sans'>100% Satisfactions</p>
      <p className='text-[#1B3764] '>There are many variations of passages of alteration in some form.</p>
 
      </div>
      </div>
    </div>
    </div>
  
  );
};

export default Policy;