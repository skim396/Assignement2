/*

 

 
* name : Seungkoo Kim
* id : 301150666
* file Name : db.js
* date : 23/10/2021

 
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secret = exports.HostName = exports.RemoteURI = exports.LocalURI = void 0;
exports.LocalURI = "mongodb://localhost/contact";
exports.RemoteURI = process.env.RemoteURI;
exports.HostName = (process.env.RemoteURI) ? "remotehost" : "localhost";
exports.Secret = "someSecret";
//# sourceMappingURL=db.js.map