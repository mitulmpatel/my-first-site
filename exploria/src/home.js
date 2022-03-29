// Create the express router to handle our home requests
var express = require('express');
var PropertiesModel = require("../models/properties.model");
var UsersModel = require("../models/users.model");
var router = express.Router();

router.get('/', async function (req, res) {
  const properties = await PropertiesModel.find({ "featured": "true" }).exec();

  const userBookmarkProperties = await UsersModel.findById('6226b78a7d010d30336384f1').exec();
  let arrBookmarkProps = userBookmarkProperties.bookmarkpropties;
  let arrBookmarkPropsIds = [];
  arrBookmarkProps.forEach(function (arrayItem) {
      arrBookmarkPropsIds.push(arrayItem.property);
  });
  console.log(arrBookmarkPropsIds);

  res.render("index", { properties: properties, arrBookmarkPropsIds: arrBookmarkPropsIds });
});

module.exports = router;