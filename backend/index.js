const express = require("express");
const chipRoutes = require("./routes/chipRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Parse JSON bodies
app.use("/api/chips", chipRoutes); // Link chip routes to `/api/chips`

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
