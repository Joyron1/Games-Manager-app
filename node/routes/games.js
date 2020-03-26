const express = require('express');
const router = express.Router();

const games_controller = require('../controllers/games_controller')

router.get('/getGames', games_controller.getGames)
router.get('/getGamesByCat', games_controller.getGamesByCat);
router.get('/getGamesById', games_controller.getGamesById);
// router.get('/deleteMeeting', meetings_controller.deleteMeeting);

module.exports = router;