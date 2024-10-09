// src/app/api/users/route.js
import clientPromise from '../../lib/mongodb'; // This should be the correct path

export async function GET(req) {
    console.log("API route hit"); // For debugging

    try {
        const client = await clientPromise;
        const db = client.db('Genie'); // Ensure this matches your DB name

        const collection = db.collection('myCollection'); // Ensure this is the correct collection
        const users = await collection.find({}).toArray(); // Fetch data from the collection

        return new Response(JSON.stringify(users), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error); // Log error for better debugging
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
