import express, { json } from 'express';
import axios from 'axios';
import qs from 'qs';

const app = express();
const port = 3000;

const shopName = 'bba8ca-3'
const apiKey = '803d9661f794283419b58bcb4a2724fb';
const password = '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';

// Base64 encode your credentials
const base64Credentials = Buffer.from(`${apiKey}:${password}`).toString('base64');

// The API endpoint to create a checkout session
const apiUrl = `https://${shopName}.myshopify.com/admin/api/2022-04/checkouts.json`;

// Product Variant ID and Quantity
const variantId = 43693551124641; // Extracted from your provided product data
const quantity = 1; // Quantity you want to order





const createCart = async () => {
    const url = `https://${shopName}.myshopify.com/admin/api/2024-01/checkouts.json`;
    const auth = Buffer.from(`${apiKey}:${password}`).toString('base64');
  
    try {
      const response = await axios.post(url, {
        checkout: {
          line_items: [
            {
              variant_id: variantId,
              quantity: quantity
            }
          ]
        }
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${auth}`
        }
      });
  
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  createCart();

app.use(json());

app.get('/', (_req, res) => {
    res.send("Hello Shopify!");
});

app.get('/')

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});