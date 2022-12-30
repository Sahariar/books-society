import clientPromise from "../../../lib/mongodb";

export const getAuthor = async () =>{
  const client = await clientPromise;
  let query = {
    }
  
  const authorCollection = client.db('booksdb').collection('author');
  const bookData = await authorCollection.find(query).toArray();
  return bookData
}
export const addAuthor = async (postData) =>{
  const client = await clientPromise;
  const authorCollection = client.db('booksdb').collection('author');
  const bookData = await authorCollection.insertOne(postData);
  return bookData.insertedId;
}
export default async function handler(req, res) {
  switch (req?.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      const insertedId = await addBook(bodyObject)
      res.status(200).json(insertedId);
      break;
    case "GET":
      const allAuthor = await getAuthor();
      res?.json({ status: 200, data: allAuthor });
      break;
  }
}

