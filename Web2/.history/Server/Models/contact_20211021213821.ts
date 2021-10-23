/*
* File Name  : contact.ts
* Author     : Yonas Berhane
* Student Id : 301165447
* Date       : October 18, 2021
* Description: Assignment 2- Express Portfolio Authentication- COMP229-F2021
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
    collection: "contact-list"
});

const Model = mongoose.model("contact", ContactSchema);
export default Model;