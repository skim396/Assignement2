"use strict";
/*
* File Name  : app.ts
* Author     : Yonas Berhane
* Student Id : 301165447
* Date       : September 27, 2021
* Description: Assignment 1- Express Portfolio Site for COMP229-F2021
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("../Routes/index"));
const app = (0, express_1.default)();
exports.default = app;
// view engine setup
app.set('views', path_1.default.join(__dirname, '../Views'));
app.set('view engine', 'ejs');
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, '../../Public')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../../node_modules')));
app.use('/', index_1.default);
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