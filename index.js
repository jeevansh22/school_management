const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const schoolRoutes = require("./routes/schoolRoutes");

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use("/api/schools", schoolRoutes);
const port=3000
app.listen(port, () => {
  console.log(`Server running on port ${port} `);
});
