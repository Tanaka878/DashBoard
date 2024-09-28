import clientPromise from '../../lib/mongodb';


export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db('Genie'); 

    const collection = db.collection('myCollection'); 
    const users = await collection.find({}).toArray();

    return new Response(JSON.stringify(users), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
