import clientPromise from "../../../lib/mongodb";

export const getBooks = async (dataQuery) =>{
  const client = await clientPromise;
  let query;
  if(dataQuery === "bookOfTheMonth"){
    query = {
      isBookOfTheMonth :  true
    }
  }else if(dataQuery === "bestSeller"){
    query = {
      isBestSeller: true
    }
  }else{
    query = {

    }
  }
  const booksCollection = client.db('booksdb').collection('bsCollect');
  const bookData = await booksCollection.find(query).toArray();
  return bookData
}
export const addBook = async (postData) =>{
  const client = await clientPromise;
  const booksCollection = client.db('booksdb').collection('bsCollect');
  const bookData = await booksCollection.insertOne(postData);
  return bookData.insertedId;
}
export default async function handler(req, res) {
    const client = await clientPromise;
    const booksCollection = client.db("booksdb").collection('bsCollect');
  switch (req?.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      const insertedId = await addBook(bodyObject)
      res.status(200).json(insertedId);
      break;
    case "GET":
      const allBooks = await getBooks();
      res?.json({ status: 200, data: allBooks });
      break;
  }
}

