// server.js

const express = require('express');
const app = express();
const port = 3000; // You can use any port you prefer

// Middleware for serving static files
app.use(express.static('public')); // Assuming your static files are in a "public" folder

// Parse JSON requests
app.use(express.json());

// Define your dynamic endpoint
app.get('/api/data/:argument', (req, res) => {
    const argument = req.params.argument;
    const responseData = generateResponse(argument);
    res.json(responseData);
});

// Define a function for generating the dynamic response
function generateResponse(argument) {
    // You can customize this function to generate the desired JSON response based on the argument
    return { message: `Response for argument: ${argument}` };
}

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
