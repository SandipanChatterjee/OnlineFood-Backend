const express = require("express");
const storage = require("../middleware/diskStorage");
var multer = require("multer");
var upload = multer({ storage: storage });

const {
  createResturant,
  getAllResturants,
  getResturant,
} = require("../controller/resturants");

const router = express.Router();

router
  .route("/")
  .post(upload.array("photos"), createResturant)
  .get(getAllResturants);

router.route("/:id").get(getResturant);

module.exports = router;
