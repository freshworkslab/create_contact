const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const FRESHSALES_DOMAIN = 'fwlabscrm.myfreshworks.com/crm/sales'; // Replace with your Freshsales domain
const API_TOKEN = 'QPDW5whjK9BWBzWYc7opbA'; // Replace with your actual Freshsales API token

app.post('/api/create-contact', (req, res) => {
    const { first_name, last_name, email } = req.body;

    const contactData = {
        contact: {
            first_name: first_name,
            last_name: last_name,
            email: email,
            lifecycle_stage_id  :403017878192
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
