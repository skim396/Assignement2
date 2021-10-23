/*
* File Name  : index.ts
* Author     : Yonas Berhane
* Student Id : 301165447
* Date       : September 27, 2021
* Description: Assignment 1- Express Portfolio Site for COMP229-F2021
*/

import express from 'express';
const router = express.Router();
export default router;

import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayLoginPage, DisplayProjectsPage, DisplayRegisterPage, DisplayServicesPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage } from '../Controllers/index'; 

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

//-------------------------------------------------------------------------------------

//--Display and process login page

/* GET login page. */
router.get('/login', DisplayLoginPage);

/* POST login page. */
router.post('/login', ProcessLoginPage);

/* GET register page. */
router.get('/register', DisplayRegisterPage);

/* POST register page. */
router.post('/register', ProcessRegisterPage);


/* GET logout page. */
router.get('/logout', ProcessLogoutPage);

//module.exports = router;