// Create the express router to handle our products requests
const express = require('express');
const bodyParser = require("body-parser");
const PropertiesModel = require("../models/properties.model");
var UsersModel = require("../models/users.model");
const inquiriesModel = require("../models/inquiries.model");
const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', async function (req, res) {
  const properties = await PropertiesModel.find().exec();

  const userBookmarkProperties = await UsersModel.findById('6226b78a7d010d30336384f1').exec();
  let arrBookmarkProps = userBookmarkProperties.bookmarkpropties;
  let arrBookmarkPropsIds = [];
  arrBookmarkProps.forEach(function (arrayItem) {
    arrBookmarkPropsIds.push(arrayItem.property);
  });
  res.render("properties/index", { properties: properties, arrBookmarkPropsIds: arrBookmarkPropsIds });
});

router.get('/:id', async function (req, res) {
  const property = await PropertiesModel.findById(req.params.id);
  const amenities = property.amenities.split(",");
  const properties = await PropertiesModel.find().limit(3).exec();

  const message = req.query.message ?? null;

  res.render("properties/details", { property: property, amenities: amenities, properties: properties, message: message });
});

router.post('/inquiry', urlencodedParser, function (req, res) {

  let saveInquiry = {
    property_id: req.body.propertyid,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    bookingdate: req.body.bookingdate,
    guests: req.body.guests,
    notes: req.body.notes
  };
  inquiriesModel.create(saveInquiry, function (err, ind) {
    if (err) return handleError(err);
  });
  res.redirect(`/properties/${req.body.propertyid}?message=Inquiry Submitted Successfully`);
});


router.delete('/:id', function (req, res) {

});

module.exports = router;