import mongoose, {PassportLocalSchema} from 'mongoose';
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema
({
    username: String,
    emailAddress: String,
    name: String,
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
        name: String

    }
}
export default Model;