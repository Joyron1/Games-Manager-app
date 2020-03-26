const con = require('../utils/database')



// get all games
exports.getGames = async (req, res, next) => {
    let result = await getGamesFromDB();
    res.send(result)
}

getGamesFromDB = async () => {
    try {
        let allGames = await con.execute("SELECT * FROM games")
        return allGames[0]
    } catch (err) {
        return err.message;
    }
}


exports.getGamesByCat = async (req, res, next) => {
    let category = req.query.category;
    console.log("category:", category)
    let result = await getGamesByCategory(category);
    console.log(result)
    res.send(result)
}

getGamesByCategory = async (category) => {
    try {
        let allGames = await con.execute(`SELECT * FROM games WHERE category='${category}'`)
        return allGames[0]
    } catch (err) {
        return err.message;
    }
}

exports.getGamesById = async (req, res, next) => {
    let id = req.query.id;
    console.log("id:", id)
    let result = await getGamesByID(id);
    console.log(result)
    res.send(result)
}

getGamesByID = async (id) => {
    try {
        let Game = await con.execute(`SELECT * FROM games WHERE id='${id}'`)
        return Game[0]
    } catch (err) {
        return err.message;
    }
}

// exports.getMeetingsByGroup = async (req, res, next) => {
//     let group_name = req.query.group_name;
//     console.log("group_name:", group_name)
//     let result = await getMeetingsByGrp(group_name);
//     console.log(result)
//     res.send(result)
// }

// getMeetingsByGrp = async (group_name) => {
//     try {
//         let ans = await con.execute(`
//         SELECT groups.name AS groupName,
//         meetings.room AS room ,meetings.description AS description, 
//         meetings.start_hour AS startHour, meetings.end_hour AS EndHour, 
//         meetings.date AS Date 
//         FROM meetings 
//         JOIN groups ON groups.name = meetings.group_name WHERE group_name = '${group_name}'`)
//         return ans[0]
//     } catch (err) {
//         return err.message;
//     }
// }


// //connet meetings to group
// connectMeetingToGroup = async (meeting_id, group_name) => {
//     try {
//         console.log(group_name)
//         let ans = await con.execute("INSERT INTO groups_meetings(meeting_id, group_id) VALUES (?,?)", [Number(meeting_id), (group_name)]);
//         return ans[0]
//     } catch (err) {
//         return err.message;
//     }
// }