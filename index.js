const express = require('express');
const app = express();
app.use(express.json());// for accepting json objects
const {getFollowAccounts} = require('./controllers/operations')


app.get('/nofollowback/:username', getFollowAccounts)

app.listen(3000, () => console.log('Server Started'))
