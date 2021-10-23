/*
* File Name  : db.ts
* Author     : Yonas Berhane
* Student Id : 301165447
* Date       : October 18, 2021
* Description: Assignment 2- Express Portfolio Authentication- COMP229-F2021
*/

export const LocalURI = "mongodb://localhost/contact";
export const RemoteURI = process.env.RemoteURI;
export const HostName = (process.env.RemoteURI) ? "remotehost" : "localhost";
export const Secret = "someSecret";