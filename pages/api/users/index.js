import clientPromise from "../../../lib/mongodb";

export const getUsers = async () =>{
  const client = await clientPromise;
  let query = {
  };
  const usersCollection = client.db('booksdb').collection('users');
  const usersData = await usersCollection.find({}).toArray();
  return usersData;
}
export const addBook = async (postData) =>{
  const client = await clientPromise;
  const usersCollection = client.db('booksdb').collection('users');
  const userData = await usersCollection.insertOne(postData);
  return userData.insertedId;
}
export default async function handler(req, res) {
  switch (req?.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      const insertedId = await addUser(bodyObject)
      res.status(200).json(insertedId);
      break;
    case "GET":
      const allUsers = await getBooks();
      res?.json({ status: 200, data: allUsers });
      break;
  }
}

