import express from "express";
import cors from "cors";
import recommendRoute from "./routes/recommend.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api", recommendRoute);

app.get("/", (req, res) => {
  res.send("Movie ML Backend Running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
