import {Schema,model,models} from 'mongoose';
import { stringify } from 'postcss';
const userSchema =new Schema({
    username : String,
    email : String,
    password : String,
    subscribe: String,
    roles: String
   
})

const Users = models.user || model('user',userSchema);
export default Users;
