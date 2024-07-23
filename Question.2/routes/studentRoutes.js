const express = require('express');
const router = express.Router();
const controller = require("../controllers/studentController");

router.route("/create").post(controller.createStudent);
router.route("/worksnapstimeentries").post(controller.worksnapstimeentries);
router.route('/time-entries').get(controller.showStudentTimeEntries);

module.exports = router;
