const con = require('../utils/database')

exports.getCommentsByGameID = async (req, res, next) => {
    let id = req.query.id;
    let comments = [];
    try {
        comments = await con.execute(`SELECT * FROM comments WHERE game_id=${id}`)
        comments = comments[0];
    } catch (err) {
        comments = err.message;
    }
    res.send(comments)
}

// insert new comment
exports.insertComment = async (req, res, next) => {
    let comment = {
        comment: req.query.comment,
        game_id: req.query.game_id
    }

    let Com = []
    try {
        Com = await con.execute("INSERT INTO comments (comment, game_id) VALUES (?,?)", [comment.comment, comment.game_id])
        Com = Com[0];
    } catch (err) {
        Com = err.message;
    }
    res.send(Com)
}





