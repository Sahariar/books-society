
import {BsStarHalf ,BsStarFill,BsStar } from "react-icons/bs";
const ReviewStar = ({reviewScore}) => {

    if(reviewScore > 3.00 &&  4.00 > reviewScore ){
        return (
            <>
            <div className="flex gap-2">
           
                            <BsStarFill className="text-amber-400" size={22}/> 
                            <BsStarFill className="text-amber-400" size={22}/> 
                            <BsStarFill className="text-amber-400" size={22}/> 
                            <BsStar className="text-amber-400"size={22}/> 
                            <BsStar className="text-amber-400"size={22}/> 
                            
                            </div>
            </>
        );
    }else if(reviewScore > 4.00 && 4.50 > reviewScore ){
        return (
            <>
            <div className="flex gap-2">
      
                            <BsStarFill className="text-amber-400" size={22}/> 
                            <BsStarFill className="text-amber-400" size={22}/> 
                            <BsStarFill className="text-amber-400" size={22}/> 
                            <BsStarFill className="text-amber-400" size={22}/> 
                            <BsStar className="text-amber-400" size={22}/> 
                     
                            </div>
            </>
        );
    }else if(reviewScore => 4.50 ) {
        return (
            <>
            <div className="flex gap-2">
                            <BsStarFill className="text-amber-400"  size={22}/> 
                            <BsStarFill className="text-amber-400"  size={22}/> 
                            <BsStarFill className="text-amber-400"  size={22}/> 
                            <BsStarFill className="text-amber-400"  size={22}/> 
                            <BsStarHalf className="text-amber-400" size={22}/> 
                        
                            </div>
            </>
        );
    }else{
        <>
            <div className="flex gap-2">
                            <BsStar className="text-amber-400"size={22}/> 
                            <BsStar className="text-amber-400"size={22}/> 
                            <BsStar className="text-amber-400"size={22}/> 
                            <BsStar className="text-amber-400"size={22}/> 
                            <BsStar className="text-amber-400"size={22}/> 
                           
                            </div>
            </>
    }
  
};

export default ReviewStar;