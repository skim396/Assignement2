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

