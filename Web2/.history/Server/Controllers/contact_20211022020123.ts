/*
* File Name  : contact.ts
* Author     : Yonas Berhane
* Student Id : 301165447
* Date       : October 18, 2021
* Description: Assignment 2- Express Portfolio Authentication- COMP229-F2021
*/

import express, { Request, Response, NextFunction } from 'express';

import contact from '../Models/contact';

import { UserDisplayName } from '../Util';

// Read 

export function DisplaycontactListPage(req: Request, res: Response, next: NextFunction): void
{

    contact.find((err, contactCollection) =>
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Contact List', page: 'contactlist', contact: contactCollection, displayName: UserDisplayName(req) });
    });
}

//Edit Page

export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // pass the id to the db

    // db.contact.find({"_id": id})

    contact.findById(id, {}, {}, (err, contactItemToEdit) => 
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // show the edit view
        res.render('index', { title: 'Edit', page: 'update', contact: contactItemToEdit, displayName: UserDisplayName(req)  });
    });
}

// Display (C)reate page
export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
    // show the edit view
    res.render('index', { title: 'Add', page: 'update', contact: '', displayName: UserDisplayName(req) });
}

// Process Functions

// Process (E)dit page
export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // instantiate a new contact Item
    let updatedcontactItem = new contact
    ({
        //"_id":id,
        "FullName": req.body.FullName,
        "ContactNumber": req.body.ContactNumber,
        "EmailAddress": req.body.EmailAddress
    });
  
    // find the contact item via db.contact.update({"_id":id}) and then update
    contact.updateOne({_id: id}, updatedcontactItem, {}, (err) =>{
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      res.redirect('/contactlist');
    });
}

// Process (C)reate page
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
  // instantiate a new contact
  let newContact = new contact
  ({
        "FullName": req.body.FullName,
        "ContactNumber": req.body.ContactNumber,
        "EmailAddress": req.body.EmailAddress
  });

  // db.contact.insert({contact data is here...})
  contact.create(newContact, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contactlist');
  });
}

// Process (D)elete page
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

  // db.contact.remove({"_id: id"})
  contact.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contactlist');
  });
}

