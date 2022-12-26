import Image from "next/image";

const BrandArea = () => {
  return (
    <div className='bg-gray-200 lg:px-12 md:px-8 px-6 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5'>
      
      <div>
         <Image className="hover:shadow-lg" src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/brand_1.svg"    alt="Picture of the Brand"
        width={400}
        height={250} ></Image>
      </div>
      <div>
         <Image src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/brand_2.svg"  alt="Picture of the Brand"
         width={400}
        height={250} ></Image>
      </div>
      <div>
         <Image src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/brand_3.svg"  alt="Picture of the Brand"
         width={400}
        height={250} ></Image>
      </div>
      <div>
         <Image src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/brand_4.svg"   alt="Picture of the Brand"
        width={400}
        height={250} ></Image>
      </div>
      <div>
         <Image src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/brand_5.svg" alt="Picture of the Brand"
        width={400}
        height={250} ></Image>
      </div>
      <div>
         <Image src="https://demo2.pavothemes.com/bookory/wp-content/uploads/2022/02/brand_6.svg" alt="Picture of the Brand"
        width={400}
        height={250} ></Image>
      </div>
 
    </div>
  );
};

export default BrandArea;
