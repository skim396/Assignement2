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
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
// instantiate an object of type contact controller
const contact_1 = require("../Controllers/contact");
//import Util functions
const index_1 = require("../Util/index");
/* GET /contact-list page. */
router.get('/', index_1.AuthGuard, contact_1.DisplayContactListPage);
/* GET - display /contact-list/add page. */
router.get('/add', index_1.AuthGuard, contact_1.DisplayAddPage);
/* GET - display /contact-list/edit/:id page. */
router.get('/update/:id', index_1.AuthGuard, contact_1.DisplayEditPage);
/* POST - process /contact-list/add page */
router.post('/add', index_1.AuthGuard, contact_1.ProcessAddPage);
/* POST - process /contact-list/edit/:id page */
router.post('/update/:id', index_1.AuthGuard, contact_1.ProcessEditPage);
/* GET - process /contact-list/delete/:id */
router.get('/delete/:id', index_1.AuthGuard, contact_1.ProcessDeletePage);
//# sourceMappingURL=contact.js.map