import { getSession } from "next-auth/react"
import Link from "next/link"

export default({userData})=>{
console.log(userData);
   return(
    <section>
    <h1  className="text-red-500">Home page</h1>
    <Link href={"/"}></Link>
</section>
   )
}

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