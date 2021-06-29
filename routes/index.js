const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

router.get("/data", async (req, res) => {
  await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => res.send(response.data));
  // .then((json) => console.log(json));
});

module.exports = router;
