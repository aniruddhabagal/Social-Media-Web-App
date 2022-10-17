//npm init -y
//npm install express
//npm  install nodemon
const express = require("express");
const { v4: uuidv4 } = require('uuid');
const connection = require("./db/connection");

const app = express();

app.use(express.json());


// this is how we get something from UI/postman
const get = (req,res) => {
    console.log(req.body);
    res.send("you are in home");
};
app.get("/home", get);

// this is how we post something to UI/postman
const post =  (req,res) => {
    let uid = uuidv4();
    req.body.uid = uid;
    console.log(uid);
    res.json({
        message: "we got post res",
        body: req.body
    })
};
app.post("/user", post);

// this is how we get something with uid from UI/postman
app.get("/user", (req,res) => {
    let users=await getUsersInLimitPromisified();
    try{
        let readyUsers=users.map((user)=>{
            return {
                userName:user.user_name,
                userEmail:user.email,
                userBio:user.bio,
                userPicture:user.pimage
            }
        })
        res.status(200).send({users:readyUsers})
    }
    catch(err){
        console.log(500,err);
        res.status(500).send({msg:"Unable to fetch user details"})
    }
})

app.listen(3000, () =>{
    console.log("started server at port 3000");
});
