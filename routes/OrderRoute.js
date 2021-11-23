const router = require("express").Router();

router.get("/all", (req, res) => {
  res.send("welcome user");
});

module.exports = router;
