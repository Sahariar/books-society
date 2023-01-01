import clientPromise from "../../../lib/mongodb";

export const getCategory = async () =>{

  const client = await clientPromise;
  let query = {
    
  }
  const booksCollection = client.db('booksdb').collection('booksCate');
  const bookData = await booksCollection.find(query).toArray();
  return bookData
}

export default async function handler(req, res) {
      const booksCate = await getCategory();
      res?.json({ status: 200, booksCateData: booksCate });
}