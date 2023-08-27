/* eslint-disable */

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NZJKDSIBn56VI0Ia5G5BKv1XFE6ifDG0ugR4vt1Jcl3GYTbITfoUMDEFLZ73GEFpUoYJM0IbGi8necdfviek4mJ008l2wY2Z5"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);


// Example Endpoint

// http://127.0.0.1:5001/clone-b5e3d/us-central1/api




// sk_test_51NZJKDSIBn56VI0Ia5G5BKv1XFE6ifDG0ugR4vt1Jcl3GYTbITfoUMDEFLZ73GEFpUoYJM0IbGi8necdfviek4mJ008l2wY2Z5