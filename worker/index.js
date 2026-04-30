require("dotenv").config();

const Queue = require("bull");

const queue = new Queue("messages", process.env.REDIS_URL);

console.log("Worker started 🚀");

// Process jobs
queue.process(async (job) => {
  console.log("Processing job:", job.data);

  // TODO: integrate your Hermes / sendMessage logic here

  return true;
});
