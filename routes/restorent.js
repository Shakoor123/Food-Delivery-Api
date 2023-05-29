const Restorent = require("../models/Restorent");
const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
  const newRestorent = new Restorent(req.body);

  try {
    const savedRestorent = await newRestorent.save();
    res.status(200).json(savedRestorent);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedRestorent = await Restorent.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRestorent);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Restorent.findByIdAndDelete(req.params.id);
    res.status(200).json("Restorent has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT

router.get("/find/:id", async (req, res) => {
  try {
    const Restorent = await Restorent.findById(req.params.id);
    res.status(200).json(Restorent);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    restorents = await Restorent.find();
    res.status(200).json(restorents);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
