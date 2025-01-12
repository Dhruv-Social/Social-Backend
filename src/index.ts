import express from "express";

const app = express();

app.all("*", async (req, res) => {
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
