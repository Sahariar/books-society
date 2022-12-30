import clientPromise from "../../../lib/mongodb";

export const getBooks = async () =>{

  const client = await clientPromise;
  let query = {
    isBookOfTheMonth: true
  }
  const booksCollection = client.db('booksdb').collection('bsCollect');
  const bookData = await booksCollection.find(query).toArray();
  return bookData
}

export default async function handler(req, res) {
    const client = await clientPromise;
    const booksCollection = client.db("booksdb").collection('bsCollect');
      const allBooks = await getBooks();
      res?.json({ status: 200, bOTMData: allBooks });

  
}

