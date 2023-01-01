
import Image from 'next/image';

const BrandArea = () => {
  const brandAreaInfo = [
    { id:"22972", logo : "https://i.ibb.co/60ZvvKw/brand-1.png", title : "Amazen Corp", description : "A long established fact that a who looking at its layout."},
    { id:"2122", logo : "https://i.ibb.co/wKRNKLs/brand-2.png", title : "Megan Books", description : "A long established fact that a who looking at its layout."},
    { id:"2452",logo : "https://i.ibb.co/8xBpkhp/brand-3-1.png", title : "Los Books", description : "A long established fact that a who looking at its layout."},
    { id:"245312",logo : "https://i.ibb.co/QDZtWW5/brand-4.png", title : "Urban Lib", description : "A long established fact that a who looking at its layout."},
  ]
  return (
   <div className='container mx-auto pt-24'>
    			<div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
				<div className="flex items-center">
					
					<h2 className="text-5xl">
          Trusted by the Best
					</h2>
					
				</div>
				<p className="mx-auto mt-4 text-xl text-center">
					Our New and Old Users 
				</p>
			</div>
    
    <div className='py-3 px-10 lg:px-6 md:px-8 grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-10 justify-around'>
       {
        brandAreaInfo.map(info => <div className='flex justify-center flex-col items-center text-center' key={info.id}>
      <div>
       <Image src={info?.logo} height={50} width={150} alt={info?.title} ></Image>
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
 