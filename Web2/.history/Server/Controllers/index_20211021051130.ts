import express, {Request, Response, NextFunction, request } from 'express';

import passport from 'passport';

//Instance of user model
import User from '../Models/user';

// Import Util functions
import { UserDisplayName } from '../Util';

//Display Functions

export function DisplayHomePage(req: Request, res: Response, next: NextFunction):void
{
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req)});
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'About Us', page: 'about', displayName: UserDisplayName(req)  });
}

export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Our Projects', page: 'projects', displayName: UserDisplayName(req)  });
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Our Services', page: 'services', displayName: UserDisplayName(req)  });
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: UserDisplayName(req)  });
}

//-----------------------------------------------------------------------------------------------

export function DisplayLoginPage(req: Request, res: Response, next: NextFunction): void
{
    if(!req.user)
    {
        return res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req) });
    }
 
    return res.redirect('/contact-list');
}

export function ProcessLoginPage(req: Request, res: Response, next: NextFunction): void
{
    passport.authenticate('local', (err, user, info) =>{
        // are there server errors?
        if(err)
        {
            console.error(err);
            return next(err);
        }

        //are there login error?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.login(user, (err) =>
        {
            if(err)
        {
            console.error(err);
            return next(err);
        }

        return res.redirect('/contact-list');
        });
    })(req, res, next);
}

export function DisplayRegisterPage(req: Request, res: Response, next: NextFunction): void
{
    if(!req.user)
    {
        return res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req) });
    }

    return res.redirect('/contact-list');
}

export function ProcessRegisterPage(req: Request, res: Response, next: NextFunction): void
{
    //instantiate new user object
    let newUser = new User 
    ({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.FirstName + " " + req.body.LastName
    });

    User.register(newUser, req.body.password, (err)=>
    {
        if(err)
        {
            console.error('Error: Inserting New User');
            if(err.name == "UserExistsError")
            {
                console.error('Error: User Already Exists');
            }
            req.flash('registerMessage', 'Registration Error');

            return res.redirect('/register');
        }
        // login after successful authentication
        return passport.authenticate('local')(req, res, () =>{
            return res.redirect('/contact-list');

        });
    })

}

export function ProcessLogoutPage(req: Request, res: Response, next: NextFunction): void
{
   req.logout();
   res.redirect('/login')
    
}