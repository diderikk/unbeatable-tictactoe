const express = require('express');
const path = require('path');
const app = express();

app.use('/build',express.static(path.join(__dirname,'build')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log("App is listening on port: " + process.env.PORT||8080));