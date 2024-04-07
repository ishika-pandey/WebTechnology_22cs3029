const { MongoClient } = require('mongodb');

async function checkEmail(email) {
    // Connection URI
    const uri = 'mongodb://localhost:27017';
    
    // Create a new MongoClient
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB server
        await client.connect();

        // Access your database
        const database = client.db('Login'); // Replace 'your_database' with the name of your database

        // Access your collection (table)
        const collection = database.collection('users_registrations'); // Replace 'your_collection' with the name of your collection

        // Query the collection
        const result = await collection.findOne({ email: email });

        // Check if the result exists (email is registered)
        if (result) {
            return true;
        } else {
            return false;
        }
    } finally {
        // Close the client connection
        await client.close();
    }
}

// Example usage
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter your email: ', async (email) => {
    const isEmailRegistered = await checkEmail(email);
    if (isEmailRegistered) {
        console.log('<html><head><meta http-equiv="refresh" content="0; URL=\'register.html\'" /></head><body></body></html>');
        // Display more product sections
    } else {
        console.log('<html><head><meta http-equiv="refresh" content="0; URL=\'new_product.html\'" /></head><body></body></html>');
        // Redirect to register.html
    }
    readline.close();
});
