/*

 

 
* name : Seungkoo Kim
* id : 301150666
* file Name : app.js
* date : 23/10/2021

 
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
// authentication modules
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
// modules for cors
const cors_1 = __importDefault(require("cors"));
// authentication objects
let localStrategy = passport_local_1.default.Strategy; // alias
const user_1 = __importDefault(require("../Models/user"));
// module for auth messaging and error management
const connect_flash_1 = __importDefault(require("connect-flash"));
// module for database setup
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("../Routes/index"));
const contact_1 = __importDefault(require("../Routes/contact"));
const app = (0, express_1.default)();
exports.default = app;
// DB Configuration
const DBConfig = __importStar(require("./db"));
mongoose_1.default.connect((DBConfig.RemoteURI) ? DBConfig.RemoteURI : DBConfig.LocalURI);
const db = mongoose_1.default.connection; // alias for the mongoose connection
db.on("error", function () {
    console.error("connection error");
});
db.once("open", function () {
    console.log(`Connected to MongoDB at: ${DBConfig.HostName}`);
});
// view engine setup
app.set('views', path_1.default.join(__dirname, '../Views'));
app.set('view engine', 'ejs');
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, '../../Client')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../../node_modules')));
//add support for cors
app.use((0, cors_1.default)());
//setup express session
app.use((0, express_session_1.default)({
    secret: DBConfig.Secret,
    saveUninitialized: false,
    resave: false
}));
//initialize flash
app.use((0, connect_flash_1.default)());
//initialize passport
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
//implement Auth 
passport_1.default.use(user_1.default.createStrategy());
//serialize and deserialize user data
passport_1.default.serializeUser(user_1.default.serializeUser());
passport_1.default.deserializeUser(user_1.default.deserializeUser());
// create routing through event handling
app.use('/', index_1.default);
app.use('/contactlist', contact_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
//module.exports = app;
//# sourceMappingURL=app.js.map