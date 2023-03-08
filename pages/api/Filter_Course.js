import { MongoClient } from "mongodb";

async function getData() {
  const uri =
    "mongodb+srv://adithyask:adithyask@courses.9v6zz7i.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const collection = client.db("courses").collection("providers");
  const data = await collection.find({}).toArray();
  await client.close();
  return data;
}

export default async function handler(req, res) {
  try {
    const data = await getData();
    const copiedArr = data.slice(1);
    res.status(200).json(copiedArr);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
