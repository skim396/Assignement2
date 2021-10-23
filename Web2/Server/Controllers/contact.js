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
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayContactListPage = void 0;
const contact_1 = __importDefault(require("../Models/contact"));
const Util_1 = require("../Util");
// Read 
function DisplayContactListPage(req, res, next) {
    contact_1.default.find((err, contactCollection) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Contact List', page: 'contactlist', contact: contactCollection, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayContactListPage = DisplayContactListPage;
//Edit Page
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    // pass the id to the db
    // db.contact.find({"_id": id})
    contact_1.default.findById(id, {}, {}, (err, contactItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        // show the edit view
        res.render('index', { title: 'Update', page: 'update', item: contactItemToEdit, displayName: (0, Util_1.UserDisplayName)(req) });
    });
}
exports.DisplayEditPage = DisplayEditPage;
// Display (C)reate page
function DisplayAddPage(req, res, next) {
    // show the edit view
    res.render('index', { title: 'Add', page: 'update', item: '', displayName: (0, Util_1.UserDisplayName)(req) });
}
exports.DisplayAddPage = DisplayAddPage;
// Process Functions
// Process (E)dit page
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    // instantiate a new contact Item
    let updatedContactItem = new contact_1.default({
        "_id": id,
        "FullName": req.body.FullName,
        "ContactNumber": req.body.ContactNumber,
        "EmailAddress": req.body.EmailAddress
    });
    // find the contact item via db.contact.update({"_id":id}) and then update
    contact_1.default.updateOne({ _id: id }, updatedContactItem, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contactlist');
    });
}
exports.ProcessEditPage = ProcessEditPage;
// Process (C)reate page
function ProcessAddPage(req, res, next) {
    // instantiate a new contact
    let newContact = new contact_1.default({
        "FullName": req.body.FullName,
        "ContactNumber": req.body.ContactNumber,
        "EmailAddress": req.body.EmailAddress
    });
    // db.contact.insert({contact data is here...})
    contact_1.default.create(newContact, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contactlist');
    });
}
exports.ProcessAddPage = ProcessAddPage;
// Process (D)elete page
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    // db.contact.remove({"_id: id"})
    contact_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contactlist');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=contact.js.map