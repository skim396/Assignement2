/*

 

 
* name : Seungkoo Kim
* id : 301150666
* file Name : db.ts
* date : 23/10/2021

 
*/

export const LocalURI = "mongodb://localhost/contact";
export const RemoteURI = process.env.RemoteURI;
export const HostName = (process.env.RemoteURI) ? "remotehost" : "localhost";
export const Secret = "someSecret";