
import Image from 'next/image';

const BrandArea = () => {
  const brandAreaInfo = [
    { id:"22972", logo : "https://i.ibb.co/60ZvvKw/brand-1.png", title : "Amazen Corp", description : "A long established fact that a who looking at its layout."},
    { id:"2122", logo : "https://i.ibb.co/wKRNKLs/brand-2.png", title : "Megan Books", description : "A long established fact that a who looking at its layout."},
    { id:"2452",logo : "https://i.ibb.co/8xBpkhp/brand-3-1.png", title : "Los Books", description : "A long established fact that a who looking at its layout."},
    { id:"245312",logo : "https://i.ibb.co/QDZtWW5/brand-4.png", title : "Urban Lib", description : "A long established fact that a who looking at its layout."},
  ]
  return (
   <div className='container mx-auto'>
    <p className='text-center  pt-10 pb-6 text-4xl font-bold text-[#1B3764]'>Trusted by the Best</p>
    <div className='py-3 px-10 lg:px-6 md:px-8 grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-10 justify-around'>
       {
        brandAreaInfo.map(info => <div className='flex justify-center flex-col items-center text-center' key={info.id}>
      <div>
       <Image src={info?.logo} height={50} width={150} ></Image>
      </div>
      <div>
        <p className='font-semibold text-2xl  text-[#1B3764]  font-sans'>{info?.title}</p>
      <p className=' text-[#727579] text-lg'>{info?.description}</p>
      </div>
      </div>)
       }
    </div>
   </div>
  );
};

export default BrandArea;
 