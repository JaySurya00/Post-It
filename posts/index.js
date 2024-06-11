const express = require('express');
const { randomBytes }= require('crypto');
const cors= require('cors');
const axios= require('axios');

const app= express();
app.use(cors())
app.use(express.json());

const posts= {};

app.get('/posts', (req, res)=>{
    res.send(posts);
});

app.post('/events', (req, res)=>{
    console.log('Event Recevied', req.body.type);
    res.send({});
})

app.post('/posts/create', async (req, res)=>{
    try{
        const id= randomBytes(4).toString('hex');
        const {title}= req.body;
        posts[id]={
            id,
            title
        }
    
        axios.post('http://event-bus-srv:4005/events',{
            type: 'PostCreated',
            data: {
                id,
                title
            }
        }).catch(e=>console.log(e));
    
        res.status(201).send(posts[id]);
    }
    catch(e){
        console.log('From post',e);
    }

})
app.listen(4000,()=>{
    console.log('Listening on port 4000');
})