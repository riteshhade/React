const express = require ('express');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port=3000;
 
app.use(cors());
app.use(bodyparser.json());

// const db = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Venom@2001',
//     database:'employee'
// })
// db.connect((err)=>{
//     if(err){
//         throw err;
//     }
//         else
//         {
//             console.log("db connected");
//         }
        
        
// })

app.post('/register',(req,res)=>{
    const{id,name,email,phno}=req.body;
    console.log(req.body);

    const sql ="insert into Employee.emp(id,name,email,phno) values (?,?,?,?)";

    db.query(sql,[id,name,email,phno],(err)=>{
        if(err){
            console.log(err);
            res.status(500).send("Data is not able to stored in db");
        }
        else{
            res.status(200).send("Data store successfully")
        }
    })

})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
