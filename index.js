const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());

app.listen(7777, () => {
    console.log('Server is running on port 7777');
});

app.get('/', (req, res) => {
    res.sendFile(
        __dirname + '/index.html'
    );
});

