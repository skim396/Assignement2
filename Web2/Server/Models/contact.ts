/*

 

 
* name : Seungkoo Kim
* id : 301150666
* file Name : contact.ts
* date : 23/10/2021

 
*/
import mongoose from 'mongoose';
const Schema = mongoose.Schema; 

const ContactSchema = new Schema
({
    FullName: String,
    ContactNumber: String,
    EmailAddress: String
    
},
{
    collection: "contactlist"
});

const Model = mongoose.model("contactlist", ContactSchema);
export default Model;