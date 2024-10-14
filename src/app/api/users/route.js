// src/app/api/users/route.js
import clientPromise from '../../lib/mongodb';

export async function GET(req) {
    console.log("API route hit"); // For debugging

    try {
        // Connect to the MongoDB client
        const client = await clientPromise;
        const db = client.db('Genie'); // Ensure this matches your DB name

        // Specify the collection you're working with
        const collection = db.collection('myCollection'); // Ensure the collection name is correct
        
        // Fetch all documents in the collection
        const users = await collection.find({}).limit(10).toArray(); // Limit the number of documents fetched

        
        // Log the retrieved data for debugging
        console.log("Data fetched from MongoDB:", users);
        console.log("Endpoint successfully invoked");

        // Return the data as a response
        return new Response(JSON.stringify(users), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        // Log the error for more detailed debugging information
        console.error("Error fetching data from MongoDB:", error);
        
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
