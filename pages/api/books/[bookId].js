
import { ObjectId } from "bson";
import clientPromise from "../../../lib/mongodb";

export const getBookDetails = async (bookId) =>{
    const client = await clientPromise;
    let query = {
        _id: new ObjectId ( bookId )
    };
    const booksCollection = client.db('booksdb').collection('bsCollect');
    const bookData = await booksCollection.findOne(query);
    return bookData
}

export default async function handler(req, res) {
    const { bookId } = req.query
   
    const bookData = await getBookDetails(bookId);
    if(!bookData){
        res.json({status:404, notFound:'Data Not Found'})
    }
    res?.json({ status: 200, bookData: bookData });

}