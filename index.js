import express from "express";

const PORT = 4000;

app.get("/", (req, res) => {
  res.json({
    message: "hello from container",
    service: "express",
    pod: process.env.POD_NAME || "unknown",
    time: new Date().toDateString(),
  });
});

app.get("/readyz", (req, res) => {
  res.status(200).send("ready");
});
app.get("/healthz", (req, res) => {
  res.status(200).send("okj");
});

const app = express();
app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`server is listening on localhost:${PORT}`);
});
