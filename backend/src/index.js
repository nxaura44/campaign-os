const express = require("express");
const cors = require("cors");
const { createClient } = require("redis");

const app = express();
app.use(cors());
app.use(express.json());

const redisClient = createClient({ url: process.env.REDIS_URL });

redisClient.on("error", (err) => {
  console.error("Redis connection error:", err);
});

redisClient.connect().then(() => {
  console.log("Connected to Redis");
}).catch((err) => {
  console.error("Failed to connect to Redis:", err);
});

app.get("/", (req, res) => res.send("Backend running"));

app.get("/redis-test", async (req, res) => {
  try {
    await redisClient.set("test_key", "redis_is_working");
    const value = await redisClient.get("test_key");
    res.json({ success: true, value });
  } catch (err) {
    console.error("Redis test error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
