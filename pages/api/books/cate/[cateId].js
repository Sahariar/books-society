
import { ObjectId } from "bson";
import clientPromise from "../../../../lib/mongodb";


export const getCateBook = async (cateId) =>{
    const client = await clientPromise;
    let query = {
        category_id: cateId
    };
    const booksCollection = client.db('booksdb').collection('bsCollect');
    const bookData = await booksCollection.find(query).toArray();
    return bookData
}

export default async function handler(req, res) {
    const { cateId } = req.query
   
    const bookData = await getCateBook(cateId);
    if(!bookData){
        res.json({status:404, notFound:'Data Not Found'})
    }
    res?.json({ status: 200, bookData: bookData });
}