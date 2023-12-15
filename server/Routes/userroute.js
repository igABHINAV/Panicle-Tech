const express = require('express');
const { CreateUser } = require('../controllers/Create');
const { getUsers, FilterDepartment, FilterPosition, FilterSalaryRange } = require('../controllers/Get');
const { updateUser } = require('../controllers/Update');
const { deleteUser } = require('../controllers/Delete');
const router = express.Router();

router.route('/create').post(CreateUser);

router.route("/get").get(getUsers);
router.route("/get/department").get(FilterDepartment);
router.route("/get/position").get(FilterPosition);
router.route("/get/salary").get(FilterSalaryRange);

router.route("/update").put(updateUser);

router.route("/delete/:id").delete(deleteUser);
module.exports =router;