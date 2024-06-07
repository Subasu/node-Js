const express=require('express');
const users=require('./MOCK_DATA.json')
const fs=require('fs')
const PORT=8000;
const app=express();
app.use(express.urlencoded({extended:false}));

app.get('/api/users',(req,res)=>{
    const html=
    `<ol>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join('')}
    </ol>`
    res.send(html);
});
app.get('/users',(req,res)=>{
    res.json(users);
});

app
.route('/api/users/:id')
.get((req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    return res.send(user);
})
.patch((req,res)=>{
    const body=req.body;
    const id=Number(req.params.id);
    const userId=users.findIndex((user)=>user.id===id);
    if(!userId){
        users[userId]={
            id:userId+1,
            body:body
        }
    }
    return res.json({response:"success"});
})
.delete((req,res)=>{
    return res.json({response:"pending"});
})

app.post('/api/users',(req,res)=>{
    const body=req.body;
    const newUser={
        id:users.length+1,
        body: body
    }
    users.push(newUser);
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({response:'Success'});
    });
});

app.listen(PORT,()=>console.log(`Server is listerning to PORT ${PORT}`));
