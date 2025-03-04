import express from "express";
import defaultRoutes from "./routes/defaultRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();
const port = 3000;

app.use("/", defaultRoutes);
app.use("/", adminRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
