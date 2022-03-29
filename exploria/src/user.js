// Create the express router to handle our home requests
const express = require('express');
const bodyParser = require("body-parser");
const multer = require('multer');
const path = require('path');

var PropertiesModel = require("../models/properties.model");
var UsersModel = require("../models/users.model");
var router = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/users')
    },
    filename: function (req, file, cb) {
        cb(null, "p_" + Date.now() + path.extname(file.originalname)); // generate new name 
    }
});

const upload = multer({ dest: 'public/images/users', storage: storage });

router.get('/create', async function (req, res) {
    const states = [
        { "code": "AB", "name": "Alberta" },
        { "code": "BC", "name": "British Columbia" },
        { "code": "MB", "name": "Manitoba" },
        { "code": "NB", "name": "New Brunswick" },
        { "code": "NL", "name": "Newfoundland and Labrador" },
        { "code": "NS", "name": "Nova Scotia" },
        { "code": "ON", "name": "Ontario" },
        { "code": "PE", "name": "Prince Edward Island" },
        { "code": "QC", "name": "Quebec" },
        { "code": "SK", "name": "Saskatchewan" },
        { "code": "NT", "name": "Northwest Territories" },
        { "code": "NU", "name": "Nunavut" },
        { "code": "YT", "name": "Yukon" }
    ];
    const message = req.query.message ?? null;
    const errormsg = req.query.errormsg ?? null;
    res.render("user/create", { states: states, message: message, errormsg: errormsg });
});

router.post('/create', urlencodedParser, upload.single('photo'), async function (req, res) {

    if (req.body.first_name == "" ||
        req.body.last_name == "" ||
        req.body.phone == "" ||
        req.body.gender == "" ||
        req.body.state == "" ||
        req.body.email == "" ||
        req.body.password == ""
    ) {
        res.redirect(`/user/create?error=all information are required`);
    }

    if (req.body.password !== req.body.confirm_password) {
        res.redirect(`/user/create?error=Password does not match`);
    }

    const formInfo = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        gender: req.body.gender,
        state: req.body.state,
        email: req.body.email,
        photo: req.file.filename,
        password: req.body.password
    };

    console.log(formInfo);

    let user = await UsersModel.create(formInfo, function (err, ind) {
        if (err) {
            console.log(err);
            return handleError(err);
        }
    });

    console.log(user);
    // res.send("user added");
    message = "You account created successfully!"
    res.render("user/editprofile", { message: message, errormsg: errormsg });
});

router.get('/editprofile', async function (req, res) {
    const user = await UsersModel.findById('6226b78a7d010d30336384f1').exec();
    const states = [
        { "code": "AB", "name": "Alberta" },
        { "code": "BC", "name": "British Columbia" },
        { "code": "MB", "name": "Manitoba" },
        { "code": "NB", "name": "New Brunswick" },
        { "code": "NL", "name": "Newfoundland and Labrador" },
        { "code": "NS", "name": "Nova Scotia" },
        { "code": "ON", "name": "Ontario" },
        { "code": "PE", "name": "Prince Edward Island" },
        { "code": "QC", "name": "Quebec" },
        { "code": "SK", "name": "Saskatchewan" },
        { "code": "NT", "name": "Northwest Territories" },
        { "code": "NU", "name": "Nunavut" },
        { "code": "YT", "name": "Yukon" }
    ];
    const message = req.query.message ?? null;
    const errormsg = req.query.errormsg ?? null;
    res.render("user/editprofile", { user: user, states: states, message: message, errormsg: errormsg });
});

router.patch('/editprofile', urlencodedParser, upload.single('photo'), async function (req, res) {
    if (req.body.password !== req.body.confirm_password) {
        res.redirect(`/user/editprofile?error=Password does not match`);
    }
    const filter = { email: 'patel.mitul.m@gmail.com' };
    const update = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        gender: req.body.gender,
        state: req.body.state,
        dob: req.body.dob,
    };
    if (req.body.password !== "") {
        update.password = req.body.password
    }
    // `doc` is the document _before_ `update` was applied
    let user = await UsersModel.findOneAndUpdate(filter, update);

    //res.send("Will edit my profile information");
    //res.render("user/editprofile?message=Profile information updated successfully");
    res.redirect(`/user/editprofile?message=Profile information updated successfully`);
});

router.get('/bookmarks/add/:id', async function (req, res) {

    let userBookmarkProperties = await UsersModel.findById('6226b78a7d010d30336384f1').exec();
    let arrBookmarkProps = userBookmarkProperties.bookmarkpropties;

    console.log("Before Bookmarked");
    console.log(arrBookmarkProps);

    let bookmarkpropties = { property: req.params.id };
    arrBookmarkProps.push(bookmarkpropties);

    console.log("After Bookmarked");
    console.log(arrBookmarkProps);

    userBookmarkProperties.bookmarkpropties = arrBookmarkProps;
    const filter = { email: 'patel.mitul.m@gmail.com' };

    let user = await UsersModel.findOneAndUpdate(filter, userBookmarkProperties);

    res.redirect(`/user/bookmarks`);
});

router.get('/bookmarks/delete/:id', async function (req, res) {

    let userBookmarkProperties = await UsersModel.findById('6226b78a7d010d30336384f1').exec();
    let arrBookmarkProps = userBookmarkProperties.bookmarkpropties;
    var filteredBookmarkProps = arrBookmarkProps.filter(function (el) { return el.property != req.params.id; });

    userBookmarkProperties.bookmarkpropties = filteredBookmarkProps;
    const filter = { email: 'patel.mitul.m@gmail.com' };

    let user = await UsersModel.findOneAndUpdate(filter, userBookmarkProperties);

    console.log(filteredBookmarkProps);
    //res.send("You are to delete bookmark");
    res.redirect(`/user/bookmarks`);
});

router.get('/bookmarks', async function (req, res) {

    const userBookmarkProperties = await UsersModel.findById('6226b78a7d010d30336384f1').exec();
    let arrBookmarkProps = userBookmarkProperties.bookmarkpropties;
    let arrBookmarkPropsIds = [];
    arrBookmarkProps.forEach(function (arrayItem) {
        arrBookmarkPropsIds.push(arrayItem.property);
    });

    const bookmarkProperties = await PropertiesModel.find().where('_id').in(arrBookmarkPropsIds).exec();
    console.log(bookmarkProperties);
    res.render("user/bookmarks", { properties: bookmarkProperties });
});

module.exports = router;