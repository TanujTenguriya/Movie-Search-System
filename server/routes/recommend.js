import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/recommend", async (req, res) => {
  const { favourites } = req.body;

  console.log("Received favourites:", favourites?.length);

  try {
    const mlResponse = await axios.post(
      "http://127.0.0.1:8000/recommend",
      { favourites },
      { timeout: 15000 }
    );

    res.json({ recommendedIds: mlResponse.data });
  } catch (err) {
    console.error("NODE → ML ERROR", err.message);
    res.status(500).json({ error: "ML service failed" });
  }
});


export default router;
