const {model,Schema}=require('mongoose')


const userSchema=new Schema({
    userName:{
     type:String,
     required:true,
     unique:true
    },
    email:{
      type:String,
     required:true,
     unique:true
    },
    password:{
    type:String,
    default:"Qwerty@123"
    }
},{
    timestamps:true
})

const userModel=model('User',userSchema)

module.exports=userModel
