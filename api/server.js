const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const FRESHSALES_DOMAIN = 'your-domain.freshsales.io'; // Replace with your Freshsales domain
const API_TOKEN = 'sfg999666t673t7t82'; // Replace with your actual Freshsales API token

app.post('/create-contact', (req, res) => {
    const { first_name, last_name, email } = req.body;

    const contactData = {
        contact: {
            first_name: first_name,
            last_name: last_name,
            mobile_number: mobile_number
        }
    };

    axios.post(`https://${FRESHSALES_DOMAIN}/api/contacts`, contactData, {
        headers: {
            'Authorization': `Token token=${API_TOKEN}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        res.send('Contact created successfully!');
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
        res.status(500).send('Failed to create contact.');
    });
});

module.exports = app;
