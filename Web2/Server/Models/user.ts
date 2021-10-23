/*

 

 
* name : Seungkoo Kim
* id : 301150666
* file Name : user.ts
* date : 23/10/2021

 
*/
import mongoose, {PassportLocalSchema} from 'mongoose';
const Schema = mongoose.Schema;

//easier encryption and decryption 
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema
({
    username: String,
    emailAddress: String,
    displayName: String,
    created:
    {
        type: Date,
        default: Date.now()
    },
    updated:
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection: "users"
});

UserSchema.plugin(passportLocalMongoose);



declare global
{
    export type UserDocument = mongoose.Document &
    {
        _id: String,
        username: String,
        emailAddress: String,
       displayName: String

    }
}
const Model = mongoose.model("User", UserSchema as PassportLocalSchema);
export default Model;