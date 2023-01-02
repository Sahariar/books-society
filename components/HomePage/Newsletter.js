import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { toast } from "react-toastify";
const Newsletter = () => {
	 const form = useRef();
	 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a5kmukr', 'template_xphzseh', form.current, 'WG_nUYz2Zy2jFfbTA')
      .then((result) => {
          console.log(result.text);
					toast.success("Subscription  successfully")
					  e.target.reset();
				
      },(error) => {
          console.log(error.text);
      });
  };                  
    return (
        <section className="w-full py-20">
	<div className="container rounded-xl flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-48 bg-primary">
		<div className="w-full lg:w-6/12 mx-auto">
		<h1 className="text-5xl antialiased font-semibold leading-none text-center text-black">Get Our Updates</h1>
		<p className="pt-2 pb-8 text-xl antialiased text-center  text-black">Making this the first true value generator on the Internet. It of over 200 Latin words, combined with a handful.</p>
		<form ref={form} onSubmit={sendEmail} className="flex flex-row">
			<input type="text" name="from_email" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" required />
			<button type="button" className="w-2/5 p-3 text-[14px] cursor-pointer  font-semibold rounded-r-lg sm:w-1/3 bg-neutral text-white" >Subscription</button>
		</form>
		</div>
	
	</div>
</section>
    );
};

export default Newsletter;