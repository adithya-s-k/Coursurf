import { MongoClient } from 'mongodb';

async function getData() {
  const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const collection = client.db('courses').collection('providers');
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
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
