const { MongoClient, ServerApiVersion } = require("mongodb");
const adminUser= process.env.DB_USER;
const adminPass= process.env.DB_PASS;


const uri = `mongodb+srv://${adminUser}:${adminPass}@bookscluster.vs7kkou.mongodb.net/?retryWrites=true&w=majority;`

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverApi: ServerApiVersion.v1,
});

const clientPromise = client.connect()

export default clientPromise;
