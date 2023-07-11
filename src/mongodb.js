const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/login")
.then(()=>{
    console.log("connected...")
})
.catch(()=>{
    console.log("failed to connect..");
})

const Log=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection=new mongoose.model("log1",Log)

module.exports=collection