const Resturants = require("../model/resturants");
const asyncHandler = require("../middleware/asyncHandler");
const jsonfile = require("jsonfile");

//@desc     -   CREATE-REVIEW
//@route    -   POST api/v2/resturants
//@access   -   PUBLIC
exports.createResturant = asyncHandler(async (req, res, next) => {
  req.body.resturantImg = req.files[0].path;
  for (let i = 1; i < req.body.menu.length; i++) {
    req.body.menu[i] = JSON.parse(req.body.menu[i]);
    req.body.menu[i].photos = req.files[i].path;
  }

  console.log("req.body###################################", req.body);

  const query = await Resturants.create(req.body);

  if (!query) {
    return res.status(401).json({
      message: "Resturant cannot be created",
    });
  }
  res.status(200).json({
    success: true,
    data: query,
  });
});

//@desc     -   GET ALL RESTURANTS
//@route    -   GET api/v2/resturants
//@access   -   PUBLIC
exports.getAllResturants = asyncHandler(async (req, res, next) => {
  const query = await Resturants.find();
  if (!query) {
    return res.status(404).json({
      message: "Resturants not found",
    });
  }
  res.status(200).json({
    success: true,
    data: query,
  });
});

//@desc   -     GET SINGLE RESTURANT
//@route  -     GET api/v2/resturants/:id
//@access -     PUBLIC
exports.getResturant = asyncHandler(async (req, res, next) => {
  const query = await Resturants.findById(req.params.id);
  if (!query) {
    return res.status(404).json({
      message: `Resturant with id${req.param.id} not found`,
    });
  }
  res.status(200).json({
    success: true,
    data: query,
  });
});
