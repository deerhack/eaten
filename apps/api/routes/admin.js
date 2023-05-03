var express = require("express");
var router = express.Router();
const validateAdminLoginRequest = require("../middleware/ValidateAdminLogin");
const AdminController = require("../controllers/AdminController");

/* GET users listing. */
router.post("/login", validateAdminLoginRequest, AdminController.login);

module.exports = router;
