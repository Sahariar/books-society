import { hash } from "bcrypt";
import connectMongo from "../../../database/conn";
import Users from "../../../model/Schema";


export default async function handler (req,res){

    //res.json({message:"Signup post request"});
    connectMongo().catch(error => res.json({error:"connection failed"}))
if(req.method === 'POST'){
    if(!req.body) return res.status(404).json({error:"Don't have data"})
    const {username,email,password,subscribe,roles} = req.body;
    //check duplicate users
    const checkexisting =await Users.findOne({email});
    if(checkexisting) return res.status(422).json({message: "User Already Exits"})

        Users.create({username,email,subscribe,roles,password: await hash(password,12)},function(err,data){
            if(err) return res.status(404).json ({err});
            res.status(201).json({status: true,user:data});

        })
    
    }
else{
    res.status(500).json({message: "HTTP method not post Accepted" })
}



}