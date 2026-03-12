const registerUser = require('./RegisterUser');
const os = require('os');
const fs = require('fs');
const express = require('express')

// function hello(){
//     console.log("hello node")
// }
// hello()
// registerUser.checkForUser();
// registerUser.registerUser();
// console.log(os.hostname());
// console.log(os.freemem());
// fs.writeFile('./sample.txt','Testing FS Module',(err)=>{
//     if(err){
//         console.log('error occured');
//         return
//     }
//     console.log('file created successfully');
// })
//      fs.readFile('./sample.txt','utf8', (err, data)=>{
//         if(err){
//         console.log('error occured');
//         return
//         }
//         console.log('Data in file',data);
//      })

     const app = express();

     app.get('/',(req,res)=>{
        console.log(req);
        res.send('hii! welcome to the server')
     })

     app.get('/saybye',(req, res)=>{
        console.log(" incoming request")
        res.send("ok, byee!")
        
     })

         app.get('/saygoodbye',(req, res)=>{
        console.log(" incoming request")
        res.send("ok, byee!")
        
     })

     app.post('/saybye', (req, res)=>{
        console.log("post route")
        res.send('post route')
     })

     app.post('/postUserDetails',(req, res)=>{
        console.log("post user details route")
        res.send('post user details route')
     })

     app.put('/updatedUserDetails',(req,res)=>{
        res.send('updated user detailes successfully')
     })

     app.delete('/deleteUserDetails',(req,res)=>{
        res.send('delete route succesfully')
     })

     app.listen(3000,()=>{
        console.log('your server is running')
     })