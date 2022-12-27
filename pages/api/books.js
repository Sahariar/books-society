import clientPromise from "../../lib/mongodb";


const booksSociety = async (req ,res) => {
    try{
        const client = await clientPromise;
        const booksCollection = client.db("booksdb").collection('bsCollect');
        let query = {};
			const result = await booksCollection.find(query).toArray();
            res.send(result);
    }catch (e) {
        console.error(e);
    }
};
export default booksSociety;