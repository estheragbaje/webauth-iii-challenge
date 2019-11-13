const router = require("express").Router();

const Users = require("./user-model");
const restricted = require("../auth/restricted-middleware");

router.get("/", restricted, (req, res) => {
  if (req.decodedToken) {
    Users.findAll()
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        res.send(err);
      });
  } else {
    res.json({
      message: "You don't have the right to access this information"
    });
  }
});

module.exports = router;
