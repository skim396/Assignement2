/*

 

 
* name : Seungkoo Kim
* id : 301150666
* file Name : index.js
* date : 23/10/2021

 
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
// Functions created for each individual page
const index_1 = require("../Controllers/index");
/* GET home page. */
router.get('/', index_1.DisplayHomePage);
/* GET home page. */
router.get('/home', index_1.DisplayHomePage);
/* GET about page. */
router.get('/about', index_1.DisplayAboutPage);
/* GET projects page. */
router.get('/projects', index_1.DisplayProjectsPage);
/* GET services page. */
router.get('/services', index_1.DisplayServicesPage);
/* GET contact page. */
router.get('/contact', index_1.DisplayContactPage);
//-------------------------------------------------------------------------------------
//--Display and process login page
/* GET login page. */
router.get('/login', index_1.DisplayLoginPage);
/* POST login page. */
router.post('/login', index_1.ProcessLoginPage);
/* GET register page. */
router.get('/register', index_1.DisplayRegisterPage);
/* POST register page. */
router.post('/register', index_1.ProcessRegisterPage);
/* GET logout page. */
router.get('/logout', index_1.ProcessLogoutPage);
//module.exports = router;
//# sourceMappingURL=index.js.map