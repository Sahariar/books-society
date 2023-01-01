import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import  CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from 'next-auth/providers/github';
import Users from '../../../model/Schema'
import connectMongo from "../../../database/conn";
import {compare} from 'bcrypt';
export default NextAuth({
    
providers:[
    //google provider
    GoogleProvider({
        clientId:process.env.GOOGLE_ID,
        clientSecret:process.env.GOOGLE_SECRET
    }),
    //github provider
    GithubProvider({
        clientId:process.env.GITHUB_ID,
        clientSecret:process.env.GITHUB_SECRET
    }),
    CredentialsProvider({
        name : "Credentials",
        async authorize(credentials,req){
            connectMongo().catch(error=>{error:"Connection Failed...!"})

            //check user existance
            const result = await Users.findOne({email: credentials.email})
            if(!result){
                throw new Error ("No User Found with Email Please Sign up...!")
            }
            const checkPassword = await compare (credentials.password,result.password);
            if(!checkPassword || result.email !== credentials.email){
                throw new Error("username or password doesn't match")
            }
            return result;
        }
       
    })
    
    

],
secret: process.env.NEXTAUTH_SECRET,
})