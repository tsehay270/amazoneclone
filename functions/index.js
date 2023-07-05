const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NP748LbxGIgTFqUFA1q4Mg3JyEh9scLLuhO74gKf4rDOxRwc2x2IL80JnYu7MfDffznwfpzDFQKTMk6hlvOwCY300kMEUiIdK"
);
//
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// app.use(cors({ origin: true }));
// const corsOption = {
//   origin: ["http://localhost:3000"],
// };
// app.use(cors(corsOption));

app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment Request Recieved for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.set("Access-Control-Allow-Origin", "http://localhost:3000");
  response.set("Access-Control-Allow-Headers", "Content-Type");
  response.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//
exports.api = functions.https.onRequest(app);

//http://127.0.0.1:5001/clone-f0777/us-central1/api
// http://127.0.0.1:5001/clone-f0777/us-central1/api
