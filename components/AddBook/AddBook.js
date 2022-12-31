
const AddBook = () => {
  
   const handleForm = e => {
    e.preventDefault();
    const form = e.target;
  const bookName =form.bookName.value;
  const authorName =form.authorName.value;
  const discription =form.discription.value;
  const ratingText =form.rating.value;
  const rating =  parseFloat(ratingText);
  const pdf =form.pdf.value;
  const category =form.category.value;

     const image = form.image.files[0];
		 console.log(image);
    const formData = new FormData();
    formData.append('image', image);
  const url = `https://api.imgbb.com/1/upload?key=11fc04da286adcf7703cca667df5cdb3`;

    fetch(url, {
      method: 'POST',
      body: formData,
    }).then(res => res.json())
      .then(imageData =>{ 
        console.log(imageData);
        console.log(imageData?.data.url);
         
		const book = {
   
    "picture": imageData.data.url,
    "isBestSeller":false,
    "pdf": pdf,
    "description" : discription,
     "category_id": category,
    "average_rating": rating,
   "author_name": authorName,
     "isBookOfTheMonth": false,
        "books":[
            {
            "books_id":"63ad77a4ef8c2f29f518b6af",
            "books_name":bookName
            }
        ]
 
    
   }

   console.log(book);
    } )
     }

    return (

        
        <section className="w-full mx-auto max-w-[80%] p-8 space-y-3 rounded-xl border-2 shadow-2xl border-white">
	<p className="text-2xl font-bold text-center">Add a Book</p>
    
	<form onSubmit={handleForm}  className="container flex flex-col mx-auto space-y-12   ">
	 <div  className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
 
        	<div className="col-span-full sm:col-span-3">
					<label htmlFor="bookName" className="text-sm">Book Name</label>
					<input id="bookName" type="text" name='bookName'   placeholder="Name" className="w-full px-3  rounded-md h-12 border-2 border-gray-400" required /> 
				</div>
        	<div className="col-span-full sm:col-span-3">
					<label htmlFor="authorName" className="text-sm">Author Name</label>
					<input id="authorName" type="text" name='authorName'    placeholder="Author Name" className="w-full px-3  rounded-md h-12 border-2 border-gray-400" required  /> 
				</div>
      
				<div className="col-span-3">
					<label htmlFor="rating" className="text-sm">Average Rating</label>
					<input id="rating" type="text" name='rating' placeholder="Type Averge Rating" className="w-full px-3 rounded-md h-12 border-2 border-gray-400" required />
				</div>
	
				<div className="col-span-3">
					<label htmlFor="pdf" className="text-sm">Drive Link  Pdf</label>
					<input id="pdf" type="text"  name='pdf' placeholder="Drive Link Pdf"className="w-full rounded-md h-12 px-3 border-2 border-gray-400"  required />
				</div>
				<div className="col-span-full   sm:col-span-3">
              
        <label  className='block mb-2 text-sm'>
          Select Book  Image:
        </label>
        <div htmlFor='image' className='border-dotted border-4 bg-white border-black'> 
        <input
          required
          type='file'
          id='image'
          name='image'
          accept='image/*'
          
        />
        </div>
            
           
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="ClothPrice" className="text-sm">Book Category</label>
					      <select name='category' className="select bg-white  select-ghost border-1 input-bordered w-full" >
           <option value="01" selected>Unknow</option>
     
               <option value="02" >Unknow</option>
               <option value="03" >Unknow</option>
               <option value="03" >Unknow</option>
               <option value="03" >Unknow</option>
     
      </select>
				</div>
          <div className="col-span-full ">
					<label htmlFor="Clothdescription" className="text-sm">Book Description</label>
					<textarea id="Clothdescription" type="number" name='discription' placeholder="Book Description" className="w-full bg-white p-3 rounded-md border-2 border-gray-400"  />
				</div>


			</div>
		 <button type="submit" className='w-full bg-primary py-3 rounded-sm text-white ' >Add To Book</button>
	
	</form>
</section>
  
 


  );
};

export default AddBook;