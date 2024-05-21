const express = require("express");
const router = express.Router();

// invoking common middleware
router.use(urlLogger);

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.render("users/new");
});

router.post("/", (req, res) => {
  const isValid = false;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error")
    res.render("users/new", { firstName: req.body.firstName });
  }
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user)
    res.send(`Get User With ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`);
  });

const users = [{ name: "Kyle" }, { name: "Sally" }];

// anytime 'id' is found within the url this middleware will run
router.param("id", (req, res, next, id) => {
    console.log('---- id', id);
  req.user = users[id];
  next();
});

// common middleware runs for every call
function urlLogger(req, res, next) {
  console.log(req.originalUrl);
  next();
};

module.exports = router;