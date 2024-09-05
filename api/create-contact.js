const axios = require('axios');

// Replace with your Freshsales domain and API token
const FRESHSALES_DOMAIN = 'fwlabscrm.myfreshworks.com/crm/sales'; 
const API_TOKEN = 'QPDW5whjK9BWBzWYc7opbA';  

// Export a function directly
module.exports = async (req, res) => {
  if (req.method === 'POST') {
    const { first_name, last_name, email } = req.body;

    const contactData = {
      contact: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        lifecycle_stage_id: 403017878192
      }
    };

    try {
      const response = await axios.post(`https://${FRESHSALES_DOMAIN}/api/contacts`, contactData, {
        headers: {
          'Authorization': `Token token=${API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      });

      // Return success response
      res.status(200).send('Contact created successfully!');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      // Return error response
      res.status(500).send('Failed to create contact.');
    }
  } else {
    // Return error if method is not POST
    res.status(405).send('Method Not Allowed');
  }
};
