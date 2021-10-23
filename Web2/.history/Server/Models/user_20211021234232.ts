/*
* File Name  : user.ts
* Author     : Yonas Berhane
* Student Id : 301165447
* Date       : October 18, 2021
* Description: Assignment 2- Express Portfolio Authentication- COMP229-F2021
*/

import mongoose, {PassportLocalSchema} from 'mongoose';
const Schema = mongoose.Schema;
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

const Model = mongoose.model("Contact", UserSchema as PassportLocalSchema);

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
export default Model;