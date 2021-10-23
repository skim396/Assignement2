import express, {Request, Response, NextFunction, request } from 'express';

import passport from 'passport';

//Instance of user model
import User from '../Models/user';

// Import Util functions
import { UserDiplayName } from '../Util';

//Display Functions

export function DisplayHomePage(req: Request, res: Response, next: NextFunction):void
{
    res.render('index', { title: 'Home', page: 'home', displayName: UserDiplayName(req)});
}

export function DisplayAboutPage()