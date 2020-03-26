const express = require('express');
const app = express();
const cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))


const Comments = require('./routes/comments');
const Games = require('./routes/games');
// const MeetingsGrp = require('./routes/meetingGrp');

app.use(Comments);
app.use(Games);
// app.use(MeetingsGrp);

app.use((req, res) => {
    res.send('<h1>Page not found</h1>')
})

app.listen(4000);