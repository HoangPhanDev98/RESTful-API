const express = require("express");
const router = express.Router();

const User = require("../models/User");

// Get all the User
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

// Save a User
router.post("/", async (req, res) => {
  const user = new User({
    id: req.body.id,
    username: req.body.username,
    fullname: req.body.fullname,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    avatarUrl: req.body.avatarUrl,
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get a specific user
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.userId });
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update the specific user
router.patch("/:userId", async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          id: req.body.id,
          username: req.body.username,
          fullname: req.body.fullname,
          email: req.body.email,
          phone: req.body.phone,
          address: req.body.address,
          avatarUrl: req.body.avatarUrl,
        },
      }
    );

    res.json(updatedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete a User
router.delete("/:userId", async (req, res) => {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.userId });
    res.json(deletedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
