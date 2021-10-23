import express, {Request, Response, NextFunction, request } from 'express';

import passport from 'passport';

//Instance of user model
import User from '../Models/user';

// Import Util functions
import { UserDiplayName } from '../Util';

//Display Functions
