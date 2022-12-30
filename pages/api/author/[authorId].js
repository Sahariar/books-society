
import { ObjectId } from "bson";
import clientPromise from "../../../lib/mongodb";

export const getAuthorDetails = async (authorId) => {
    const client = await clientPromise;
    let query = {
        _id: new ObjectId ( authorId )
    };
    const booksCollection = client.db('booksdb').collection('author');
    const authorData = await booksCollection.findOne(query);
    return authorData
}

export default async function handler(req, res) {
    const { authorId } = req.query
   
    const authorData = await getAuthorDetails(authorId);
    if(!authorData){
        res.json({status:404, notFound:'Data Not Found'})
    }
    res?.json({ status: 200, authorData: authorData });

}