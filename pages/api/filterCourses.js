import { MongoClient } from 'mongodb';

async function getData() {
  const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connecting to MongoDB...');
  await client.connect();
  console.log('Connected to MongoDB');

  const collection = client.db('courses').collection('providers');
  console.log('Fetching data from the collection...');
  const data = await collection.find({}).toArray();
  console.log('Data fetched successfully');

  console.log('Closing MongoDB connection...');
  await client.close();
  console.log('MongoDB connection closed');
  
  return data;
}

export default async function handler(req, res) {
  try {
    console.log('Handler function called');
    const data = await getData();
    const copiedArr = data.slice(1);
    res.status(200).json(copiedArr);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
