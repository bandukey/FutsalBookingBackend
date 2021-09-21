const express = require("express");
const  router = express.Router();
const { protect } = require("../middleware/auth");

const {
   addItem,
   itemUpdate,
   getItems,
   getStd,
   getHalf,
   getFull,
   ItemPhotoUpload
  } = require("../controllers/item");

  router.post("/add/item", protect, addItem);
  router.get("/item/all", getItems)
  router.get("/item/drink",getStd)
  router.get("/item/vege",getHalf)
  router.get("/item/non-vege",getFull)
  router.put("/item/update", protect, itemUpdate)
  router.put("/item/:id/photo",protect, ItemPhotoUpload);
  
  

  module.exports = router