export const LocalURI = "mongodb://localhost/store";
export const RemoteURI = process.env.RemoteURI;
export const HostName = (process.env.RemoteURI) ? "remotehost" : "localhost";
export const Secret = "someSecret";