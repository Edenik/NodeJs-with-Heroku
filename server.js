const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req,res)=> {
    res.send('hello');
});

app.get('/page2', (req,res)=> {
    res.send('page2');
})

app.post('/postme', (req,res)=> {
    res.send(`thank you ${req.body.name} `);
})

app.listen(3000);