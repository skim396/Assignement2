/*

 

 
* name : Seungkoo Kim
* id : 301150666
* file Name : contact.js
* date : 23/10/2021

 
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ContactSchema = new Schema({
    FullName: String,
    ContactNumber: String,
    EmailAddress: String
}, {
    collection: "contactlist"
});
const Model = mongoose_1.default.model("contactlist", ContactSchema);
exports.default = Model;
//# sourceMappingURL=contact.js.map