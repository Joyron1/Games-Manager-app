const express = require('express');
const router = express.Router();


const groups_controller = require('../controllers/comments_controller')


router.get('/getCommentsByGameID', groups_controller.getCommentsByGameID);
router.get('/insertComment', groups_controller.insertComment);
module.exports = router;