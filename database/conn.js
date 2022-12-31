const { default: mongoose, connection } = require("mongoose")


const connectMongo=async ()=>{
    try{
        const{connectMongo} =await mongoose.connect(process.env.MONGO_URL)
        if(connection.readyState == 1){
            return Promise.resolve(true)
        }
    
    }
    catch(error){
        return Promise.reject(error)
    }
  
}
export default connectMongo;